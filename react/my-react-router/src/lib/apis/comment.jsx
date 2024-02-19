import axios from "axios";
import instance from "./base";

export async function fetchCommentList(boardId) {
    const response = await instance.get(`/comment/${boardId}`);

    return response.data;
};