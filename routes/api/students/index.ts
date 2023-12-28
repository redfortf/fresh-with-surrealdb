import { Handlers } from "$fresh/server.ts";
import { State } from "$/routes/_middleware.ts";

import StudentDAO, { StudentSchema } from "$/database/student.ts";

export const handler: Handlers<unknown, State> = {
    GET: async (_req, ctx) => {
        const studentDAO = new StudentDAO(ctx.state.context.cirql)
        return new Response(JSON.stringify(await studentDAO.getAll()))
    },
    POST: async (req, ctx) => {
        const studentDAO = new StudentDAO(ctx.state.context.cirql)
        const student = (await req.json()) as Omit<StudentSchema, "id">
        return new Response(JSON.stringify(await studentDAO.create(student.firstName, student.lastName)))
    }
};
