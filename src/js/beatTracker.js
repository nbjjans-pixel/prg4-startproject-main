import { Howl } from 'howler';

export class BeatTracker {
    constructor(audioFile, bpm, onBeatCallback) {
        this.bpm = bpm;
        this.onBeatCallback = onBeatCallback;
        this.beatInterval = (60 / bpm) * 1000;
        this.audio = new Howl({
            src: ['/audio/Samba de Amigo - Samba de Janeiro.mp3'],
            onplay: () => this.startBeatTracking(),
            onend: () => this.stopBeatTracking()
        });
    }

    start() {
        this.audio.play();
    }

    startBeatTracking() {
        this.beatTimer = setInterval(() => {
            this.onBeatCallback();
        }, this.beatInterval);
    }

    stopBeatTracking() {
        clearInterval(this.beatTimer);
    }
}
