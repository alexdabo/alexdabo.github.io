import { calculateYears, chooseByMode, filename } from "@core/util";
import Avatar from "@assets/image/profile/formal.jpg";
import type { ProfileResume } from "./model/profile";

const profileName = "Alexander Bonilla";

export const Profile: ProfileResume = {
  name: profileName,
  firstName: "Alexander David",
  lastName: "Bonilla Adriano",
  greeting: "Hola, soy alexander",
  label: "Ing. en sistemas & computación",
  image: Avatar.src,
  email: "adbonilla.ad@gmail.com",
  phone: "593979728686",
  url: "https://alexdabo.github.io",
  ogDescription: "Soy un tremendo programador.",
  summary: `Desarrollador web fullstack que disfruta enfrentando desafíos, diseñando soluciones eficientes y escalables.`,
  about: `Mi nombre es Alexander David y me considero un entusiasta del código y de GNU/Linux. Desde que descubrí el fascinante mundo de Linux a los 13 años, he estado profundamente involucrado en el mundo de la informática.`,
  description: `Profesional con más de ${calculateYears()} años de trayectoria como Ingeniero en Sistemas y Computación, con un enfoque en la creación de aplicaciones web personalizadas y APIs utilizando Node.js y Express.js, logrando resultados efectivos y eficientes en diversos proyectos.`,

  location: {
    address: "",
    postalCode: "",
    city: "",
    countryCode: "",
    region: "",
  },
  network: {
    cv: {
      icon: "cv",
      name: "Descargar",
      label: "Descargar CV",
      url: chooseByMode("/pdf/cv.pdf", `/pdf/${filename(profileName),'.pdf'}`),
    },
    email: {
      icon: "email",
      name: "Correo",
      label: "adbonilla.ad@gmail.com",
      url: "mailto:adbonilla.ad@gmail.com",
    },
    github: {
      icon: "github",
      name: "GitHub",
      label: "github.com/alexdabo",
      url: "https://github.com/alexdabo",
    },
    mobile: {
      icon: "phone",
      name: "Teléfono",
      label: "+593979728686",
      url: "tel:+593979728686",
    },
    whatsapp: {
      icon: "whatsapp",
      name: "WhatsApp",
      label: "+593979728686",
      url: "https://wa.me/593979728686",
    },
    website: {
      icon: "web",
      name: "Sitio web",
      label: "alexdabo.github.io",
      url: "https://alexdabo.github.io",
    },
  },
};
