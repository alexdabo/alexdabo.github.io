import { Chess, Judo, type ActivityIconName } from "./activity.icon";
import { Calendar, CvFile, type FileIconName } from "./input.icon";
import { Moon, Sun, type ThemeIconName } from "./theme.icon";
import {
  type AppIconName,
  WhatsApp,
  Website,
  GitHub,
  Email,
  Phone,
} from "./app.icon";

export type IconName =
  | ActivityIconName
  | AppIconName
  | FileIconName
  | ThemeIconName;

type IconElement = {
  [K in IconName]: string;
};

export const Icons: IconElement = {
  //Activity
  chess: Chess,
  judo: Judo,

  // App
  email: Email,
  github: GitHub,
  phone: Phone,
  whatsapp: WhatsApp,
  web: Website,

  // Input
  cv: CvFile,
  calendar: Calendar,

  // Theme
  moon: Moon,
  sun: Sun,
};
