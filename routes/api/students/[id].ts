import { Handlers } from "$fresh/server.ts";
import { State } from "$/routes/_middleware.ts";

import StudentDAO from "$/database/student.ts";

export const handler: Handlers<unknown, State> = {
    DELETE: async (_req, ctx) => {
        const studentDAO = new StudentDAO(ctx.state.context.cirql)
        const id = ctx.params.id;
        return new Response(JSON.stringify(await studentDAO.del(id)))
    }
};
