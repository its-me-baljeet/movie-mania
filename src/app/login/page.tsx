'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { handleSubmit } from "@/utils/actions";

type FormErrors = {
    username?: string;
    password?: string;
    message?: string;
};

export default function LoginPage() {
    const [errors, setErrors] = useState<FormErrors>({});
    const router = useRouter();

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErrors({});

        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        const errorObj: FormErrors = {};

        if (!username) {
            errorObj.username = "Username is required.";
        }
        if (!password) {
            errorObj.password = "Password is required.";
        } else if (password.length < 8) {
            errorObj.password = "Password must be at least 8 characters long.";
        }

        if (Object.keys(errorObj).length > 0) {
            setErrors(errorObj);
            return;
        }

        try {
            const resp = await handleSubmit({ username, password });
            if (!resp.success) {
                setErrors({ message: resp.message });
                toast.error(resp.message || "An unknown error occurred.");
            } else {
                setErrors({});
                toast.success(resp.message || "Login successful!");
                router.push("/");
            }
        } catch (error) {
            toast.error("Failed to connect to the server.");
            setErrors({ message: "Failed to connect to the server." });
        }
    }

    return (
        <div className="w-full h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark">
            <div className="h-full flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6 bg-card dark:bg-card-dark p-5 rounded-lg shadow-lg">
                    <div className="grid gap-2 text-left">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your credentials to access your account
                        </p>
                    </div>
                    <form onSubmit={handleFormSubmit} noValidate className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="your_username"
                                required
                            />
                            {errors.username && <p className="text-sm text-destructive">{errors.username}</p>}
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="/forgot-password"
                                    className="ml-auto inline-block text-sm underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="enter password"
                                required
                            />
                            {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                        </div>
                        {errors.message && <p className="text-sm text-destructive text-center">{errors.message}</p>}
                        <Button type="submit" className="w-full cursor-pointer">
                            Login
                        </Button>
                        <Button variant="outline" className="w-full" type="button">
                            Login with Google
                        </Button>
                    </form>
                    <div className="mt-4 text-left text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
