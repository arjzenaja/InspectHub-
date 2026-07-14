import { NextResponse } from "next/server";
import path from "path";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    // support multipart/form-data uploads (files via FormData) as well as JSON data-URIs
    let images: string[] = [];

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      const entries: any[] = form.getAll("images").length ? form.getAll("images") : form.getAll("files");
      // entries may be File objects
      for (const e of entries) {
        if (e && typeof e.arrayBuffer === "function") {
          const buf = Buffer.from(await e.arrayBuffer());
          // convert to base64 data URL using guessed mime from name if available
          const name: string = (e as any).name || "file.jpg";
          const ext = name.split(".").pop() || "jpg";
          const mime = `image/${ext === "jpg" ? "jpeg" : ext}`;
          images.push(`data:${mime};base64,${buf.toString("base64")}`);
        }
      }
    } else {
      const body = await request.json();
      images = Array.isArray(body?.images) ? body.images : [];
    }

    if (images.length === 0) {
      return NextResponse.json({ urls: [] });
    }

    const host = request.headers.get("host") || "localhost:3000";
    const proto = request.headers.get("x-forwarded-proto") || "http";
    const base = `${proto}://${host}`;

    const urls: string[] = [];

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      // accept data URL or raw base64
      const match = /^data:(image\/\w+);base64,(.+)$/.exec(img);
      let ext = "jpg";
      let base64 = img;
      if (match) {
        const mime = match[1];
        ext = mime.split("/")[1] || "jpg";
        base64 = match[2];
      }

      urls.push(img.startsWith("data:") ? img : `data:image/${ext};base64,${base64}`);
    }

    return NextResponse.json({ urls });
  } catch (err: any) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
