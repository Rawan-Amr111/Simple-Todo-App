"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
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

import { createTodoListAction } from "@/actions/todo.actions";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Spinner } from "./Spinner";

const AddToDoForm = ({ userId }: { userId: string | null }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title: "",
      body: "",
      completed: false,
    },
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const onSubmit = async (data: z.infer<typeof todoFormSchema>) => {
    setLoading(true);
    await createTodoListAction({
      title: data.title,
      body: data.body,
      completed: data.completed,
      userId,
    });
    setLoading(false);
    setOpen(false);
    if (data.completed) {
      setShowSuccess(true);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <div className="flex justify-end mt-3 max-w-6xl mx-auto ">
          <DialogTrigger asChild>
            <Button className="cursor-pointer ">
              <Plus size={14} className="mr-1" />
              New Todo
            </Button>
          </DialogTrigger>
        </div>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Todo</DialogTitle>
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
  );
};

export default AddToDoForm;
