import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getBooks = createAsyncThunk("book/getBooks", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await fetch("https://my-json-server.typicode.com/FathyMuhamed/server-bookStore/books");
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
export const insertBook = createAsyncThunk("book/insertBooks", async (dataBook, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
        const res = await fetch("https://my-json-server.typicode.com/FathyMuhamed/server-bookStore/books", {
            method: "POST",
            body: JSON.stringify(dataBook),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        });
        const data = await res.json();
        return data
    } catch (error) {
        rejectWithValue(error.message);
    }
});
export const deleteBook = createAsyncThunk("book/deleteBook", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        await fetch(`https://my-json-server.typicode.com/FathyMuhamed/server-bookStore/books/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        });
        return id
    } catch (error) {
        rejectWithValue(error.message);
    }
});
export const bookSlice = createSlice({
    name: "book",
    initialState: { books: [], isLoading: false, error: null },
    extraReducers: {
        //getBooks
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        //insertBooks
        [insertBook.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [insertBook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books.push(action.payload)
        },
        [insertBook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        //deleteBooks
        [deleteBook.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteBook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = state.books.filter(book => book.id !== action.payload)

        },
        [deleteBook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

    }
})

export default bookSlice.reducer;