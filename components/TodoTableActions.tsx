"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Edit, Pen, Trash } from "lucide-react";
import { deleteTodoListAction } from "@/actions/todo.actions";
import { Spinner } from "./Spinner";
import EditToDoForm from "./EditTodoForm";
import { ITodo } from "@/interfaces";

const TodoTableActions = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <EditToDoForm todo={todo} />

      <Button
        size="icon"
        variant="destructive"
        onClick={async () => {
          setLoading(true);
          await deleteTodoListAction({ id: todo.id as string });
          setLoading(false);
        }}
        className="cursor-pointer"
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoTableActions;
