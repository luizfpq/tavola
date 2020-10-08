'use strict'

class CandidatoController {
    index({view}) {

        const candidatos = [
            {id: '01', name: 'Carla Rubia Marques'},
            {id: '02', body: 'Prof. Wilson Silva'},
        ]

        return view.render('candidato', {
            candidatos: candidatos,
        });
    }
}

module.exports = CandidatoController
