// create a zod schema of
// id as string
// name as string, min length 1, default value "Unnamed Product"
// price as number, min 0
// category as optional string 
// z.string().optional() // optional
// z.default("Unknown Product") // default value if not provided
import { z } from "zod";

export const ProductSchema = z.object({
    id: z.string(),
    name: z.string()
        .min(1, "Name is required")
        .default("Unknown Product"),
    price: z.number()
        .min(0, "Price must be a positive number"),
    category: z.string().optional()
});

export type Product = z.infer<typeof ProductSchema>;
// make a dto from this schema for create
// on create, id is not required

// make a dto from this schema for update
// on update, all fields are optional 
export const UpdateProductDTO = 
    ProductSchema
    .partial() // make all optional
    .omit({ id: true });

// apply model, dto, and controller for product similar to person