import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBoardList as reqFetchBoardList } from "~/1ib/apis/board";

const initialState = {
    boards: [],
    loading: "idle",
};

const fetchBoardList = createAsyncThunk(
    "boards/fetchBoardList",
    async (data, thunkAPI) => {
        const response = await reqFetchBoardList();
        return response.data;
    }
);

const boardSlice = createSlice({
    name: "boards",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBoardList.fulfilled, (state, action) => {
            console.log("fulfilled");
            console.log(action);
            state.loading = "fulfilled";
            state.boards.push(action.payload);
        });
        builder
            .addCase(fetchBoardList.pending, (state, action) => {
                console.log("pending");
                state.loading = "pending";

                console.log(action);
            })
            .addCase(fetchBoardList.rejected, (state, action) => {
                console.log("rejected");
                state.loading = "rejected";

                console.log(action)
            });
    },
});

export { fetchBoardList };
export default boardSlice.reducer;