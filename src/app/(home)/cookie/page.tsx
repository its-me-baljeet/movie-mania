import CookieBtn from "@/components/cookieBtn";
import LogoutBtn from "@/components/logoutBtn";
import { cookies } from "next/headers";

export default async function CookiePage() {
    const userCookies = await cookies();
    const name = userCookies.get('name')?.value;
    return (
        <div>
            {name}
            <CookieBtn />
            <LogoutBtn />
        </div>
    )
}