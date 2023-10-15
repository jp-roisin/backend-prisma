import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: Find prisma utils to get the type from a table that
// omits all the auto generated values.
type NewUser = Omit<User, "id" | "uuid" | "createdAt" | "updatedAt">;

export const createUser = async (data: NewUser) => {
  return await prisma.user.create({
    data,
  });
};

export const getUser = async (uuid: string) => {
  return await prisma.user.findUnique({
    where: {
      uuid,
    },
  });
};

export const updateUser = async (uuid: string, data: User) => {
  return await prisma.user.update({
    where: {
      uuid,
    },
    data,
  });
};

export const deleteUser = async (uuid: string) => {
  return await prisma.user.delete({
    where: {
      uuid,
    },
  });
};

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export async function authenticateUser(email: string, password: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      // User not found
      return null;
    }

    // Compare the provided password with the stored hashed password
    const dbPassword = user.password;
    // const passwordMatch = await comparePasswords(password, user.password);

    if (dbPassword === password) {
      // Passwords match, user is authenticated
      return user;
    } else {
      // Passwords don't match
      return null;
    }
  } catch (error) {
    throw error;
  }
}
