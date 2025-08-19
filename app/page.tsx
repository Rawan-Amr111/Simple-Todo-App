import { getTodoListAction } from "@/actions/todo.actions";
import AddToDoForm from "@/components/AddToDoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const todos = await getTodoListAction({ userId });
  return (
    <main className="container">
      <AddToDoForm userId={userId} />
      <TodoTable todos={todos} />
    </main>
  );
}
