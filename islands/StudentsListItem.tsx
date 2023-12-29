import { Signal, batch } from "@preact/signals";

import Button from "$/components/Button.tsx";

import { StudentSchema } from "$/database/student.ts";

interface Props {
    student: StudentSchema,
    allStudents: Signal<StudentSchema[]>
}

export default (props: Props) => {
    const deleteButtonHandler = async () => {
        await fetch(`${window.location.href}api/students/${props.student.id}`, {
            method: "DELETE"
        });
        
        batch(() => {
            props.allStudents.value = props.allStudents.value.filter(elem => elem.id !== props.student.id);
        });
    }

    return (
        <li class = "w-full flex justify-between gap-x-2"
            key = {props.student.id}>
            <div class = "min-w-0 flex-auto">
                <p class = "text-sm font-semibold leading-6 text-gray-900">
                    {props.student.lastName} {props.student.firstName}
                </p>
                <p class = "truncate text-xs leading-5 text-gray-500">
                    {props.student.id}
                </p>
            </div>
            <div class = "right-0 shrink-0 sm:flex sm:flex-col sm:items-end">
                <Button onClick = {deleteButtonHandler}>Delete</Button>
            </div>
        </li>
    )
}
