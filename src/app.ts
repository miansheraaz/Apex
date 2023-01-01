import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

export default app;

// update 2023-01-01 commit 4
