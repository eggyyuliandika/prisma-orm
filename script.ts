import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   ... you will write your Prisma Client queries here

  // queries from add new user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Eggy",
  //     email: "eggy@prisma.io",
  //   },
  // });
  // console.log(user);

  // queries from find all users
  //   const users = await prisma.user.findMany();
  //   console.log(users);

  // queries from add new user and with new post
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Bob",
  //       email: "bob@prisma.io",
  //       posts: {
  //         create: {
  //           title: "Hello World",
  //         },
  //       },
  //     },
  //   });
  //   console.log(user);

  // queries from 
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(usersWithPosts, { depth: null });
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
