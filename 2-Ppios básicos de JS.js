
//PPIOS BÁSICOS DE JS
let brandBottle = "Perrier"
let qtyBottle = 350
let isOpenBottle = true


let Bottle = {
    brand:"Perrier",
    qty: 350,
    isOpenBottle: true
}

let Bottle2 = {
    brand:"San P",
    qty: 350,
    isOpenBottle: false
}

//función constructora
function Bottle(brand, qty, isOpen){
    this.brand= brand,
    this.qty= qty,
    this.isOpenBottle= isOpen
}

let b1= new Bottle("Perrier", 350, true);
let b2= new Bottle("San P", 350, false)

let question = {
    title: "Qué día es hoy",
    answer: ["op1","op2","op3"],
    correctAnswer: 2,
    isCorrect: function(userAnswer){
        if(userAnswer == this.correctAnswer) return true;
        else return false;
    }
}

