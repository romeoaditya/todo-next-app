import {FormEvent} from "react";
import Button from "./Button";
import {ITask} from "@/types/Task";

interface ModalTaskProps {
  type?: "Add" | "Update";
  selectedTask?: ITask;
  onCancel: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const ModalTask = (props: ModalTaskProps) => {
  const {onCancel, onSubmit, type = "Add", selectedTask} = props;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-bold text-neutral-700">{type} Task</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <label htmlFor="title" className="flex flex-col gap-1">
            <span className="font-semibold text-neutral-600">Title</span>
            <input
              type="text"
              placeholder="Insert Task Title"
              name="title"
              className="rounded-lg border border-neutral-300 p-2"
              required
              id="title"
              defaultValue={selectedTask?.title}
            />
          </label>
          <label htmlFor="description" className="flex flex-col gap-1">
            <span className="font-semibold text-neutral-600">Description</span>
            <textarea
              placeholder="Insert Task Description"
              name="description"
              className="rounded-lg resize-none border border-neutral-300 p-2"
              required
              id="description"
              defaultValue={selectedTask?.description}
            />
          </label>
          <div className="flex w-full items-center justify-end gap-2">
            <Button onClick={onCancel} className="bg-neutral-500">
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-500">
              {type} Task
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ModalTask;
