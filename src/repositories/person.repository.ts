import { Person } from "../types/person.type";
import { data } from "../models/person.model";

// database/source contract
interface IPersonRepository {
    getAll(): Person[];
    getOne(id: string): Person | undefined;
    create(person: Person): Person | undefined;
}
// export class PersonSQLRepository implements IPersonRepository {
//     getAll(): Person[] {
//         // sql query
//         const data = "select * from person";
//         return data;
//     }
// }
export class PersonArrayRepository implements IPersonRepository {
    getAll(): Person[] {
        return data;
    }
    getOne(id: string): Person | undefined {
        const found = data.find(p => p.id === parseInt(id));
        return found;
    }
    create(person: Person): Person | undefined {
        data.push(person);
        return person;
    }
}

