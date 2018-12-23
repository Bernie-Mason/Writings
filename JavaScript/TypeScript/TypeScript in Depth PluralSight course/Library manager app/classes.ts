import { Librarian } from "./interfaces";

export class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    deparment: string;

    assistCustomer(custName: string){
        console.log(this.name + " is assisting " + custName);
    }
}