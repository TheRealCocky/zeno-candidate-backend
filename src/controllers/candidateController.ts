import {Request, Response} from "express";
import candidateModel from "../models/CandidateModel";

export const createCandidate = async (req: Request, res: Response)=>{
try{
    const {name, email, phone, resumeurl, status} = req.body;
    const newCandidate= await candidateModel.create({name, email, phone, resumeurl, status});
    res.status(201).json({
        message: "Candidato criado com sucesso",
        status: true,
        candidate: newCandidate
    })
}catch(error: any){
//it will not allow reapeat emails
    if(error.code===11000){
        res.status(400).json({
            status: false,
            message:"Email já cadastrado!",
            error: error.message
        })
        return;
    }
    res.status(500).json({
         message: "Erro ao criar candidato",
        error: error,
        status: false,
        }
    )
}
}

export const getCandidates = async (req: Request, res: Response)=>{
    try{
        const candidates = await candidateModel.find().sort({dataSubmitted:-1});
        res.status(200).json({
               status: true,
            data: candidates,
            count:candidates.length,
        })
    }catch(error:any){
     res.status(500).json({
            message: "Erro ao buscar candidatos",
         error: error,
         status: false
     })
    }
}

export const getCandidateById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const candidate = await candidateModel.findById(id);
        if (!candidate) {

            res.status(404).json({
                 status: false,
                message: "Candidato não encontrado"
            });

            return;
        }
        res.status(200).json({
            status: true,
              data: candidate
        });

    } catch (error: any) {
        res.status(500).json({
                status: false,
             message: "Erro ao buscar candidato",

            error: error.message
        });
    }
};