import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  db: [],
};

export const crudSlice = createSlice({
  name: "crud",
  initialState: {
    db: initialState.db,
  },
  reducers: {
    read_all_data: (state, action) => {
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    },
    create_data: (state, action) => {
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    },
    update_data: (state, action) => {
      let newData = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );

      return {
        ...state,
        db: newData,
      };
    },
    delete_data: (state, action) => {
      let newData = state.db.filter((el) => el.id !== action.payload);

      return {
        ...state,
        db: newData,
      };
    },
    no_data: () => {
      return initialState;
    },
  },
});

export default crudSlice.reducer;

export const { read_all_data, create_data, update_data, delete_data, no_data } =
  crudSlice.actions;
