import { Signal, useSignal, batch } from "@preact/signals";

import { StudentSchema } from "$/database/student.ts";

import Input from "$/components/Input.tsx";
import Button from "$/components/Button.tsx";

interface Props {
    allStudents: Signal<StudentSchema[]>
}

export default (props: Props) => {  
    const lastNameInput = useSignal("");
    const firstNameInput = useSignal("");

    const submitButtonHandler = async () => {
        if (firstNameInput.value === "" || lastNameInput.value === "") return;

        const response = await fetch("http://localhost:8000/api/students", {
            method: "POST",
            body: JSON.stringify({
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
            })
        })
        const newStudent = (await response.json()) as StudentSchema;
        
        batch(() => {
            props.allStudents.value = [ ...props.allStudents.value, newStudent ];

            lastNameInput.value = "";
            firstNameInput.value = "";
        })
    }

    return (
        <div class = "flex flex-col px-2 gap-2">
            <div class = "flex flex-col gap-2">
                <label class = "w-full text-sm font-medium leading-6 text-gray-900"
                    for = "lastname">
                    Last name
                </label>
                <div class = "w-full flex rounded">
                    <Input id = "lastname" 
                        value = {lastNameInput} 
                        placeholder = "Input here..." />
                </div>
            </div>
            <div class = "flex flex-col gap-2">
                <label class = "w-full text-sm font-medium leading-6 text-gray-900"
                    for = "firstname">
                    First name
                </label>
                <div class = "w-full flex rounded">
                    <Input id = "firstname" 
                        value = {firstNameInput} 
                        placeholder = "Input here..." />
                </div>
            </div>
            <Button onClick = {submitButtonHandler}>
                Add new
            </Button>
        </div>
    )
}
