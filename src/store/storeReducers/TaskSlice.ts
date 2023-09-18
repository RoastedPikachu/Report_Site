import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: number;
    type: string;
    date: string;
    link: string;
}

interface TaskState {
    tasks: Task[]
}

const initialState:TaskState = {
    tasks: []
}

export const taskSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {
        addTask(state: TaskState, action: PayloadAction<Task>) {
            state.tasks.push(action.payload);
        },
        clearTasks(state: TaskState) {
            state.tasks = [];
        }
    }
});

export default taskSlice.reducer;