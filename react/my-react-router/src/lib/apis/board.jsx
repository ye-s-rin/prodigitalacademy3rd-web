import axios from "axios";
import instance from "./base";

export async function fetchBoardList() {
    const response = await instance.get("/board");

    return response.data;
};