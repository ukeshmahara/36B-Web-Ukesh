import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8088;
export const MOCK_DB = process.env.MOCK_DB || "mock";

// same as 
// export{
//     PORT,
//     MOCK_DB
// }