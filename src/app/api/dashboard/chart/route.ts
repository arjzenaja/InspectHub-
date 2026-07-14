import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function startOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function endOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
}

function formatDateLabel(date: Date, range: string) {
  if (range === "jan_feb") {
    return date.toLocaleDateString("id-ID", { month: "short", year: "numeric" });
  }
  return date.toLocaleDateString("id-ID", { day: "2-digit", month: "short" });
}

function buildDateSlots(start: Date, end: Date, range: string) {
  const dates: Date[] = [];

  if (range === "jan_feb") {
    const startMonth = new Date(start.getFullYear(), 0, 1);
    const endMonth = new Date(start.getFullYear(), 1, 1);
    endMonth.setMonth(endMonth.getMonth() + 1);
    for (let month = startMonth.getMonth(); month < endMonth.getMonth(); month += 1) {
      dates.push(new Date(start.getFullYear(), month, 1));
    }
    return dates;
  }

  const current = startOfDay(start);
  while (current <= end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

function getRangeDates(range: string) {
  const now = new Date();
  const end = endOfDay(now);
  const start = new Date(end);

  switch (range) {
    case "1_hari":
      start.setDate(end.getDate() - 1);
      break;
    case "2_hari":
      start.setDate(end.getDate() - 2);
      break;
    case "7_hari":
      start.setDate(end.getDate() - 6);
      break;
    case "2_minggu":
      start.setDate(end.getDate() - 13);
      break;
    case "1_bulan":
      start.setDate(end.getDate() - 29);
      break;
    case "jan_feb": {
      const year = now.getFullYear();
      return {
        start: new Date(year, 0, 1),
        end: new Date(year, 1, 28, 23, 59, 59, 999),
      };
    }
    default:
      start.setDate(end.getDate() - 6);
  }

  return { start: startOfDay(start), end };
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const range = url.searchParams.get("range") ?? "7_hari";
    const { start, end } = getRangeDates(range);

    const laporan = await prisma.laporan.findMany({
      where: {
        createdAt: {
          gte: start,
          lte: end,
        },
      },
      select: {
        createdAt: true,
      },
    });

    const slots = buildDateSlots(start, end, range);
    const counts = new Map<string, number>();

    if (range === "jan_feb") {
      for (const month of [0, 1]) {
        const label = new Date(start.getFullYear(), month, 1).toLocaleDateString("id-ID", { month: "short", year: "numeric" });
        counts.set(label, 0);
      }
      laporan.forEach((item) => {
        const label = item.createdAt.toLocaleDateString("id-ID", { month: "short", year: "numeric" });
        counts.set(label, (counts.get(label) ?? 0) + 1);
      });
    } else {
      slots.forEach((date) => {
        counts.set(formatDateLabel(date, range), 0);
      });
      laporan.forEach((item) => {
        const label = formatDateLabel(item.createdAt, range);
        counts.set(label, (counts.get(label) ?? 0) + 1);
      });
    }

    const chartData = Array.from(counts.entries()).map(([label, value]) => ({ label, value }));

    return NextResponse.json(chartData);
  } catch (error: unknown) {
    console.error("GET /api/dashboard/chart error:", error);
    return NextResponse.json([], { status: 200 });
  }
}
