import { cookies } from "next/headers";
import { Button } from "./ui/button";

export default function LoginLogoutBtn() {
    const userCookies = cookies();
    return (
        <Button>

        </Button>
    )
}