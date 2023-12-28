import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Signal } from "@preact/signals";

type Props = Omit<Omit<JSX.HTMLAttributes<HTMLInputElement>, "value">, "onChange"> & {
    value: Signal<string>
}

export default (props: Props) => {
    return (
        <input class = {[
            "w-full h-full px-2 py-2 bg-gray-200 rounded-md border-none outline-none",
            "transition"
        ].join(" ")}
            {...props}
            disabled = {!IS_BROWSER || props.disabled}
            onChange = {e => props.value.value = e.currentTarget.value} />
    );
}
