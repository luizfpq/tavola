'use strict'

class CandidatoController {
    index({view}) {

        let sorteia = this.randomize();
        console.log(sorteia);
        
        return view.render('home', {
            title: 'Concorrentes',
            candidatos: sorteia,
        });
    }
    addCandidato(){
        
    }

    randomize(){
        const candidatos = [
            {id: '01', name: 'Carla Rubia Marques'},
            {id: '02', name: 'Prof. Wilson Silva'},
        ]
        const values = Object.values(candidatos);
        const randomValue = values[parseInt(Math.random() * values.length)];

        return randomValue;
    }
}

module.exports = CandidatoController
