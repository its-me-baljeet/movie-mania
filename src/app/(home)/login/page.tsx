'use client'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { handleSubmit } from "@/utils/actions";
import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";
import { useState } from "react";

type FormErrors = {
    username?: string;
    password?: string;
};

export default function LoginPage() {
    const [errors, setErrors] = useState<FormErrors>({});

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

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

        setErrors({});
        const resp = await handleSubmit({ username, password });
        if (!resp.success) {
            <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>Unable to login!</AlertTitle>
                <AlertDescription>
                    <p>Please fill correct credentials</p>

                </AlertDescription>
            </Alert>
            alert(resp.message);
        } else {
            <Alert>
                <CheckCircle2Icon />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                    You have been Logged in!
                </AlertDescription>
            </Alert>
        }
    }

    return (
        <form onSubmit={handleFormSubmit} noValidate>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Enter your Username..."
                />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your Password..."
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}