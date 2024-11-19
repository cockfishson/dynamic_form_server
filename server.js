import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import eventRoutes from "./routes/eventRoutes.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/events", eventRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.warn(`Server running on http://localhost:${PORT}`);
});
