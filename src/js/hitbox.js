import { Actor, Vector, Keys } from "excalibur";
import { Resources } from "./resources";
import { Bar } from './bar.js';
import { MirroredBar } from './mirroredbar.js';

export class HitBox extends Actor {
    constructor(scoreUI, game) {
        super({ width: 475, height: 450 });
        this.scoreUI = scoreUI;
        this.game = game;
        this.isBarInside = false;
        this.points = 0;
    }

    onInitialize(engine) {
        this.pos = new Vector(610, 350);
        this.graphics.use(Resources.Hitbox.toSprite());
        this.scale = new Vector(0.09, 0.1);

        this.on('collisionstart', (event) => this.onCollisionStart(event));
        this.on('collisionend', (event) => this.onCollisionEnd(event));

        engine.input.keyboard.on('press', (key) => {
            if (key.key === Keys.Space) {
                this.checkSpacePress();
            } else if (key.key === Keys.F) {
                this.checkFPress();
            }
        });
    }

    onCollisionStart(event) {
        if (event.other instanceof Bar || event.other instanceof MirroredBar) {
            this.isBarInside = true;
            this.currentBar = event.other;
        }
    }

    onCollisionEnd(event) {
        if (event.other instanceof Bar || event.other instanceof MirroredBar) {
            this.isBarInside = false;
        }
    }

    checkSpacePress() {
        if (this.isBarInside && this.currentBar instanceof Bar) {
            this.updatePoints(1);
            this.currentBar.kill();
        } else {
            this.updatePoints(-1);
        }
    }
    
    checkFPress() {
        if (this.isBarInside && this.currentBar instanceof MirroredBar) {
            this.updatePoints(10);
            this.currentBar.kill();
        }
    }
    
    updatePoints(amount) {
        this.points += amount;
        this.scoreUI.updateScore(this.points);
        this.game.updateSitImages();
    }

    
}
