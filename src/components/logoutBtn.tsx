import { logout } from "@/utils/actions";

export default function LogoutBtn() {
    return (
        <button
            onClick={logout}
        >
            Logout
        </button>
    )
}