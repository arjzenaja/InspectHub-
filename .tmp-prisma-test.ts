import "dotenv/config";
import { prisma } from "./src/lib/prisma";
console.log("DATABASE_URL=" + process.env.DATABASE_URL);
(async () => {
  try {
    const user = await prisma.user.findUnique({ where: { email: "test@example.com" } });
    console.log(user);
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
