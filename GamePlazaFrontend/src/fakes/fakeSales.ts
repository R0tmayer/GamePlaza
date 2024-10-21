import {v4 as uuidv4} from 'uuid';
import {Sale} from "@/interfaces/Sale.ts";

export const fakeSales: Sale[] = [
    {
        id: uuidv4(),
        customer: "John Doe",
        email: "john.doe@example.com",
        type: "Game",
        date: new Date("2023-10-01"),
        amount: 150.75
    },
    {
        id: uuidv4(),
        customer: "Jane Smith",
        email: "jane.smith@example.com",
        type: "Subscription",
        date: new Date("2023-10-02"),
        amount: 230.50
    },
    {
        id: uuidv4(),
        customer: "Alice Johnson",
        email: "alice.johnson@example.com",
        type: "Game",
        date: new Date("2023-10-03"),
        amount: 99.99
    },
    {
        id: uuidv4(),
        customer: "Bob Brown",
        email: "bob.brown@example.com",
        type: "Subscription",
        date: new Date("2023-10-04"),
        amount: 345.20
    },
    {
        id: uuidv4(),
        customer: "Charlie Davis",
        email: "charlie.davis@example.com",
        type: "Game",
        date: new Date("2023-10-05"),
        amount: 120.00
    },
    {
        id: uuidv4(),
        customer: "Diana Miller",
        email: "diana.miller@example.com",
        type: "Subscription",
        date: new Date("2023-10-06"),
        amount: 75.50
    },
    {
        id: uuidv4(),
        customer: "Eva Wilson",
        email: "eva.wilson@example.com",
        type: "Game",
        date: new Date("2023-10-07"),
        amount: 210.45
    },
    {
        id: uuidv4(),
        customer: "Frank Moore",
        email: "frank.moore@example.com",
        type: "Subscription",
        date: new Date("2023-10-08"),
        amount: 180.90
    },
    {
        id: uuidv4(),
        customer: "Grace Taylor",
        email: "grace.taylor@example.com",
        type: "Game",
        date: new Date("2023-10-09"),
        amount: 55.75
    }, {
        id: uuidv4(),
        customer: "Grace Taylor",
        email: "grace.taylor@example.com",
        type: "Game",
        date: new Date("2023-10-09"),
        amount: 55.75
    },
    {
        id: uuidv4(),
        customer: "Grace Taylor",
        email: "grace.taylor@example.com",
        type: "Game",
        date: new Date("2023-10-09"),
        amount: 55.75
    },
    {
        id: uuidv4(),
        customer: "Grace Taylor",
        email: "grace.taylor@example.com",
        type: "Game",
        date: new Date("2023-10-09"),
        amount: 55.75
    },
    {
        id: uuidv4(),
        customer: "Harry Anderson",
        email: "harry.anderson@example.com",
        type: "Subscription",
        date: new Date("2023-10-10"),
        amount: 420.00
    }
];