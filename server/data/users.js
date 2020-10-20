import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("xxxx", 10),
    isAdmin: true,
  },
  {
    name: "Aiden Cooper",
    email: "aiden@example.com",
    password: bcrypt.hashSync("xxxx", 10),
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("xxxx", 10),
  },
];

export default users;
