import type { Resume as ResumeModel } from "./models";

export const Resume: ResumeModel =
{
    basics: {
        firstName: "Alexander David",
        lastName: "Bonilla Adriano",
        name: "Alexander Bonilla",
        label: 'Ing. en sistemas & computación',
        greeting: 'Hola, soy alexander',
        image: "https://avatars.githubusercontent.com/u/29008617",
        email: "adbonilla.ad@gmail.com",
        phone: "593979728686",
        url: "https://alexdabo.github.io",
        summary: "Desarrollador web fullstack que disfruta enfrentando desafíos, diseñando soluciones eficientes y escalables.",
        location: {
            address: "",
            postalCode: "",
            city: "",
            countryCode: "",
            region: "",
        },
        profiles: [
            { network: "Email",icon:'email', url: "mailto:adbonilla.ad@gmail.com", username: "adbonilla.ad" },
            { network: "GitHub",icon:'github', url: "https://github.com/alexdabo", username: "alexdabo" },
        ]
    },
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    certificates: [],
    publications: [],
    skills: [],
    languages: [],
    interests: [],
    references: [],
    projects: [],
}

