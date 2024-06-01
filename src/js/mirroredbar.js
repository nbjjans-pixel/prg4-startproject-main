import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class MirroredBar extends Actor {
    constructor(hitbox) {
        super({ width: 200, height: 400 });
        this.hitbox = hitbox;
        this.spawningTimerStarted = false;
    }

    onInitialize() {
        this.pos = new Vector(610, -10);
        this.vel = new Vector(0, 150);
        this.graphics.use(Resources.Noot.toSprite());
        this.scale = new Vector(0.060, 0.060);

        if (!this.spawningTimerStarted) {
            this.startSpawningTimer();
            this.spawningTimerStarted = true;
        }
    }

    startSpawningTimer() {
        setTimeout(() => {
            const mirroredBar = new MirroredBar(this.hitbox);
            if (this.scene) {
                this.scene.add(mirroredBar);
            }
        }, 2000);
    }

    onPostUpdate(engine) {
        if (this.pos.y > engine.drawHeight) {
            this.kill();
            if (this.hitbox.isBarInside) {
                this.hitbox.updatePoints(-10);
            }
        }
    }
}
