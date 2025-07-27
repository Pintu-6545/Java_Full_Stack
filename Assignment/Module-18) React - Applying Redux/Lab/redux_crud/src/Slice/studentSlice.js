import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// read Student Data funtion
export const studentread = createAsyncThunk(
    'studentread', async (data, { rejectWithValue }) => {
        try {

            const res = await axios.get("http://localhost:3000/students");
            const result = await res.data
            return result;

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Add new data function
export const studentAdd = createAsyncThunk(
    'studentadd', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("http://localhost:3000/students", data)
            const result = await res.data
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


// Delete Student data Function
export const studentData = createAsyncThunk(
    'studentData', async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:3000/students/${id}`);
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Update Student Data Function
export const editStudent = createAsyncThunk(
    'editStudent', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.put(`http://localhost:3000/students/${data.id}`, data)
            const result = await res.data
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const studentSlice = createSlice({
    name: "studentDetails",
    initialState: {
        student: [],
        loading: false,
        error: ""
    },
    reducers: {
        // pedding
        studentPending: (state) => {
            state.loading = true;
        },
        // fullfield
        studentFullfiled: (state, action) => {
            state.loading = false
            state.student.push(action.payload)
        },
        // reject
        studentReject: (state, action) => {
            state.loading = false
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            // Read  Student Data
            .addCase(studentread.pending, (state) => {
                state.loading = true
            })
            .addCase(studentread.fulfilled, (state, action) => {
                state.loading = false
                state.student = action.payload
            })
            .addCase(studentread.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // Add New Student Data
            .addCase(studentAdd.pending, (state, action) => {
                state.loading = true
            })
            .addCase(studentAdd.fulfilled, (state, action) => {
                state.loading = false
                state.student.push(action.payload)
            })
            .addCase(studentAdd.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // Delete Student Data 

            .addCase(studentData.pending, (state, action) => {
                state.loading = true
            })
            .addCase(studentData.fulfilled, (state, action) => {
                state.loading = false

                // index or data.id
                state.student = state.student.filter((data, index) => index !== action.payload)
            })
            .addCase(studentData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })


            
            // Update Student Data 
            .addCase(editStudent.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(editStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.student = state.student.map((ele) =>
                    ele.id === action.payload.id ? action.payload : ele
                );
            })
            .addCase(editStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


    }

})





export const { studentPending, studentFullfiled, studentReject } = studentSlice.actions;

export default studentSlice.reducer;

