import cors from "cors";
import "dotenv/config";
import express, { Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(process.env.PORT, () =>
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
);

app.get("/", (_, res: Response) => res.status(200).json({ message: "Oi" }));

// app.use("/crime", crimesRoutes())
// app.use("/criminal", criminalsRoutes())
// app.use("/weapon", weaponsRoutes())
