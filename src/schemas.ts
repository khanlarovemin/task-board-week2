import { z } from "zod";

// Activity 3. Replace this stub with the create-task schema from the lab sheet.
export const CreateTaskSchema = z.object({
  title: z.string().min(1),
  status: z.enum(["open", "doing", "done"]),
  projectId: z.number(),
  dueDate: z.string().optional(),
});

export type CreateTask = z.infer<typeof CreateTaskSchema>;

// Activity 4. Describe the JSON that jsonplaceholder actually returns.
export const ExternalTodoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});
