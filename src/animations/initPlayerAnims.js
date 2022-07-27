
function initPlayerAnims(scene){
    scene.anims.create({
      key: 'player-idle',
      frames: scene.anims.generateFrameNumbers('player-idle', {start: 0, end: 7}),
      frameRate: 10, 
      repeat: -1
    })

    scene.anims.create({
      key: 'player-walk-right',
      frames: scene.anims.generateFrameNumbers('player-walk-right', {start: 0, end: 7}),
      frameRate: 10, 
      repeat: -1
    })

    scene.anims.create({
      key: 'player-take-hit',
      frames: scene.anims.generateFrameNumbers('player-take-hit', {start: 0, end: 5}),
      frameRate: 10, 
      repeat: 0
    })

    scene.anims.create({
      key: 'player-death',
      frames: scene.anims.generateFrameNumbers('player-death', {start: 0, end: 12}),
      frameRate: 10, 
      repeat: 0
    })

    scene.anims.create({
      key: 'player-shoot-attack',
      frames: scene.anims.generateFrameNumbers('player-shoot-attack', {start: 0, end: 6}),
      frameRate: 10, 
      repeat: 0
    })

    scene.anims.create({
        key: 'player-sword-attack',
        frames: scene.anims.generateFrameNumbers('player-sword-attack', {start: 0, end: 10}),
        frameRate: 10, 
        repeat: 0
    })
  }

  export default initPlayerAnims