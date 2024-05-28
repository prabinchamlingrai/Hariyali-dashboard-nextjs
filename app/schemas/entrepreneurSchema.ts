import { z } from 'zod';

const entrepreneurSchema = z.object({
  number: z.string()
    .min(6)
    .max(20)
    .nonempty("required")
    .regex(/^[0-9]+$/)
    .refine(value => parseInt(value, 10) !== 0, {
      message: "Number cannot be zero"
    }),

  name: z.string()
    .min(5)
    .max(50)
    .nonempty("required"),

  address: z.string()
    .min(5)
    .max(100)
    .nonempty("required"),

  projectChiefName: z.string()
    .min(3)
    .max(50)
    .nonempty("required"),

  vatTax: z.string()
    .min(10)
    .max(15)
    .regex(/^\d{10,15}$/)
    .nonempty("required"),

  email: z.string()
    .email("Please enter a valid email address")
    .nonempty("required"),

  panVatNumber: z.string()
    .min(6)
    .max(20)
    .nonempty("required"),

  wardNumber: z.string()
    .min(1)
    .max(10)
    .nonempty("required")
    .regex(/^[0-9]+$/)
    .refine(value => parseInt(value, 10) !== 0, {
      message: "Ward number cannot be zero"
    }),

  // toleNumber: z.string()
  //   .min(1)
  //   .max(10)
  //   .nonempty("required"),

  // houseNumber: z.string()
  //   .min(1)
  //   .max(10)
  //   .nonempty("required")
  //   .regex(/^[0-9A-Za-z]+$/),

  pradesh: z.string().nonempty("required"),
  district: z.string().nonempty("required"),
  nagarPalika: z.string().nonempty("required"),

  // Bank Name
  bankName: z.string()
    .min(3)
    .max(50)
    .nonempty("Enter the following input to proceed"),

    // Bank Account Number
  bankAccountNumber: z.string()
  .min(6)
  .max(20)
  .nonempty("Enter the following input to proceed")
  .regex(/^[0-9]+$/)
  .refine(value => parseInt(value, 10) !== 0, {
    message: "Bank Account Number cannot be zero"
  }),
});


export default entrepreneurSchema;
