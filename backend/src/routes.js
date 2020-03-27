const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

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
routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), IncidentController.create);
 // listar incidents
 routes.get('/incidents', celebrate({
     [Segments.QUERY]: Joi.object().keys({
         page: Joi.number(),
     })
 }), IncidentController.index);
 // deletar incident
 routes.delete('/incidents/:id',celebrate({
     [Segments.PARAMS]: Joi.object().keys({
         id: Joi.number().required(),
     })
 }), IncidentController.delete);

// listar incidents de ong especifica
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);
module.exports = routes;