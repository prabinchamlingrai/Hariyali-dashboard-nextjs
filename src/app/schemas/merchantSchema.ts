import { z } from 'zod';


const merchantSchema = z.object({
  number: z.string()
    .min(6)
    .max(20)
    .nonempty("Enter the following input to proceed")
    .regex(/^[0-9]+$/)
    .refine(value => parseInt(value, 10) !== 0, {
      message: "Number cannot be zero"
    }),

  name: z.string()
    .min(5)
    .max(50)
    .nonempty("Enter the following input to proceed"),

  address: z.string()
    .min(5)
    .max(100)
    .nonempty("Enter the following input to proceed"),

  projectChiefName: z.string()
    .min(3)
    .max(50)
    .nonempty("Enter the following input to proceed"),

  vatTax: z.string()
    .min(10)
    .max(15)
    .regex(/^\d{10,15}$/)
    .nonempty("Enter the following input to proceed"),

  email: z.string()
    .email("Please enter a valid email address")
    .nonempty("Enter the following input to proceed"),

  panVatNumber: z.string()
    .min(6)
    .max(20)
    .nonempty("Enter the following input to proceed"),

  wardNumber: z.string()
    .min(1)
    .max(10)
    .nonempty("Enter the following input to proceed")
    .regex(/^[0-9]+$/)
    .refine(value => parseInt(value, 10) !== 0, {
      message: "Ward number cannot be zero"
    }),

  toleNumber: z.string()
    .min(1)
    .max(10)
    .nonempty("Enter the following input to proceed"),

  houseNumber: z.string()
    .min(1)
    .max(10)
    .nonempty("Enter the following input to proceed")
    .regex(/^[0-9A-Za-z]+$/),

  pradesh: z.string().nonempty("Enter the following input to proceed"),
  district: z.string().nonempty("Enter the following input to proceed"),
  nagarPalika: z.string().nonempty("Enter the following input to proceed")
});

export default merchantSchema;
