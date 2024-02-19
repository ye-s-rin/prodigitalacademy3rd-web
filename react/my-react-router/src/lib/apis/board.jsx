import axios from "axios";
import instance from "./base";

export async function fetchBoardList() {
    const response = await instance.get("/board");

    return response.data;
};

export async function fetchBoard(boardId) {
    const response = await instance.get(`/board/${boardId}`);

    return response.data;
};