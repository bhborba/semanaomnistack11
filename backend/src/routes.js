const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros: 
 * 
 * Query Params: Parâmetro nomeados enviados na rota após o símbolo ?  (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
 * 
 */

 routes.post('/sessions', SessionController.create);

 // listar ongs
 routes.get('/ongs', OngController.index);
 // cadastrar ong
routes.post('/ongs', OngController.create);

 // cadastrar incident
routes.post('/incidents', IncidentController.create);
 // listar incidents
 routes.get('/incidents', IncidentController.index);
 // deletar incident
 routes.delete('/incidents/:id', IncidentController.delete);

// listar incidents de ong especifica
routes.get('/profile', ProfileController.index);
module.exports = routes;