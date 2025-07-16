import Header from "@/components/header";
import { Theme } from "@radix-ui/themes";

export default function Layout({ children }: {
    children: React.ReactNode;
}) {

    return (
        <Theme>
            <Header />
            {children}
        </Theme>
    )
}