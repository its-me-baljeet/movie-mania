//@ts-nocheck
'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const users = [
    {
        username: "baljeet123",
        password: "12345678",
    },
    {
        usename: "qwertyu",
        password: "12345678"
    }
];
export async function handleSubmit(formData) {
    const username = formData.username;
    const password = formData.password;
    console.log("Recieved a Request");

    const user = users.find((user) => (user.username == username && user.password == password));

    if (user) {
        const userCookies = await cookies();
        userCookies.set('user', user.username);
        return {
            success: true,
            message: "Login Success!"
        }
    }
    else {
        return {
            success: false,
            message: "Invalid Credentials!"
        }
    }
    // if (username != user.username) {
    //     console.log("Username not found!");
    //     return {
    //         success: false,
    //         message: "Username not found!"
    //     };
    // }
    // if (password != user.password) {
    //     console.log("Incorrect Password!");
    //     return {
    //         success: false,
    //         message: "Incorrect Password!"
    //     };
    // }
    // console.log("Login Successful!");
    // redirect('/');
    // return (
    //     {
    //         success: true,
    //         message: "User login Successful!"
    //     }
    // );
}
export async function handleClick(name: string) {
    console.log("Recieved a Request");
    console.log(name);
}

export async function setCookie() {
    const userCookies = await cookies();
    userCookies.set('name', 'Baljeet Singh');
}

export async function logout() {
    const userCookies = await cookies();
    userCookies.delete("name");
}