class DreamCar{
    constructor(carColor, carModel, carDoors, carEngine, numberOfPassenger){
        this.color = carColor
        this.model = carModel
        this.engine = carEngine
        this.doors = carDoors
        this.passenger = numberOfPassenger
        
    }
    reverse(){
        alert(`${this.engine} Reverse`)
    }
    honk(){
        alert('BEEP BEEP FUCK')
    }
    extraDoor(){
        let doors = this.doors
        return `your total shit is ${doors * this.passenger}`

    }
}
let Jaguar = new DreamCar('red', 'sport', 2, 'V8', 6)
// console.log(Jaguar.extraDoor())