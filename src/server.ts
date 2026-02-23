import express, {Application, Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import candidateRoutes from "./routes/candidateRoutes";
dotenv.config();
const app: Application = express();
const port = process.env.PORT || 3000;
//bellow is goin to be my function of Mongo connection
connectDB();
app.use(cors());
app.use(express.json());

//all my endponits
app.use('/api/candidates',candidateRoutes);
app.get('/', (req: Request, res: Response) => {
    res.send(`API de Candidatos do Grupo Zeno rodando`);
});

app.listen(process.env.PORT, ()=> {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})