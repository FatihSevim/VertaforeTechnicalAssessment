import {createSlice} from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    list: [],
    updateInfo: {},
    idCounter: 0,
  },
  reducers: {
    createBook: (state, action) => {
      const newBook = {...action.payload, id: state.idCounter};
      state.list = [...state.list, newBook];
      state.idCounter++;
    },
    setUpdateInfo: (state, action) => {
      console.log(action.payload);
      state.updateInfo = action.payload;
    },
    updateBook: (state, action) => {
      console.log(state.updateInfo);
      console.log(action.payload);
      const index = state.list.findIndex(
        item => item.id == state.updateInfo.id,
      );
      if (index > -1) {
        state.list[index] = state.updateInfo;
      }
    },
    deleteBook: (state, action) => {
      console.log(action.payload);
      let index;
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].name == action.payload) {
          index = i;
        }
      }
      if (index > -1) {
        state.list.splice(index, 1);
      }
    },
  },
});

export const {createBook, setUpdateInfo, updateBook, deleteBook} =
  bookSlice.actions;

export default bookSlice.reducer;
