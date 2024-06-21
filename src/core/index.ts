import { Email, GitHub, type AppIconName } from "./app.icon";
import { Moon, Sun, type ThemeIconName } from "./theme.icon";


export type IconName = AppIconName | ThemeIconName


type IconElement = {
    [K in IconName]: string
}

export const Icons: IconElement = {
    // App
    email: Email,
    github: GitHub,

    // Theme
    moon: Moon,
    sun: Sun


}