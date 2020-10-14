import express from 'express';
import './database/connection';
import { getRepository } from 'typeorm';
import Orphanages from './models/Orphanages';

const app = express();

app.use(express.json());

app.get('/users/:id', (request, response) => {
    return response.json({ message: 'Hello World'});
});

app.post('/orphanages', async (request, response) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weeknds
    } = request.body;

    const orphanagesRepository = getRepository(Orphanages);
    
    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weeknds
    });

    await orphanagesRepository.save(orphanage);

    return response.json({ message: "Orphanage created successfuly.", name: orphanage.name });
});

app.listen(3333);
