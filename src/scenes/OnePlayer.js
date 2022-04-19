class OnePlayer extends Phaser.Scene {
    constructor() {
        super("onePlayer");
    }

    preload() {

    }
    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        };

        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - (borderUISize + borderPadding), 'CONTROLS', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'USE ← → to move & ↑ to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update () {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000,
                easyMode: true
            };
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }

        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000,
                easyMode: false
            };
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
}