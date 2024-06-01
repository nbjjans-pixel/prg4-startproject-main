import '../css/style.css';
import { Actor, Scene, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Story3 extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {
        this.startGame(engine);
    }

    startGame(engine) {
        const scene3 = new Actor();
        scene3.graphics.use(Resources.Scene3.toSprite());
        scene3.pos = new Vector(640, 360);
        this.add(scene3);

        scene3.on('pointerdown', () => {
            engine.goToScene('story4');
        });
    }
}
