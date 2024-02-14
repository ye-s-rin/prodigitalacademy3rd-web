import instance from "./base";

export async function signin(id, pw) {
    const response = await instance.post("/users/login",
        { email: id, password: pw }, { withCredentials: true });

    return response.data;
};

export async function signup(id, pw, nick) {
    const response = await instance.post("/users/signup",
        { email: id, password: pw, nickname: nick }, { withCredentials: true });

    return response.data;
};

export async function logout(id, pw) {
    const response = await instance.post("/users/logout",
        { email: id, password: pw }, { withCredentials: true });

    return response.data;
};