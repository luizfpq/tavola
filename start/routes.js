'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome');
Route.on('/questionDirect/1').render('candidato1');
Route.on('/questionDirect/2').render('candidato2');

Route.get('/home', 'CandidatoController.index');
Route.get('/candidato/sorteio', 'CandidatoController.sorteio');

Route.get('/questao/sorteioDiscente', 'QuestionController.sorteioDiscente');
Route.get('/questao/sorteioDocente', 'QuestionController.sorteioDocente');
Route.get('/questao/sorteioTae', 'QuestionController.sorteioTae');

Route.get('/questao/sorteioDiretoTae/1', 'QuestionController.sorteioDiretoTae1');
Route.get('/questao/sorteioDiretoDiscente/1', 'QuestionController.sorteioDiretoDiscente1');
Route.get('/questao/sorteioDiretoDocente/1', 'QuestionController.sorteioDiretoDocente1');

Route.get('/questao/sorteioDiretoTae/2', 'QuestionController.sorteioDiretoTae2');
Route.get('/questao/sorteioDiretoDiscente/2', 'QuestionController.sorteioDiretoDiscente2');
Route.get('/questao/sorteioDiretoDocente/2', 'QuestionController.sorteioDiretoDocente2');

