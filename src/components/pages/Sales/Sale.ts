export interface Sale {
    id: string;
    customer: string;
    email: string;
    type: "Game" | "Subscription";
    date: Date;
    amount: number;
}


