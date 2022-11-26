class Colores {
    randomColor(): string{
        const red: number = Math.floor(Math.random()*255);
        const green: number = Math.floor(Math.random()*255);
        const blue: number = Math.floor(Math.random()*255);
        return `rgb(${red}, ${green}, ${blue})`
    }
}

const colorcito = new Color()
console.log(colorcito.getRandomColor())