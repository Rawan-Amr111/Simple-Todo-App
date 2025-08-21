// app/page.tsx (Server Component)
import { auth } from "@clerk/nextjs/server";
import { getTodoListAction } from "@/actions/todo.actions";
import AddToDoForm from "@/components/AddToDoForm";
import ProgressBar from "@/components/ProgressBar";
import TodoTable from "@/components/TodoTable";

export default async function Home() {
  const { userId } = await auth();
  const todos = await getTodoListAction({ userId });
  const completed = todos.filter((t) => t.completed);

  return (
    <main className="container">
      <ProgressBar
        userId={userId}
        total={todos.length}
        completed={completed.length}
      />
      <AddToDoForm userId={userId} />
      <TodoTable todos={todos} />
    </main>
  );
}
