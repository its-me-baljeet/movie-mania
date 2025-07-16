import Link from "next/link";
import ClientSwitch from "./switch";

export default function Header() {
    return (
        <div className="h-20 w-full border-b flex justify-between items-center px-5">
            <Link href={"/"}>
                Movie Mania
            </Link>
            <ClientSwitch />
        </div>
    )
}