"use client";

import { Urbanist } from "next/font/google";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

const urbanist = Urbanist({ subsets: ["latin"] });

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-8 bg-slate-950/50 p-4 rounded-lg ${urbanist.className}`}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-50 font-semibold tracking-wider text-2xl">
                Name
              </FormLabel>
              <FormControl>
                <Input placeholder="Name" className="text-xl" {...field} />
              </FormControl>
              <FormDescription className="text-slate-300">
                This is your name or nickname.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-50 font-semibold tracking-wider text-xl">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  className="text-xl"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-slate-300">
                This is your personal email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-50 font-semibold tracking-wider text-xl">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none text-xl"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-slate-300">
                Leave a brief message about your goals and desires.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="text-2xl hover:scale-105 active:scale-95"
          size={"lg"}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
