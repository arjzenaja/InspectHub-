import { NextResponse } from "next/server";

export const successResponse = (data: unknown, message = "Berhasil", status = 200) =>
  NextResponse.json({ success: true, message, data }, { status });

export const errorResponse = (message: string, status = 400, errors?: unknown) =>
  NextResponse.json({ success: false, message, errors }, { status });

export const paginatedResponse = (
  data: unknown[],
  total: number,
  page: number,
  limit: number,
  message = "Berhasil"
) =>
  NextResponse.json({
    success: true,
    message,
    data,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1,
    },
  });
