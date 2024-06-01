import '../css/style.css';
import { Actor, Scene, Vector,Engine } from "excalibur";
import { Resources } from './resources.js';

export class Story extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {
        this.startGame(engine);
    }

    startGame(engine) {
        const scene1 = new Actor();
        scene1.graphics.use(Resources.Scene1.toSprite());
        scene1.pos = new Vector(640, 360);
        this.add(scene1);

        scene1.on('pointerdown', () => {
            engine.goToScene('story2');
        });
    }
}
