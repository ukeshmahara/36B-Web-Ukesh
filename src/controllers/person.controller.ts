import { Request, Response } from "express";
import { data } from "../models/person.model";
import { HttpException } from "../exceptions/http-exception";
import { ApiResponseHelper } from "../utils/api-response";

export class PersonController {
    // 1. GET - get all
    async getAllPerson(req: Request, res: Response) {
        // later paginated results
        try {
            const someVar: any = {}
            // implement exception handling
            if (!someVar.name) {
                throw new HttpException(400, "Name is required");
            }
            // simulate exception (server error)
            someVar.name.getAll();
            // return res.status(202).json(data);
            return ApiResponseHelper.success(res, data, 200, "Success"); // consistent api response
        } catch (err: Error | unknown | any) {
            // return res.status(500).json({ message: "Failed to get" }
            return ApiResponseHelper.error(
                res, 
                err?.message || "Failed to get", 
                err.status || 500
            );
        }
    }

    // efficient api design 
    // 1. logic through exception handling
    // 2. consistent api response
    // 3. global error handling middleware
    async createPerson(req: Request, res: Response) {
        const { name, age } = req.body; // client request body/input
        if(!name){ // logic through exception handling
            throw new HttpException(400, "Name is required");
        }
        if(!age){
            throw new HttpException(400, "Age is required");
        }
        // database operation
        const newPerson = {
            id: data.length + 1,
            name,
            age
        }
        data.push(newPerson);
        return ApiResponseHelper.success(res, newPerson, 201, "Person created");
    }

    // create a function updatePerson
    // 1. find person by id, if not found 
    // throw 404 with message "Person not found"
    // 2. if name or age is not provided in request body,
    // default to existing person's name and age
    // 3. update the person's name and age with request body
    // 4. return the updated person with consistent api response
    // 5. implement in router -> /api/persons/:id [PUT]
}