import { z } from "zod";

const ResourceSchema = z.object({
  id: z.uuid(),
});

const ErrorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string(),
});

const SuccessResponseSchema = z.object({
  success: z.literal(true),
  data: ResourceSchema,
});

const ApiResponseSchema = z.discriminatedUnion("success", [
  ErrorResponseSchema,
  SuccessResponseSchema,
]);

type Resource = z.infer<typeof ResourceSchema>;
type ApiResponse = z.infer<typeof ApiResponseSchema>;

export { type ApiResponse, ApiResponseSchema, type Resource, ResourceSchema };
