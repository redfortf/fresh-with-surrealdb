// For some reasons `deno task build` won't parse this particular module 
// without Fragment (`<></>`) at the root of JSX.
export default () => {
    return (
        <>
            <nav class = "bg-gray-800">
               <div class = "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class = "relative flex h-16 items-center justify-between">
                        <div class = "absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button class = {[
                                "relative inline-flex items-center",
                                "justify-center rounded-md p-2 text-gray-400",
                                "hover:bg-gray-700 hover:text-white",
                                "focus:outline-none focus:ring-2",
                                "focus:ring-inset focus:ring-white"
                            ].join(" ")} 
                                type = "button" 
                                aria-controls = "mobile-menu" 
                                aria-expanded = "false">
                                <span class = "absolute -inset-0.5" />
                                <span class = "sr-only">
                                    Open main menu
                                </span>
                                <svg class = "block h-6 w-6" 
                                    fill = "none" 
                                    viewBox = "0 0 24 24" 
                                    stroke-width = "1.5" 
                                    stroke = "currentColor" 
                                    aria-hidden = "true">
                                    <path d = "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        stroke-linecap = "round" 
                                        stroke-linejoin = "round" />
                                </svg>
                            </button>
                        </div>
                        <div class = {[
                            "flex flex-1 items-center justify-center",
                            "sm:items-stretch sm:justify-start"
                        ].join(" ")}>
                            <div class = "flex flex-shrink-0 items-center">
                                <img class = "h-8 w-auto" 
                                    src = "./logo.svg" 
                                    alt = "Logo" />
                            </div>
                            <div class = "hidden sm:ml-6 sm:block">
                                <div class = "flex space-x-4">
                                    <a class = {[
                                        "bg-gray-900 text-white rounded-md px-3 py-2",
                                        "text-sm font-medium"
                                    ].join(" ")} 
                                        href = "#"
                                        aria-current = "page">
                                        Dashboard
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
