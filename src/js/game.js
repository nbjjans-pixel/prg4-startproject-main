import '../css/style.css';
import { Actor, Engine, Vector, DisplayMode } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Level } from './level.js';
import { Start } from './start.js';
import { Story } from './story.js';
import { Story2 } from './story2.js';
import { Story3 } from './story3.js';
import { Story4 } from './story4.js';
import { Story5 } from './story5.js';
import { Story6 } from './story6.js';
import { End } from './end.js';


export class Game extends Engine {
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        });
        this.score = 0;
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame(){
        this.add('level', new Level)
        this.add('start', new Start)
        this.add('story', new Story)
        this.add('story2', new Story2)
        this.add('story3', new Story3)
        this.add('story4', new Story4)
        this.add('story5', new Story5)
        this.add('story6', new Story6)
        this.add('end', new End)
        this.goToScene('start')
    }
}

new Game()