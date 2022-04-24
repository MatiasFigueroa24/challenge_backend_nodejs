
import * as app from '../app';
import request from "supertest";


describe('GET /game', () =>{
    test('response is expected 200', async () =>{
        const responce = await request(app).get('/game').send();
        expect(responce.statusCode).toBe(200); 
    });
})


