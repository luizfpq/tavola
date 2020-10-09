'use strict'

const Candidato = use('App/Models/Candidato');
const Question = use('App/Models/Question');

class CandidatoController {
    async index({view}) {

        const candidatos = await Candidato.all();

        let sorteia = this.randomize(candidatos.toJSON());
        console.log(sorteia);
        
        return view.render('home', {
            title: 'Concorrentes',
            randCandidatos: sorteia,
            candidatos: candidatos.toJSON(),
        });
    }

    async sorteio() {
        const candidatos = await Candidato.all();
        let sorteia = this.randomize(candidatos.toJSON());        
        return sorteia;
    }
    
    randomize(obj){
        const values = Object.values(obj);
        const randomValue = values[parseInt(Math.random() * values.length)];
        return randomValue;
    }
}

module.exports = CandidatoController
