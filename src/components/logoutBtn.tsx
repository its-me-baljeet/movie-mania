import { logout } from "@/utils/actions";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export default function LogoutBtn() {
    return (
        <Button
            onClick={logout} className="text-white cursor-pointer"
        >
            <LogOut />
            Logout
        </Button>
    )
}