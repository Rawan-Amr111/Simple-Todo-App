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
    <div
      className="
      max-w-6xl mx-auto mt-12 p-6 rounded-2xl shadow-2xl border 
      bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 border-gray-300
      dark:from-neutral-900 dark:via-black dark:to-neutral-800 dark:border-neutral-700
    "
    >
      <Table>
        <TableCaption className="italic text-gray-600 dark:text-neutral-400">
          {todos.length
            ? "A list of your recent todos."
            : "No todos yet. Add your first one 🚀"}
        </TableCaption>

        <TableHeader>
          <TableRow className="border-b border-gray-300 dark:border-neutral-700 bg-gray-200/50 dark:bg-transparent">
            <TableHead className="text-gray-800 dark:text-neutral-300">
              ID
            </TableHead>
            <TableHead className="text-gray-800 dark:text-neutral-300">
              Title
            </TableHead>
            <TableHead className="text-gray-800 dark:text-neutral-300">
              Completed
            </TableHead>
            <TableHead className="text-right text-gray-800 dark:text-neutral-300">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo?.id}
              className="transition-all duration-300 hover:bg-gray-300/40 dark:hover:bg-neutral-800/60 hover:scale-[1.01]"
            >
              <TableCell className="font-mono text-sm text-gray-600 dark:text-neutral-400">
                {todo?.id}
              </TableCell>
              <TableCell className="font-semibold text-gray-900 dark:text-neutral-200">
                {todo?.title}
              </TableCell>
              <TableCell>
                {todo?.completed ? (
                  <Badge
                    className="
                    bg-green-500/90 text-white shadow-sm
                    dark:bg-gradient-to-r dark:from-green-500 dark:to-emerald-600 dark:shadow-md
                  "
                  >
                    Completed
                  </Badge>
                ) : (
                  <Badge
                    className="
                    bg-red-500/90 text-white shadow-sm
                    dark:bg-gradient-to-r dark:from-red-500 dark:to-orange-500 dark:shadow-md
                  "
                  >
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
            <TableRow className="border-t border-gray-300 dark:border-neutral-700 bg-gray-200/40 dark:bg-transparent">
              <TableCell
                colSpan={3}
                className="font-semibold text-gray-800 dark:text-neutral-300"
              >
                Total
              </TableCell>
              <TableCell className="text-right text-gray-900 dark:text-neutral-200 font-bold">
                {todos.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>

      {!todos.length && (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <p className="mb-4 text-gray-600 dark:text-neutral-400">
            You don’t have any todos yet.
          </p>
        </div>
      )}
    </div>
  );
}
