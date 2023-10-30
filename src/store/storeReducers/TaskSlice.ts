import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  type: string;
  date: string;
  link: string;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      type: "Практическая работа",
      date: "18.09.23",
      link: "/static/КарабутБорис_ОтчетПоПр1.docx",
    },
    {
      id: 2,
      type: "Практическая работа",
      date: "25.09.23",
      link: "/static/КарабутБорис_ОтчетПоПр2.docx",
    },
    {
      id: 3,
      type: "Практическая работа",
      date: "02.10.23",
      link: "/static/ОтчетПоПрактической3_КарабутБорис.docx",
    },
    {
      id: 4,
      type: "Диаграмма Ганта",
      date: "19.10.23",
      link: "/static/ОтчетПоДиаграммеГанта_КарабутБорис_3ИСИП-521.docx",
    },
    {
      id: 5,
      type: "Учебная практика",
      date: "16.10.23",
      link: "/static/Отчёт_по_практике_МДК_05_01_КарабутБорисЕвгеньевич_гр_3ИСИП_521.docx",
    },
  ],
};

export const taskSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask(state: TaskState, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    clearTasks(state: TaskState) {
      state.tasks = [];
    },
  },
});

export default taskSlice.reducer;
