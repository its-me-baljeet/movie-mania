'use client'
import { setCookie } from "@/utils/actions";

export default function CookieBtn() {
    return (
        <button
            onClick={setCookie}
        >
            Set Cookie
        </button>
    )
}