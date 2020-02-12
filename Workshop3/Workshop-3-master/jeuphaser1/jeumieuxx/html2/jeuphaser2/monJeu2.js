var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
scene: {
		init: init,
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

function init(){
 	var platforms;
	var player;
	var cursors; 
}

function preload(){
	this.load.image('background','image2/fond.png');	
	this.load.image('fond','image2/fond.png');
	this.load.image('sol','image2/platform.png');
	this.load.spritesheet('perso','image2/blabla.png',{frameWidth: 50, frameHeight: 37});
}



function create(){
	
	this.add.image(400,300,'background');
	platforms = this.physics.add.staticGroup();
	platforms.create(290,580,'sol');
	platforms.create(100,580,'sol');
	platforms.create(490,580,'sol');
	platforms.create(690,580,'sol');
	platforms.create(600,400,'sol');
	platforms.create(50,250,'sol');
	this.anims.create({
		key:'stop',
		frames: this.anims.generateFrameNumbers('perso', {start: 0, end: 3}),
		frameRate: 10
	});
	player = this.physics.add.sprite(100,450,'perso');
	player.setCollideWorldBounds(true);
	player.body.setGravityY(000);
	this.physics.add.collider(player,platforms);
	
	cursors = this.input.keyboard.createCursorKeys(); 
	dasht= this.input.keyboard.addKey('W');
	
}



function update(){
	if (cursors.left.isDown) {
	player.setVelocityX(-300);	
	} 
	if (cursors.right.isDown) {
		player.setVelocityX(300);	
	}
	if (cursors.up.isDown) {
	player.setVelocityY(-300);	
	} 
	if (cursors.down.isDown) {
		player.setVelocityY(300);	
	}
	if (cursors.left.isUp && cursors.right.isUp) { 
	player.setVelocityX(0);	
	}
	if (cursors.up.isUp && cursors.down.isUp) {
	player.setVelocityY(0);	
	
	
	}
}
