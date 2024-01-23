tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(1)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f e f e f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f 5 5 5 5 5 f . . . . 
    . . . . . f 5 5 5 5 5 f . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 7 7 . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . e 1 e 1 e . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . e 7 7 7 7 7 e . . . . 
    . . . . . e 7 7 7 7 7 e . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . e e . e e . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), mySprite2)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 6 6 . . . . 
    . . . . . 6 6 6 6 6 6 6 6 . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . . 4 8 4 8 4 . . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . 4 6 6 6 6 6 4 . . . . 
    . . . . . 4 6 6 6 6 6 4 . . . . 
    . . . . . . 6 6 6 6 6 . . . . . 
    . . . . . . 4 4 . 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), mySprite3)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 8 . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 f 7 f 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . 7 8 8 8 8 8 7 . . . . 
    . . . . . 7 8 8 8 8 8 7 . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . 7 7 . 7 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), mySprite4)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.TopLeft)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
splitScreen.setBorderColor(8)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mySprite2)
splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.TopRight)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, mySprite3)
splitScreen.setCameraRegion(splitScreen.Camera.Camera3, splitScreen.CameraRegion.BottomLeft)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, mySprite4)
splitScreen.setCameraRegion(splitScreen.Camera.Camera4, splitScreen.CameraRegion.BottomRight)
