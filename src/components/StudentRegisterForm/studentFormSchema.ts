import { z } from "zod";

export const studentFormSchema = z.object({
        name: z.string().nonempty(),
        academicRegister: z.string().nonempty(),
        academicEmail: z.string().nonempty(),
        personalEmail: z.string().nonempty(),
        cpf: z.coerce.number().nonnegative(),
        admissionDate: z.coerce.date()
});