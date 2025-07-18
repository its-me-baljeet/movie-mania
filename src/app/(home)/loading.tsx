import { LoaderCircle } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <LoaderCircle size={40} className="animate-spin" />
        </div>
    )
}