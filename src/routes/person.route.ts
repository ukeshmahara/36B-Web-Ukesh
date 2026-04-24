import { Request, Response, Router } from "express";
import { PersonController } from "../controllers/person.controller";
const personController = new PersonController();

const router = Router();


// same as app.get()
router.get(
    "/", 
    personController.getAllPerson
)

export default router;