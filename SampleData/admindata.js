import bcrypt from "bcryptjs";
export const admin={
    username:"Shivraj",
    email:"xyz@gmail.com",
    password:bcrypt.hashSync("12345", 3),
}