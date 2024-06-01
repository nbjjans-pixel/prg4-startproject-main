import { Actor, Text, Vector, Color, Font, FontUnit } from "excalibur";

export class ScoreUI extends Actor {
    constructor() {
        super({ pos: new Vector(650, 75) });
        
        this.points = 0;
        this.text = new Text({
            text: `Punten: ${this.points}`,
            font: new Font({
                family: 'Arial',
                size: 30,
                color: Color.White
            })
        });
    }

    onInitialize(engine) {
        this.graphics.use(this.text);
    }

    updateScore(points) {
        this.points = points;
        this.text.text = `Punten: ${this.points}`;
    }
}
