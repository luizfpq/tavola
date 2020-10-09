'use strict'

const Question = use('App/Models/Question');
const Database = use('Database');

class QuestionController {

    
    
    async sorteioDiscente() {
        //const questions = await Question.select('id','pergunta').from
        const questions = await Database.select('id','pergunta', 'candidato', 'segmento').from('questions').where('candidato', 'Ambos').where('segmento', 'Discente');
        let sorteia = this.randomize(questions);   
        console.log(sorteia);     
        return sorteia;
    }
    async sorteioDocente() {
        //const questions = await Question.select('id','pergunta').from
        const questions = await Database.select('id','pergunta', 'candidato', 'segmento').from('questions').where('candidato', 'Ambos').where('segmento', 'Docente');
        let sorteia = this.randomize(questions);   
        console.log(sorteia);     
        return sorteia;
    }
    async sorteioTae() {
        //const questions = await Question.select('id','pergunta').from
        const questions = await Database.select('id','pergunta', 'candidato', 'segmento').from('questions').where('candidato', 'Ambos').where('segmento', 'Técnico-Administrativo');
        let sorteia = this.randomize(questions);  
        console.log(sorteia);      
        return sorteia;
    }
    

    async sorteioDiretoDiscente1() {
        //const questions = await Question.select('id','pergunta').from
        const questions = await Database.select('id','pergunta', 'candidato', 'segmento').from('questions').where('candidato', 'Carla Rubia Marques').where('segmento', 'Discente');
        let sorteia = this.randomize(questions);   
        console.log(sorteia);     
        return sorteia;
    }
    async sorteioDiretoDocente1() {
        //const questions = await Question.select('id','pergunta').from
        const questions = await Database.select('id','pergunta', 'candidato', 'segmento').from('questions').where('candidato', 'Carla Rubia Marques').where('segmento', 'Docente');
        let sorteia = this.randomize(questions);   
        console.log(sorteia);     
        return sorteia;
    }
    async sorteioDiretoTae1() {
        //const questions = await Question.select('id','pergunta').from
        const questions = await Database.select('id','pergunta', 'candidato', 'segmento').from('questions').where('candidato', 'Carla Rubia Marques').where('segmento', 'Técnico-Administrativo');
        let sorteia = this.randomize(questions);  
        console.log(sorteia);      
        return sorteia;
    }


    async sorteioDiretoDiscente2() {
        //const questions = await Question.select('id','pergunta').from
        const questions = await Database.select('id','pergunta', 'candidato', 'segmento').from('questions').where('candidato', 'Prof. Wilson Silva').where('segmento', 'Discente');
        let sorteia = this.randomize(questions);   
        console.log(sorteia);     
        return sorteia;
    }
    async sorteioDiretoDocente2() {
        //const questions = await Question.select('id','pergunta').from
        const questions = await Database.select('id','pergunta', 'candidato', 'segmento').from('questions').where('candidato', 'Prof. Wilson Silva').where('segmento', 'Docente');
        let sorteia = this.randomize(questions);   
        console.log(sorteia);     
        return sorteia;
    }
    async sorteioDiretoTae2() {
        //const questions = await Question.select('id','pergunta').from
        const questions = await Database.select('id','pergunta', 'candidato', 'segmento').from('questions').where('candidato', 'Prof. Wilson Silva').where('segmento', 'Técnico-Administrativo');
        let sorteia = this.randomize(questions);  
        console.log(sorteia);      
        return sorteia;
    }
    
    randomize(obj){
        const values = Object.values(obj);
        const randomValue = values[parseInt(Math.random() * values.length)];
        return randomValue;
    }
}


module.exports = QuestionController
