import { Router } from "express";
import { getGame, createGame, getGameId } from "../controllers/game.controller.js";
const router = Router();


router.get('/game',getGame)
router.get('/game/:id',getGameId)
router.post('/game', createGame)




export default router;
