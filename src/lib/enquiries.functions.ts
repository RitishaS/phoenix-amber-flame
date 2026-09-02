import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(6).max(20),
  email: z.string().trim().email().max(200).nullish(),
  service_type: z.string().trim().min(1).max(80),
  message: z.string().trim().max(2000).nullish(),
  source: z.string().trim().max(120),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    const { getMongoDb, ENQUIRIES_COLLECTION } = await import("./mongo.server");
    const db = await getMongoDb();
    await db.collection(ENQUIRIES_COLLECTION).insertOne({
      name: data.name,
      phone: data.phone,
      email: data.email ?? null,
      service_type: data.service_type,
      message: data.message ?? null,
      source: data.source,
      created_at: new Date(),
    });
    return { ok: true as const };
  });
