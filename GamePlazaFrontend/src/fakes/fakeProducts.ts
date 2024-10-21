import {v4 as uuidv4} from 'uuid';
import {Product} from "@/interfaces/Product.ts";

export const fakeProducts: Product[] = [
    {
        id: uuidv4(),
        title: "Disco Elysium",
        price: 59.99,
        imageUrl: "disco_elysium.jpg",
        genre: ["Action", "Adventure"],
        platform: ["Nintendo Switch"]
    },
    {
        id: uuidv4(),
        title: "GTA 5",
        price: 59.99,
        imageUrl: "gta_5.jpg",
        genre: ["Action", "Adventure"],
        platform: ["PC", "PS4", "Xbox One"]
    },
    {
        id: uuidv4(),
        title: "Helldrivers 2",
        price: 49.99,
        imageUrl: "helldrivers_2.jpg",
        genre: ["Action", "Adventure"],
        platform: ["PS4", "PS5"]
    },
    {
        id: uuidv4(),
        title: "Manor Lords",
        price: 29.99,
        imageUrl: "manor_lords.jpg",
        genre: ["RPG"],
        platform: ["PC", "PS4", "Xbox One", "Nintendo Switch"]
    },
    {
        id: uuidv4(),
        title: "Outcast",
        price: 29.99,
        imageUrl: "outcast.jpg",
        genre: ["Action", "Adventure"],
        platform: ["PC", "PS4", "Xbox One"]
    },
    {
        id: uuidv4(),
        title: "Pacific Drive",
        price: 26.95,
        imageUrl: "pacific_drive.jpg",
        genre: ["Sandbox"],
        platform: ["PC", "Mobile", "Console"]
    },
    {
        id: uuidv4(),
        title: "Risk of Rain 2",
        price: 4.99,
        imageUrl: "risk_of_rain_2.jpg",
        genre: ["Multiplayer"],
        platform: ["PC", "Mobile", "Console"]
    },
];
