import { z } from "zod";
import { categoryBodySchema } from "../schemas/categorySchema";

export type CategoryDto = z.infer<typeof categoryBodySchema>
export type Category = CategoryDto & {id: number}
export type CreateCategoryInput = CategoryDto
export type UpdateCategoryInput = Partial<CategoryDto>

