import mongoose, { Schema, Document} from  "mongoose";
import {ICandidate} from "../types/Candidate";
interface IcandidateModel extends ICandidate, Document{}

const CandidateSchema : Schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    resumeurl: {type: String, required: true},
    status: {
        type: String,
        enum: ['Pendente', 'Aprovado', 'Rejeitado'],
        default: 'Pendente',
    },dataSubmitted: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model<IcandidateModel>('Candidate', CandidateSchema);