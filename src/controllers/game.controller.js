import { getConnection } from "../database.js";

const getGame = (req, res) => {
    console.log(getConnection().data.game.game)
    const games = getConnection().data.game;
    res.json(games)
}

const getGameId = (req, res) => {
    console.log(getConnection().data.game.id)
    const games_id = getConnection().data.game.find(((t) => t.id === req.params.id))

    if (!games_id) res.sendStatus(404);
    res.json(games_id);
    }

const createGame = async (req,res) => {
   // const date = JSON.parse(req.body);
    const newGame = req.body
    try {
        const db = getConnection();
        db.data.game.push(newGame);
        await db.write();
    
        res.json(newGame);
      } catch (error) {
        return res.status(500).send(error);
      }

    
}

export { getGame, createGame, getGameId}
