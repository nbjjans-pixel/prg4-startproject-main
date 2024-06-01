import '../css/style.css';
import { Scene, Vector, Color, Font, Label, Actor } from "excalibur";
import { Resources } from './resources.js';

export class End extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {
        this.startGame(engine);
    }

    startGame(engine) {
        const back = new Actor();
        back.graphics.use(Resources.Back.toSprite());
        back.pos = new Vector(640, 360);
        this.add(back);

        const score = new Actor();
        score.graphics.use(Resources.Score.toSprite());
        score.pos = new Vector(250, 100);
        this.add(score);

        const highscore = new Actor();
        highscore.graphics.use(Resources.HighScore.toSprite());
        highscore.pos = new Vector(375, 300);
        this.add(highscore);

        const restart = new Actor();
        restart.graphics.use(Resources.Restart.toSprite());
        restart.pos = new Vector(300, 500);
        this.add(restart);

        restart.on('pointerdown', () => {
            engine.goToScene('start');
        });
    }
}