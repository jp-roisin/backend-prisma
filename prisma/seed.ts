import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const franchise = await prisma.franchise.upsert({
    where: { registrationNumber: 1762 },
    update: {},
    create: {
      registrationNumber: 1762,
      name: "VBC Rixensart",
    },
  });

  const user = await prisma.user.upsert({
    where: { email: "dev@dev.com" },
    update: {},
    create: {
      email: "dev@dev.com",
      firstName: "Jean-Paul",
      lastName: "Roisin",
      pseudo: "JP",
      password: "dev",
      gender: "MALE",
      height: 193,
      birthDate: new Date("1994-11-02"),
      // position: ["OPPOSITE"],
      teams: {
        create: [
          {
            name: "Province 2A",
            division: "PROVINCIAL_2",
            distinction: "A",
            gender: "MALE",
            franchiseId: franchise.id ?? 1,
          },
        ],
      },
    },
  });

  console.log({ user, franchise });
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
