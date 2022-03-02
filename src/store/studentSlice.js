import { createSlice } from "@reduxjs/toolkit";

const students = [
  {
    id: 1,
    firstName: "Husan",
    lastName: "Dadajonov",
    email: "husan@gmail.com",
    phone: "(99)726-23-46",
    address: "Sirdaryo",
  },
  {
    id: 2,
    firstName: "Ravshan",
    lastName: "Oblayorxonov",
    email: "ravshan@gmail.com",
    phone: "(99)123-45-67",
    address: "Toshkent",
  },
];

const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: students,
    student: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  },
  reducers: {
    getStudent: (state, action) => {
      state.student = state.students.find((el) => el.id == action.payload);
    },
    clearStudent: (state) => {
      state.student = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
      };
    },
    addStudent: (state, action) => {
      state.students = [action.payload, ...state.students];
    },
    updateStudent: (state, action) => {
      state.students = state.students.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    },
  },
});

export const { getStudent, clearStudent, addStudent, updateStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
