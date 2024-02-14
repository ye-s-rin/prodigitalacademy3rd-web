import axios from "axios";
import instance from "./base";

export async function login(id, pw) {
    const response = await instance.post("/users/login",
        { email: id, password: pw }, { withCredentials: true });

    return response.data;
};