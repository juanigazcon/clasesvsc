export class Question{
    constructor(text, choices, answer){
        this.text=text,
        this.choices=choices,
        this.answer=answer
    }

    isCorrectAnswer(choice){
        if (choice== this.answer) return true;
        else return false;
    }
}

//data es un array con preguntas, opciones y rta correcta
const pregunta = new Question(data[0].question,data[0].choices,data[0].answer);
let result = pregunta.isCorrectAnswer("lala")
console.log(result);

//obtengo un array con 3 objetos, con las preguntas, las opciones y la rta correcta
const questionArray= data.map(q => new Question(q.question, q.choices, q.answer))
