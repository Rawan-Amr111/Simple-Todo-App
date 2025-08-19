"use server";

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();
export const getTodoListAction = async ({
  userId,
}: {
  userId: string | null;
}) => {
  const todos = await prisma.todo.findMany({
    where: {
      user_id: userId as string,
    },
  });
  return todos;
};
export const createTodoListAction = async ({
  title,
  body,
  completed,
  userId,
}: {
  title: string;
  body: string | undefined;
  completed: boolean;
  userId: string | null;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
      user_id: userId as string,
    },
  });
  revalidatePath("/");
};
export const updateTodoListAction = async ({
  id,
  title,
  body,
  completed,
}: ITodo) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath("/");
};
export const deleteTodoListAction = async ({ id }: { id: string }) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
