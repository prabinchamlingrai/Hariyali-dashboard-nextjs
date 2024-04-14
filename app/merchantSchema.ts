import { z } from 'zod';

const merchantSchema = z.object({
  number:z.string().min(6).max(20),
  name: z.string().min(5).max(10),
  address: z.string().min(5).max(100),
  projectChiefName: z.string().min(3).max(50),
  vatTax: z.string().min(10).max(15),
  email: z.string().email(),
  panVatNumber: z.string().min(6).max(20),
});

export default merchantSchema;
