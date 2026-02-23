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
// para manter o render alive
app.get('/api/keep-alive', (req: Request, res: Response) => {
    console.log("Bot bateu aqui para manter o servidor acordado ");
    res.status(200).json({
        status: "online",
        message: "Grupo Zeno API ativa",
        timestamp: new Date().toISOString()
    });
});

app.listen(process.env.PORT, ()=> {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})