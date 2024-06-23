import { Email, GitHub, type AppIconName } from "./app.icon";
import { CvFile, type FileIconName } from "./file.icon";
import { Moon, Sun, type ThemeIconName } from "./theme.icon";


export type IconName = AppIconName | FileIconName | ThemeIconName


type IconElement = {
    [K in IconName]: string
}

export const Icons: IconElement = {
    // App
    email: Email,
    github: GitHub,

    // File
    cv: CvFile,

    // Theme
    moon: Moon,
    sun: Sun


}