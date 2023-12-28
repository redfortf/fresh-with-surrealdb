import { Handlers, PageProps } from "$fresh/server.ts";
import { State } from "$/routes/_middleware.ts";

import NavPanel from "$/islands/NavPanel.tsx";
import StudentsPanel from "$/islands/StudentsPanel.tsx";

import StudentDAO, { StudentSchema } from "$/database/student.ts";

interface Props {
    allStudents: StudentSchema[],
}

export const handler: Handlers<Props, State> = {
    GET: async (_req, ctx) => {
        const studentDAO = new StudentDAO(ctx.state.context.cirql)

        return await ctx.render({
            allStudents: await studentDAO.getAll(),
        });
    },
};

export default (props: PageProps<Props>) => {
    return (
        <div class = "flex flex-col gap-2">
            <NavPanel />
            <StudentsPanel
                allStudents = {props.data.allStudents} />
        </div>
    );
}
