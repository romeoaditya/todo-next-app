import {IColumn, ITask} from "@/types/Task";

const COLUMNS: IColumn[] = [
  {
    id: "TODO",
    title: "To Do",
  },
  {
    id: "IN_PROGRESS",
    title: "In Progress",
  },
  {
    id: "DONE",
    title: "Done",
  },
];

const INITIAL_TASKS: ITask[] = [
  {
    id: "1",
    title: "Research",
    description: "Research about the project",
    status: "DONE",
  },
  {
    id: "2",
    title: "Design",
    description: "Design the project",
    status: "IN_PROGRESS",
  },
  {
    id: "3",
    title: "Development",
    description: "Development the project",
    status: "TODO",
  },
];

export {COLUMNS, INITIAL_TASKS};
