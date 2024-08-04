import {v4 as uuidv4} from 'uuid';
import {Product} from "@pages/Products/Product.ts";

export const mockProducts: Product[] = [
    {
        id: uuidv4(),
        name: "Disco Elysium",
        price: 59.99,
        image: "disco_elysium.jpg",
        totalSales: 25000,
        genre: ["Action", "Adventure"],
        platform: ["Nintendo Switch"]
    },
    {
        id: uuidv4(),
        name: "GTA 5",
        price: 59.99,
        image: "gta_5.jpg",
        totalSales: 30000,
        genre: ["Action", "Adventure"],
        platform: ["PC", "PS4", "Xbox One"]
    },
    {
        id: uuidv4(),
        name: "Helldrivers 2",
        price: 49.99,
        image: "helldrivers_2.jpg",
        totalSales: 20000,
        genre: ["Action", "Adventure"],
        platform: ["PS4", "PS5"]
    },
    {
        id: uuidv4(),
        name: "Manor Lords",
        price: 29.99,
        image: "manor_lords.jpg",
        totalSales: 35000,
        genre: ["RPG"],
        platform: ["PC", "PS4", "Xbox One", "Nintendo Switch"]
    },
    {
        id: uuidv4(),
        name: "Outcast",
        price: 29.99,
        image: "outcast.jpg",
        totalSales: 150000,
        genre: ["Action", "Adventure"],
        platform: ["PC", "PS4", "Xbox One"]
    },
    {
        id: uuidv4(),
        name: "Pacific Drive",
        price: 26.95,
        image: "pacific_drive.jpg",
        totalSales: 200000,
        genre: ["Sandbox"],
        platform: ["PC", "Mobile", "Console"]
    },
    {
        id: uuidv4(),
        name: "Risk of Rain 2",
        price: 4.99,
        image: "risk_of_rain_2.jpg",
        totalSales: 100000,
        genre: ["Multiplayer"],
        platform: ["PC", "Mobile", "Console"]
    },
];
