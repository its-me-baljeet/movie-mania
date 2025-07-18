"use client"
import { ThemeProvider } from "@/components/themeProvider";
import "./globals.css";
import { Toaster } from "sonner";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
          <Toaster richColors position="top-center" theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
}
