import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import logger from "@/lib/logger";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    logger.warn("Revalidate request rejected: invalid secret");
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/");
  logger.info("Cache revalidated for path: /");
  return NextResponse.json({ revalidated: true });
}
