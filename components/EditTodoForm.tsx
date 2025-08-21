"use client";
import { Button } from "@/components/ui/button";
import { Pen, Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { email, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoFormSchema } from "@/schema";

import {
  createTodoListAction,
  updateTodoListAction,
} from "@/actions/todo.actions";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { ITodo } from "@/interfaces";
import SuccessOverlay from "./SuccessOverlay";
const EditToDoForm = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title: todo.title,
      body: todo.body as string,
      completed: todo.completed,
    },
  });

  const onSubmit = async (data: z.infer<typeof todoFormSchema>) => {
    setLoading(true);
    await updateTodoListAction({
      id: todo.id,
      title: data.title,
      body: data.body as string,
      completed: data.completed,
    });
    setLoading(false);
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <form>
          <DialogTrigger asChild>
            <Button className="cursor-pointer">
              <Pen size={16} />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Todo</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Do ..." {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Short Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a little bit about your todo"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          You can write a short description about your todo
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="completed"
                    render={({ field }) => (
                      <FormItem className="flex flex-row">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormLabel>Completed</FormLabel>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <Spinner /> Saving
                      </>
                    ) : (
                      "Save"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default EditToDoForm;
