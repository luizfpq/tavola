'use strict'

class QuestionController {

    directQuestion({view}) {

        const candidatos = [
            {id: '01', name: 'Carla Rubia Marques'},
            {id: '02', body: 'Prof. Wilson Silva'},
        ]

        return view.render('directQuestion', {
            candidatos: candidatos,
        });
    }

}

module.exports = QuestionController
