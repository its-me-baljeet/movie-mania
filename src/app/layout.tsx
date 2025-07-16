"use client"
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext<{
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState(true);
  return (
    <html lang="en">
      <body>
        <Theme accentColor="purple" appearance={isDark ? "dark" : "light"}>
          <ThemeContext.Provider value={{
            isDark: isDark,
            setIsDark: setIsDark,
          }}>

            {children}
          </ThemeContext.Provider>
        </Theme>
      </body>
    </html>
  );
}
