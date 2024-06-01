import '../css/style.css';
import { Actor, Engine, Vector, DisplayMode, Scene } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Bar } from './bar.js';
import { HitBox } from './hitbox.js';
import { ScoreUI } from './scoreUI.js';
import { BeatTracker } from './beatTracker.js';
import { MirroredBar } from './mirroredbar.js';

export class Level extends Scene {
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        });
    }

    onInitialize(engine){
        this.startGame(engine);
    }

    startGame(engine) {
        const back = new Actor();
        back.graphics.use(Resources.Back.toSprite());
        back.pos = new Vector(572, 352);
        this.add(back);

        this.shiba1 = new Actor();
        this.shiba1.graphics.use(Resources.Sit.toSprite());
        this.shiba1.pos = new Vector(525, 600);
        this.add(this.shiba1);

        this.shiba2 = new Actor();
        this.shiba2.graphics.use(Resources.Sit.toSprite());
        this.shiba2.pos = new Vector(690, 600);
        this.add(this.shiba2);

        this.shiba3 = new Actor();
        this.shiba3.graphics.use(Resources.Sit.toSprite());
        this.shiba3.pos = new Vector(1000, 6000);
        this.add(this.shiba3);

        this.shiba4 = new Actor();
        this.shiba4.graphics.use(Resources.Sit.toSprite());
        this.shiba4.pos = new Vector(1000, 6000);
        this.add(this.shiba4);

        const x = new Actor();
        x.graphics.use(Resources.X.toSprite());
        x.pos = new Vector(1200, 75);
        this.add(x);

        x.on('pointerdown', () => {
            engine.goToScene('end');
        });

        this.spawnScoreUI();
        this.spawnHitbox();

        // oplopende moeilijkheidsgraad
        setTimeout(() => {
            this.spawnMirroredBar();
        }, 10000);

        this.beatTracker = new BeatTracker('/audio/Samba de Amigo - Samba de Janeiro.mp3', 133, () => this.spawnBlock());
        this.beatTracker.start();
    }

    spawnBlock() {
        const bar = new Bar(this.hitbox);
        this.add(bar);
    }

    spawnHitbox() {
        this.hitbox = new HitBox(this.scoreUI, this);
        this.add(this.hitbox);
    }

    spawnScoreUI() {
        this.scoreUI = new ScoreUI();
        this.add(this.scoreUI);
    }

    spawnMirroredBar() {
        const mirroredBar = new MirroredBar(this.hitbox);
        this.add(mirroredBar);
    }

    updateSitImages() {
        if (this.scoreUI.points > 150) {
            this.shiba3.graphics.use(Resources.Drum.toSprite());
            this.shiba3.pos = new Vector(370, 600);
            this.shiba4.graphics.use(Resources.Guitar.toSprite());
            this.shiba4.pos = new Vector(850, 600);
            if (this.scoreUI.points % 2 === 0) {
                this.shiba1.graphics.use(Resources.Dance.toSprite());
                this.shiba2.graphics.use(Resources.Dance.toSprite());
                this.shiba4.graphics.use(Resources.Guitar.toSprite());
            } else {
                this.shiba1.graphics.use(Resources.DanceMirror.toSprite());
                this.shiba2.graphics.use(Resources.DanceMirror.toSprite());
                this.shiba4.graphics.use(Resources.GuitarMirror.toSprite());
            }
        } else if (this.scoreUI.points > 80) {
            if (this.scoreUI.points % 2 === 0) {
                this.shiba1.graphics.use(Resources.Dance.toSprite());
                this.shiba2.graphics.use(Resources.Dance.toSprite());
            } else {
                this.shiba1.graphics.use(Resources.DanceMirror.toSprite());
                this.shiba2.graphics.use(Resources.DanceMirror.toSprite());
            }
        } else if (this.scoreUI.points > 15) {
            this.shiba1.graphics.use(Resources.Stand.toSprite());
            this.shiba2.graphics.use(Resources.Stand.toSprite());
        } else {
            this.shiba1.graphics.use(Resources.Sit.toSprite());
            this.shiba2.graphics.use(Resources.Sit.toSprite());
        }
    }
}