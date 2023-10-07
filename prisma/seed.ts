import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const dev = await prisma.user.upsert({
    where: { email: "dev@dev.com" },
    update: {},
    create: {
      email: "dev@dev.com",
      name: "Dev",
      password: "dev",
    },
  });
  console.log(dev);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
