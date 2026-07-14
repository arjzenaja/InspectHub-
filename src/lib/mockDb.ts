export async function safeQuery<T = any>(prismaQuery: () => Promise<T>, fallbackQuery: () => any): Promise<any> {
  try {
    return await prismaQuery();
  } catch (error: any) {
    console.warn("[Prisma Fallback Mode]: Database connection error.");
    return fallbackQuery();
  }
}
