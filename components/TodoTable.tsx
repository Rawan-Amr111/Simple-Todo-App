import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { ITodo } from "@/interfaces";
import TodoTableActions from "./TodoTableActions";

export default function TodoTable({ todos }: { todos: ITodo[] }) {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-gradient-to-br from-neutral-900 via-black to-neutral-800 rounded-2xl shadow-2xl border border-neutral-700">
      <Table>
        <TableCaption className="text-neutral-400 italic">
          {todos.length
            ? "A list of your recent todos."
            : "No todos yet. Add your first one 🚀"}
        </TableCaption>

        <TableHeader>
          <TableRow className="border-b border-neutral-700">
            <TableHead className="text-neutral-300">ID</TableHead>
            <TableHead className="text-neutral-300">Title</TableHead>
            <TableHead className="text-neutral-300">Completed</TableHead>
            <TableHead className="text-right text-neutral-300">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo?.id}
              className="transition-all duration-300 hover:bg-neutral-800/60 hover:scale-[1.01]"
            >
              <TableCell className="font-mono text-sm text-neutral-400">
                {todo?.id}
              </TableCell>
              <TableCell className="font-semibold text-neutral-200">
                {todo?.title}
              </TableCell>
              <TableCell>
                {todo?.completed ? (
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md">
                    Completed
                  </Badge>
                ) : (
                  <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md">
                    Not Completed
                  </Badge>
                )}
              </TableCell>
              <TableCell className="flex items-center space-x-2 justify-end">
                <TodoTableActions todo={todo} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        {todos.length > 0 && (
          <TableFooter>
            <TableRow className="border-t border-neutral-700">
              <TableCell colSpan={3} className="font-semibold text-neutral-300">
                Total
              </TableCell>
              <TableCell className="text-right text-neutral-200 font-bold">
                {todos.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>

      {!todos.length && (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <p className="text-neutral-400 mb-4">You don’t have any todos yet.</p>
        </div>
      )}
    </div>
  );
}
