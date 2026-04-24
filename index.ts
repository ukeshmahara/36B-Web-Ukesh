import app, { PORT, dummy } from "./src/app";
import { PORT as SERVER_PORT } from "./src/config/constant";
// if same name imported use alias "as"
app.listen(
    SERVER_PORT,
    () => {
        console.log(`Server running: ${SERVER_PORT}`);
    }
);