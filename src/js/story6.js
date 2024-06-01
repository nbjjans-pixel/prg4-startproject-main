import '../css/style.css';
import { Actor, Scene, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Story6 extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {
        this.startGame(engine);
    }

    startGame(engine) {
        const scene6 = new Actor();
        scene6.graphics.use(Resources.Scene6.toSprite());
        scene6.pos = new Vector(640, 360);
        this.add(scene6);

        scene6.on('pointerdown', () => {
            engine.goToScene('level');
        });
    }
}
