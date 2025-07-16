'use client'
import { ThemeContext } from "@/app/layout";
import { Switch } from "@radix-ui/themes"
import { useContext } from "react";

export default function ClientSwitch() {

    const themeCtx = useContext(ThemeContext);
    if (!themeCtx) return;
    const { setIsDark } = themeCtx;
    return (
        <Switch onCheckedChange={() => {
            setIsDark(prev => !prev)
        }} />
    )
}