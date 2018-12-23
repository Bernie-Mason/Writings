import { Category } from "./enums";

export interface Book {
    id: number;
    title: string;
    author: string;
    pages?: number;
    available: boolean;
    category: Category;
    markDamaged?: DamageLogger;
}

export interface DamageLogger {
    (reason: string): void;
}

export interface Person {
    name: string;
    email: string;
}

export interface Author extends Person {
    numBooksPublished: number;
}

export interface Librarian extends Person {
    deparment: string;
    assistCustomer: (custName: string) => void;
}