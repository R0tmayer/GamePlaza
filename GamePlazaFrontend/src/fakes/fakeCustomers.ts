import {v4 as uuidv4} from 'uuid';
import {Customer} from "@/interfaces/Customer.ts";

export const fakeCustomers: Customer[] = [
    {
        id: uuidv4(),
        email: "john.doe@gmail.com",
        phoneNumber: "+1-202-555-0101",
        totalPurchaseCount: 5,
        totalProfit: 150.00
    },
    {
        id: uuidv4(),
        email: "jane.smith@yahoo.com",
        phoneNumber: "+1-301-555-0102",
        totalPurchaseCount: 10,
        totalProfit: 300.00
    },
    {
        id: uuidv4(),
        email: "alice.johnson@outlook.com",
        phoneNumber: "+1-410-555-0103",
        totalPurchaseCount: 3,
        totalProfit: 75.00
    },
    {
        id: uuidv4(),
        email: "bob.brown@hotmail.com",
        phoneNumber: "+1-571-555-0104",
        totalPurchaseCount: 7,
        totalProfit: 210.00
    },
    {
        id: uuidv4(),
        email: "charlie.green@gmail.com",
        phoneNumber: "+1-703-555-0105",
        totalPurchaseCount: 2,
        totalProfit: 50.00
    },
    {
        id: uuidv4(),
        email: "diana.white@yahoo.com",
        phoneNumber: "+1-240-555-0106",
        totalPurchaseCount: 8,
        totalProfit: 240.00
    },
    {
        id: uuidv4(),
        email: "edward.black@outlook.com",
        phoneNumber: "+1-301-555-0107",
        totalPurchaseCount: 4,
        totalProfit: 120.00
    },
    {
        id: uuidv4(),
        email: "frank.blue@hotmail.com",
        phoneNumber: "+1-410-555-0108",
        totalPurchaseCount: 6,
        totalProfit: 180.00
    },
    {
        id: uuidv4(),
        email: "grace.red@gmail.com",
        phoneNumber: "+1-571-555-0109",
        totalPurchaseCount: 9,
        totalProfit: 270.00
    },
    {
        id: uuidv4(),
        email: "harry.yellow@yahoo.com",
        phoneNumber: "+1-703-555-0110",
        totalPurchaseCount: 1,
        totalProfit: 30.00
    }
];
