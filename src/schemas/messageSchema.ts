import {z} from 'zod'


export const messageSchema = z.object({
    content: z.string()
        .min(10, {message: "message should be atleast of 10 characters"})
        .max(300, {message: "message should not be longer than 300 characters"}) 
})