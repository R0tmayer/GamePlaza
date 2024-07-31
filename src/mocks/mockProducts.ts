import {v4 as uuidv4} from 'uuid';
import {Product} from "@pages/Products/Product.ts";

export const mockProducts: Product[] = [
    {
        id: uuidv4(),
        name: "The Legend of Zelda: Breath of the Wild",
        price: 59.99,
        image: "test.img",
        totalSales: 25000,
        genre: ["Action", "Adventure"],
        platform: ["Nintendo Switch"]
    },
    {
        id: uuidv4(),
        name: "Red Dead Redemption 2",
        price: 59.99,
        image: "test.img",
        totalSales: 30000,
        genre: ["Action", "Adventure"],
        platform: ["PC", "PS4", "Xbox One"]
    },
    {
        id: uuidv4(),
        name: "God of War",
        price: 49.99,
        image: "test.img",
        totalSales: 20000,
        genre: ["Action", "Adventure"],
        platform: ["PS4", "PS5"]
    },
    {
        id: uuidv4(),
        name: "The Witcher 3: Wild Hunt",
        price: 29.99,
        image: "test.img",
        totalSales: 35000,
        genre: ["RPG"],
        platform: ["PC", "PS4", "Xbox One", "Nintendo Switch"]
    },
    {
        id: uuidv4(),
        name: "Grand Theft Auto V",
        price: 29.99,
        image: "test.img",
        totalSales: 150000,
        genre: ["Action", "Adventure"],
        platform: ["PC", "PS4", "Xbox One"]
    },
    {
        id: uuidv4(),
        name: "Minecraft",
        price: 26.95,
        image: "test.img",
        totalSales: 200000,
        genre: ["Sandbox"],
        platform: ["PC", "Mobile", "Console"]
    },
    {
        id: uuidv4(),
        name: "Among Us",
        price: 4.99,
        image: "test.img",
        totalSales: 100000,
        genre: ["Multiplayer"],
        platform: ["PC", "Mobile", "Console"]
    },
    {
        id: uuidv4(),
        name: "Fortnite",
        price: 0.00,
        image: "test.img",
        totalSales: 350000,
        genre: ["Battle Royale"],
        platform: ["PC", "PS4", "Xbox One", "Mobile"]
    },
    {
        id: uuidv4(),
        name: "Cyberpunk 2077",
        price: 59.99,
        image: "test.img",
        totalSales: 13000,
        genre: ["RPG"],
        platform: ["PC", "PS4", "Xbox One"]
    },
    {
        id: uuidv4(),
        name: "Call of Duty: Modern Warfare",
        price: 59.99,
        image: "test.img",
        totalSales: 30000,
        genre: ["FPS"],
        platform: ["PC", "PS4", "Xbox One"]
    },
    {
        id: uuidv4(),
        name: "Spider-Man",
        price: 39.99,
        image: "test.img",
        totalSales: 13000,
        genre: ["Action", "Adventure"],
        platform: ["PS4", "PS5"]
    },
    {
        id: uuidv4(),
        name: "Assassin's Creed Valhalla",
        price: 59.99,
        image: "test.img",
        totalSales: 10000,
        genre: ["Action", "Adventure"],
        platform: ["PC", "PS4", "Xbox One"]
    },
    {
        id: uuidv4(),
        name: "Final Fantasy VII Remake",
        price: 59.99,
        image: "test.img",
        totalSales: 5000,
        genre: ["RPG"],
        platform: ["PS4", "PS5"]
    },
    {
        id: uuidv4(),
        name: "Animal Crossing: New Horizons",
        price: 59.99,
        image: "test.img",
        totalSales: 30000,
        genre: ["Simulation"],
        platform: ["Nintendo Switch"]
    },
    {
        id: uuidv4(),
        name: "Halo Infinite",
        price: 59.99,
        image: "test.img",
        totalSales: 10000,
        genre: ["FPS"],
        platform: ["PC", "Xbox One", "Xbox Series X/S"]
    }
];
