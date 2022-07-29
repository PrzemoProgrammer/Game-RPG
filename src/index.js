import Phaser from 'phaser';

import PlayScene from './scenes/PlayScene';
import PreloadScene from './scenes/PreloadScene';
import HudScene from './scenes/HudScene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: 0,
            debug: true
        }
    },
    scene: [PreloadScene, PlayScene, HudScene]
};

const game = new Phaser.Game(config);
