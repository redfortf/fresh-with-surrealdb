import { useSignal } from "@preact/signals";

import NewStudentForm from "$/islands/NewStudentForm.tsx";
import StudentsListItem from "$/islands/StudentsListItem.tsx";

import { StudentSchema } from "$/database/student.ts";

interface Props {
    allStudents: StudentSchema[],
}

export default (props: Props) => { 
    const allStudents = useSignal(props.allStudents);

    return (
        <div class = "flex flex-col gap-2">
            <NewStudentForm
                allStudents = {allStudents} />
            <ul class = "flex flex-col px-2 gap-2">
                {allStudents.value.map(student => (
                    <StudentsListItem student = {student}
                        allStudents = {allStudents} />
                ))}
            </ul>
        </div>
    );
}
