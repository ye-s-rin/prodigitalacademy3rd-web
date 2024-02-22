import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBoardList as reqFetchBoardList, fetchBoard as reqFetchBoard } from "~/lib/apis/board";
import { fetchCommentList as reqFetchCommentList } from "~/lib/apis/comment";

const initialState = {
    boards: [],
    boardDetail: [],
    comments: [],
    loading: "idle",
};

export const fetchBoardList = createAsyncThunk(
    "boards/fetchBoardList", // action type
    async () => {
        const response = await reqFetchBoardList();
        return response;
    }
);

export const fetchBoard = createAsyncThunk(
    "boards/fetchBoard",
    async (boardId) => {
        const response = await reqFetchBoard(boardId);
        return response;
    }
);

export const fetchCommentList = createAsyncThunk(
    "boards/fetchCommentList",
    async (boardId) => {
        const response = await reqFetchCommentList(boardId);
        return response;
    }
);

const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBoardList.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.boards = action.payload;
            })
            .addCase(fetchBoardList.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(fetchBoardList.rejected, (state) => {
                state.loading = "rejected";
            })
            .addCase(fetchBoard.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.boardDetail = action.payload;
            })
            .addCase(fetchBoard.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(fetchBoard.rejected, (state) => {
                state.loading = "rejected";
            })
            .addCase(fetchCommentList.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.comments = action.payload;
            })
            .addCase(fetchCommentList.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(fetchCommentList.rejected, (state) => {
                state.loading = "rejected";
            });
    },
});

export default boardSlice.reducer;
