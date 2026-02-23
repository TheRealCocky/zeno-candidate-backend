import { Router } from 'express';
import {createCandidate, getCandidateById, getCandidates} from "../controllers/candidateController";
const router = Router();

router.post("/", createCandidate);
router.get("/", getCandidates);
router.get("/:id", getCandidateById);

export default router;