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
controller.moveSprite(mySprite)
splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.TopLeft)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
splitScreen.setBorderColor(14)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
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
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mySprite2)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mySprite2)
splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.TopRight)
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
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, mySprite3)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, mySprite3)
splitScreen.setCameraRegion(splitScreen.Camera.Camera3, splitScreen.CameraRegion.BottomLeft)
