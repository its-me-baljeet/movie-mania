'use client'
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { FavoritesProvider } from "@/context/favoritesContext";
import { Theme } from "@radix-ui/themes";

export default function Layout({ children }: {
    children: React.ReactNode;
}) {

    return (
        <Theme>
            <FavoritesProvider>
                <Header />
                <section className="min-h-[calc(100vh-60px)] w-full grid sm:grid-cols-12">
                    <Sidebar />
                    <main className="sm:col-span-10 h-full w-full">
                        {children}
                    </main>
                </section>
            </FavoritesProvider>
        </Theme>
    )
}