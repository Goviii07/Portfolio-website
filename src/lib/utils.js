import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export const cn/*cn stand for classname*/ = (...inputs) => {
    return twMerge(clsx(inputs));
}