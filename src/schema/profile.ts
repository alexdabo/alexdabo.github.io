import type { IconName } from "@core/icon";

interface Network {
  name: string;
  label: string;
  url: string;
  icon: IconName;
}
interface Networks {
  cv: Network;
  email: Network;
  github: Network;
  mobile: Network;
  whatsapp: Network;
  website: Network;
}
interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

interface ProfileResume {
  firstName: string;
  lastName: string;
  greeting: string;
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  about: string;
  summary: string;
  description: string;
  location: Location;
  network: Networks;
}

export const Profile: ProfileResume = {
  firstName: "Alexander David",
  lastName: "Bonilla Adriano",
  name: "Alexander Bonilla",
  label: "Ing. en sistemas & computación",
  greeting: "Hola, soy alexander",
  image: "https://avatars.githubusercontent.com/u/29008617",
  // image:
  //   "https://ojdt.com.ve/archivos/styles/height/public/team/joaquin-dongoroz_4.jpg",
  email: "adbonilla.ad@gmail.com",
  phone: "593979728686",
  url: "https://alexdabo.github.io",
  summary:
    "Desarrollador web fullstack que disfruta enfrentando desafíos, diseñando soluciones eficientes y escalables.",
  about:
    "Mi nombre es Alexander David y me considero un entusiasta del código y de GNU/Linux. Desde que descubrí el fascinante mundo de Linux a los 13 años, he estado profundamente involucrado en el mundo de la informática.",
  description:
    "Profesional con más de 3 años de trayectoria como Ingeniero en Sistemas y Computación, destacando en la creación de servicios y aplicaciones web personalizadas.",

  location: {
    address: "",
    postalCode: "",
    city: "",
    countryCode: "",
    region: "",
  },
  network: {
    cv: { name: "Descargar", icon: "cv", url: "/pdf", label: "Descargar CV" },
    email: {
      name: "Correo",
      icon: "email",
      url: "mailto:adbonilla.ad@gmail.com",
      label: "adbonilla.ad@gmail.com",
    },
    github: {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/alexdabo",
      label: "github.com/alexdabo",
    },
    mobile: {
      name: "Teléfono",
      icon: "phone",
      url: "tel:+593979728686",
      label: "+593979728686",
    },
    whatsapp: {
      name: "WhatsApp",
      icon: "whatsapp",
      url: "https://wa.me/593979728686",
      label: "+593979728686",
    },
    website: {
      name: "Sitio web",
      icon: "web",
      url: "https://alexdabo.github.io",
      label: "alexdabo.github.io",
    },
  },
};
