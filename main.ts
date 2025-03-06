scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    if (true) {
        tiles.setCurrentTilemap(maps[1])
        mySprite.x += 10
        level1 = 1
    }
})
let level1 = 0
let mySprite: Sprite = null
let maps: tiles.TileMapData[] = []
maps = [tilemap`over world`]
tiles.setCurrentTilemap(tilemap`over world`)
mySprite = sprites.create(assets.image`sprite`, SpriteKind.Player)
controller.moveSprite(mySprite, 75, 75)
scene.cameraFollowSprite(mySprite)
mySprite.x = 550
mySprite.y = 75
