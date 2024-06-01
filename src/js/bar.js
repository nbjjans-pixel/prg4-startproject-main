import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Bar extends Actor {
    constructor(hitbox) {
        super({ width: 200, height: 200 });
        this.hitbox = hitbox;
    }

    onInitialize() {
        this.pos = new Vector(0, 350);
        this.vel = new Vector(150, 0);
        this.graphics.use(Resources.Block.toSprite());
        this.scale = new Vector(0.075, 0.075);
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x > engine.drawWidth) {
            this.kill();

            if (this.hitbox.isBarInside) {
                this.hitbox.updatePoints(-1);
            }
        }
    }
}
