namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    if (level1 == 2) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.x += 60
        level1 = 0
    }
    tiles.placeOnTile(mySprite, tiles.getTileLocation(27, 12))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (level1 == 0) {
        tiles.setCurrentTilemap(maps[1])
        mySprite.x += 10
        level1 = 1
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 11))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    if (level1 == 3) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.x += 60
        level1 = 0
    }
    tiles.placeOnTile(mySprite, tiles.getTileLocation(33, 12))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    if (level1 == 0) {
        tiles.setCurrentTilemap(maps[2])
        mySprite.x += 10
        level1 = 2
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 11))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (level1 == 1) {
        tiles.setCurrentTilemap(maps[0])
        mySprite.x += 60
        level1 = 0
    }
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 27))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    if (level1 == 0) {
        tiles.setCurrentTilemap(maps[3])
        mySprite.x += 10
        level1 = 3
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 13))
    }
})
let level1 = 0
let mySprite: Sprite = null
let maps: tiles.TileMapData[] = []
maps = [
tilemap`over world`,
tilemap`cave2`,
tilemap`shop`,
tilemap`Jomars house`,
tilemap`level8`,
tilemap`level9`,
tilemap`level10`,
tilemap`level11`,
tilemap`level12`,
tilemap`level13`,
tilemap`level14`,
tilemap`level15`,
tilemap`level16`,
tilemap`level17`,
tilemap`level18`
]
tiles.setCurrentTilemap(tilemap`over world`)
mySprite = sprites.create(assets.image`sprite`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(18, 5))
