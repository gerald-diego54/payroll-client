import z from "zod";

const time_format = /^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;

export const DTRSchema = z.object({
    date: z.date(),
    time_in: z.string().refine((time_in) => {
        if (time_format.test(time_in)) {
            throw new Error("Invalid time format");
        }
    }),
    time_out: z.string().refine((time_out) => {
        if (time_format.test(time_out)) {
            throw new Error("Invalid time format");
        }
    }),
    remarks: z.string(),
});
