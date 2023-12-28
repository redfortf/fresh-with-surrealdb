import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default (props: JSX.HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            {...props}
            disabled = {!IS_BROWSER || props.disabled}
            class = "w-full h-full px-2 py-2 bg-gray-800 text-white rounded-md text-sm font-medium transition hover:bg-gray-900"
        />
    );
}
