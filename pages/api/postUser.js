import prisma from "../../utils/prisma";

export default async function handler(req, res) {
  // if (req.method === "POST") {
  //   try {
  //     const { name, age, title } = req.body;
  //     //   const users = await prisma.users.findMany();
  //     const newUser = await prisma.users.create({
  //       data: {
  //         name: name,
  //         age: parseInt(age),
  //       },
  //     });
  //     //   const posts = await prisma.posts.findMany();
  //     //   const newPost = await prisma.posts.create({
  //     //     data: {
  //     //       id: posts.length,
  //     //       title: title,
  //     //     },
  //     //   });
  //     //   const users_posts = await prisma.users_posts.findMany();
  //     //   const post_user = await prisma.users_posts.create({
  //     //     data: {
  //     //       id: users_posts.length,
  //     //       user_id: users.length,
  //     //       post_id: posts.length,
  //     //     },
  //     //   });
  //     return res.status(200).json(newUser);
  //   } catch (error) {
  //     return res.status(500).json({ message: error.message });
  //   }
  // }
}
