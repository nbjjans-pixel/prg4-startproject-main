import '../css/style.css';
import { Actor, Engine, Vector, DisplayMode, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Bar } from './bar.js';
import { HitBox } from './hitbox.js';
import { ScoreUI } from './scoreUI.js';
import { BeatTracker } from './beatTracker.js';

export class Start extends Scene {
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        });
    }

    onInitialize(engine){
        this.startGame(engine)
    }

    startGame(engine) {
        const back = new Actor();
        back.graphics.use(Resources.Back.toSprite());
        back.pos = new Vector(572, 352);
        this.add(back);

        const cooltext = new Actor();
        cooltext.graphics.use(Resources.CoolText.toSprite());
        cooltext.pos = new Vector(500,150)
        this.add(cooltext)

        const cooltextplay = new Actor();
        cooltextplay.graphics.use(Resources.CoolTextPlay.toSprite());
        cooltextplay.pos = new Vector(160,340)
        this.add(cooltextplay)

        const howToPlay = new Actor();
        howToPlay.graphics.use(Resources.HowToPlay.toSprite());
        howToPlay.pos = new Vector(640,540)
        howToPlay.scale = new Vector(0.95, 0.95);
        this.add(howToPlay)

        cooltextplay.on('pointerdown', () => {
            engine.goToScene('story');
        });
    }
}