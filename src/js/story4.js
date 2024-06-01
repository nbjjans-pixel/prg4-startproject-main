import '../css/style.css';
import { Actor, Scene, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Story4 extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {
        this.startGame(engine);
    }

    startGame(engine) {
        const scene4 = new Actor();
        scene4.graphics.use(Resources.Scene4.toSprite());
        scene4.pos = new Vector(640, 360);
        this.add(scene4);

        scene4.on('pointerdown', () => {
            engine.goToScene('story5');
        });
    }
}
