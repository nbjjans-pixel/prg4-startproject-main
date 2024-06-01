import '../css/style.css';
import { Actor, Scene, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Story2 extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {
        this.startGame(engine);
    }

    startGame(engine) {
        const scene2 = new Actor();
        scene2.graphics.use(Resources.Scene2.toSprite());
        scene2.pos = new Vector(640, 360);
        this.add(scene2);

        scene2.on('pointerdown', () => {
            engine.goToScene('story3');
        });
    }
}
