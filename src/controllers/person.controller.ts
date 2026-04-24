import { Request, Response } from "express";
import { data } from "../models/person.model";

export class PersonController {
    // 1. GET - get all
    async getAllPerson(req: Request, res: Response) {
        // later paginated results
        try{
             const someVar:any = {}
            // simulate exception (server error)
            someVar.name.getAll();
            return res.status(202).json(data);
        }catch(err: Error | unknown){
            return res.status(500).json({message: "Failed to get"})
        }
    }
}