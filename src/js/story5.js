import '../css/style.css';
import { Actor, Scene, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Story5 extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {
        this.startGame(engine);
    }

    startGame(engine) {
        const scene5 = new Actor();
        scene5.graphics.use(Resources.Scene5.toSprite());
        scene5.pos = new Vector(640, 360);
        this.add(scene5);

        scene5.on('pointerdown', () => {
            engine.goToScene('story6');
        });
    }
}
