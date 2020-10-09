'use strict'

class CandidatoController {
    index({view}) {

        const candidatos = [
            {id: '01', name: 'Carla Rubia Marques'},
            {id: '02', name: 'Prof. Wilson Silva'},
        ]

        let sorteia = this.randomize(candidatos);
        console.log(sorteia);
        
        return view.render('home', {
            title: 'Concorrentes',
            randCandidatos: sorteia,
            candidatos: candidatos,
        });
    }
    addCandidato(){
        
    }

    randomize(obj){
        
        const values = Object.values(obj);
        const randomValue = values[parseInt(Math.random() * values.length)];

        return randomValue;
    }
}

module.exports = CandidatoController
