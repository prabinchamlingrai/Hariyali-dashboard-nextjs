import { z } from 'zod';

const farmersSchema = z.object({
  number: z.string().min(6).max(20).nonempty(),
  name: z.string().min(5).max(10).nonempty(),
  address: z.string().min(5).max(100).nonempty(),
  projectChiefName: z.string().min(3).max(50).nonempty(),
  vatTax: z.string().min(10).max(15).nonempty(),
  email: z.string().email(),
  panVatNumber: z.string().min(6).max(20).nonempty(),
  wardNumber: z.string().min(1).max(10).nonempty(),
  // toleNumber: z.string().min(1).max(10).nonempty(),
  // houseNumber: z.string().min(1).max(10).nonempty(),
  pradesh: z.string().nonempty(),
  district: z.string().nonempty(),
  nagarPalika: z.string().nonempty(),
 
 
 
  // // Bank Name
  // bankName: z.string()
  //   .min(3)
  //   .max(50)
  //   .nonempty("Enter the following input to proceed"),

  // // Bank Account Number
  // bankAccountNumber: z.string()
  //   .min(6)
  //   .max(20)
  //   .nonempty("Enter the following input to proceed")
  //   .regex(/^[0-9]+$/)
  //   .refine(value => parseInt(value, 10) !== 0, {
  //     message: "Bank Account Number cannot be zero"
  //   }),
});

export default farmersSchema;
