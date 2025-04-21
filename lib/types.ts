import * as z from "zod";

export const formSchema = z.object({
  location: z.string().min(1, "Please select a location"),
  dateRange: z.object({
    from: z.date(),
    to: z.date(),
  }),
  numOfguests: z.number(),
});

export type FormValues = z.infer<typeof formSchema>;
