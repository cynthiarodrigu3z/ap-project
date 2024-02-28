function spawn2 () {
    p1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 1 2 2 2 2 2 2 2 1 2 2 1 . . 
        . 1 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 1 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 1 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 1 2 2 2 2 2 2 2 2 2 1 . 
        . . 1 2 2 1 2 2 2 2 2 2 2 1 . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p1, tiles.getTileLocation(0, 7))
    p2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 1 2 2 2 2 2 2 2 1 2 2 1 . . 
        . 1 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 1 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 1 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 1 2 2 2 2 2 2 2 2 2 1 . 
        . . 1 2 2 1 2 2 2 2 2 2 2 1 . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p2, tiles.getTileLocation(2, 7))
    p3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 1 2 2 2 2 2 2 2 1 2 2 1 . . 
        . 1 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 1 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 1 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 1 2 2 2 2 2 2 2 2 2 1 . 
        . . 1 2 2 1 2 2 2 2 2 2 2 1 . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p3, tiles.getTileLocation(4, 7))
    p4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 1 2 2 2 2 2 2 2 1 2 2 1 . . 
        . 1 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 1 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 1 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 1 2 2 2 2 2 2 2 2 2 1 . 
        . . 1 2 2 1 2 2 2 2 2 2 2 1 . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p4, tiles.getTileLocation(6, 7))
    p5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 1 2 2 2 2 2 2 2 1 2 2 1 . . 
        . 1 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 1 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 1 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 1 2 2 2 2 2 2 2 2 2 1 . 
        . . 1 2 2 1 2 2 2 2 2 2 2 1 . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p5, tiles.getTileLocation(1, 6))
    p6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 1 2 2 2 2 2 2 2 1 2 2 1 . . 
        . 1 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 1 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 1 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 1 2 2 2 2 2 2 2 2 2 1 . 
        . . 1 2 2 1 2 2 2 2 2 2 2 1 . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p6, tiles.getTileLocation(3, 6))
    p7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 1 2 2 2 2 2 2 2 1 2 2 1 . . 
        . 1 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 1 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 1 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 1 2 2 2 2 2 2 2 2 2 1 . 
        . . 1 2 2 1 2 2 2 2 2 2 2 1 . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p7, tiles.getTileLocation(5, 6))
    p8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 1 2 2 2 2 2 2 2 1 2 2 1 . . 
        . 1 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 1 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 1 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 1 2 2 2 2 2 2 2 2 2 1 . 
        . . 1 2 2 1 2 2 2 2 2 2 2 1 . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p8, tiles.getTileLocation(7, 6))
    p9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 1 2 2 2 2 2 2 2 1 2 2 1 . . 
        . 1 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 1 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 1 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 1 2 2 2 2 2 2 2 2 2 1 . 
        . . 1 2 2 1 2 2 2 2 2 2 2 1 . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p9, tiles.getTileLocation(0, 5))
    p10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 1 2 2 2 2 2 2 2 1 2 2 1 . . 
        . 1 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 1 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 1 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 1 2 2 2 2 2 2 2 2 2 1 . 
        . . 1 2 2 1 2 2 2 2 2 2 2 1 . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p10, tiles.getTileLocation(2, 5))
    p11 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 1 2 2 2 2 2 2 2 1 2 2 1 . . 
        . 1 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 1 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 1 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 1 2 2 2 2 2 2 2 2 2 1 . 
        . . 1 2 2 1 2 2 2 2 2 2 2 1 . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p11, tiles.getTileLocation(4, 5))
    p12 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . 1 2 2 2 2 2 2 2 1 2 2 1 . . 
        . 1 2 2 2 2 2 2 2 2 1 1 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 1 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 1 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 1 2 2 2 2 2 2 2 2 2 2 1 . 
        . 1 2 2 1 2 2 2 2 2 2 2 2 2 1 . 
        . . 1 2 2 1 2 2 2 2 2 2 2 1 . . 
        . . . 1 2 2 2 2 2 2 2 2 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p12, tiles.getTileLocation(6, 5))
    tiles2 = [
    tiles.getTileAtLocation(tiles.getTileLocation(1, 0)),
    tiles.getTileAtLocation(tiles.getTileLocation(3, 0)),
    tiles.getTileAtLocation(tiles.getTileLocation(5, 0)),
    tiles.getTileAtLocation(tiles.getTileLocation(7, 0)),
    tiles.getTileAtLocation(tiles.getTileLocation(0, 1)),
    tiles.getTileAtLocation(tiles.getTileLocation(2, 1)),
    tiles.getTileAtLocation(tiles.getTileLocation(4, 1)),
    tiles.getTileAtLocation(tiles.getTileLocation(6, 1)),
    tiles.getTileAtLocation(tiles.getTileLocation(1, 2)),
    tiles.getTileAtLocation(tiles.getTileLocation(3, 2)),
    tiles.getTileAtLocation(tiles.getTileLocation(5, 2)),
    tiles.getTileAtLocation(tiles.getTileLocation(7, 2)),
    tiles.getTileAtLocation(tiles.getTileLocation(0, 3)),
    tiles.getTileAtLocation(tiles.getTileLocation(2, 3)),
    tiles.getTileAtLocation(tiles.getTileLocation(4, 3)),
    tiles.getTileAtLocation(tiles.getTileLocation(6, 3)),
    tiles.getTileAtLocation(tiles.getTileLocation(1, 4)),
    tiles.getTileAtLocation(tiles.getTileLocation(3, 4)),
    tiles.getTileAtLocation(tiles.getTileLocation(5, 4)),
    tiles.getTileAtLocation(tiles.getTileLocation(7, 4)),
    tiles.getTileAtLocation(tiles.getTileLocation(0, 5)),
    tiles.getTileAtLocation(tiles.getTileLocation(2, 5)),
    tiles.getTileAtLocation(tiles.getTileLocation(4, 5)),
    tiles.getTileAtLocation(tiles.getTileLocation(6, 5)),
    tiles.getTileAtLocation(tiles.getTileLocation(1, 6)),
    tiles.getTileAtLocation(tiles.getTileLocation(3, 6)),
    tiles.getTileAtLocation(tiles.getTileLocation(5, 6)),
    tiles.getTileAtLocation(tiles.getTileLocation(7, 6)),
    tiles.getTileAtLocation(tiles.getTileLocation(0, 7)),
    tiles.getTileAtLocation(tiles.getTileLocation(2, 7)),
    tiles.getTileAtLocation(tiles.getTileLocation(4, 7)),
    tiles.getTileAtLocation(tiles.getTileLocation(6, 7))
    ]
}
function spawn1 () {
    t1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . 1 8 8 8 8 8 8 8 1 8 8 1 . . 
        . 1 8 8 8 8 8 8 8 8 1 1 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 1 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 1 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 1 8 8 8 8 8 8 8 8 8 1 . 
        . . 1 8 8 1 8 8 8 8 8 8 8 1 . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(t1, tiles.getTileLocation(1, 0))
    t2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . 1 8 8 8 8 8 8 8 1 8 8 1 . . 
        . 1 8 8 8 8 8 8 8 8 1 1 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 1 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 1 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 1 8 8 8 8 8 8 8 8 8 1 . 
        . . 1 8 8 1 8 8 8 8 8 8 8 1 . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(t2, tiles.getTileLocation(3, 0))
    t3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . 1 8 8 8 8 8 8 8 1 8 8 1 . . 
        . 1 8 8 8 8 8 8 8 8 1 1 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 1 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 1 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 1 8 8 8 8 8 8 8 8 8 1 . 
        . . 1 8 8 1 8 8 8 8 8 8 8 1 . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(t3, tiles.getTileLocation(5, 0))
    t4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . 1 8 8 8 8 8 8 8 1 8 8 1 . . 
        . 1 8 8 8 8 8 8 8 8 1 1 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 1 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 1 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 1 8 8 8 8 8 8 8 8 8 1 . 
        . . 1 8 8 1 8 8 8 8 8 8 8 1 . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(t4, tiles.getTileLocation(7, 0))
    t5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . 1 8 8 8 8 8 8 8 1 8 8 1 . . 
        . 1 8 8 8 8 8 8 8 8 1 1 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 1 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 1 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 1 8 8 8 8 8 8 8 8 8 1 . 
        . . 1 8 8 1 8 8 8 8 8 8 8 1 . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(t5, tiles.getTileLocation(0, 1))
    t6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . 1 8 8 8 8 8 8 8 1 8 8 1 . . 
        . 1 8 8 8 8 8 8 8 8 1 1 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 1 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 1 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 1 8 8 8 8 8 8 8 8 8 1 . 
        . . 1 8 8 1 8 8 8 8 8 8 8 1 . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(t6, tiles.getTileLocation(2, 1))
    t7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . 1 8 8 8 8 8 8 8 1 8 8 1 . . 
        . 1 8 8 8 8 8 8 8 8 1 1 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 1 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 1 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 1 8 8 8 8 8 8 8 8 8 1 . 
        . . 1 8 8 1 8 8 8 8 8 8 8 1 . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(t7, tiles.getTileLocation(4, 1))
    t8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . 1 8 8 8 8 8 8 8 1 8 8 1 . . 
        . 1 8 8 8 8 8 8 8 8 1 1 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 1 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 1 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 1 8 8 8 8 8 8 8 8 8 1 . 
        . . 1 8 8 1 8 8 8 8 8 8 8 1 . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(t8, tiles.getTileLocation(6, 1))
    t9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . 1 8 8 8 8 8 8 8 1 8 8 1 . . 
        . 1 8 8 8 8 8 8 8 8 1 1 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 1 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 1 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 1 8 8 8 8 8 8 8 8 8 1 . 
        . . 1 8 8 1 8 8 8 8 8 8 8 1 . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(t9, tiles.getTileLocation(1, 2))
    t10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . 1 8 8 8 8 8 8 8 1 8 8 1 . . 
        . 1 8 8 8 8 8 8 8 8 1 1 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 1 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 1 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 1 8 8 8 8 8 8 8 8 8 1 . 
        . . 1 8 8 1 8 8 8 8 8 8 8 1 . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(t10, tiles.getTileLocation(3, 2))
    t11 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . 1 8 8 8 8 8 8 8 1 8 8 1 . . 
        . 1 8 8 8 8 8 8 8 8 1 1 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 1 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 1 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 1 8 8 8 8 8 8 8 8 8 1 . 
        . . 1 8 8 1 8 8 8 8 8 8 8 1 . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(t11, tiles.getTileLocation(5, 2))
    t12 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . 1 8 8 8 8 8 8 8 1 8 8 1 . . 
        . 1 8 8 8 8 8 8 8 8 1 1 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 1 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 1 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 1 8 8 8 8 8 8 8 8 8 8 1 . 
        . 1 8 8 1 8 8 8 8 8 8 8 8 8 1 . 
        . . 1 8 8 1 8 8 8 8 8 8 8 1 . . 
        . . . 1 8 8 8 8 8 8 8 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(t12, tiles.getTileLocation(7, 2))
    tiles2 = [
    tiles.getTileAtLocation(tiles.getTileLocation(1, 0)),
    tiles.getTileAtLocation(tiles.getTileLocation(3, 0)),
    tiles.getTileAtLocation(tiles.getTileLocation(5, 0)),
    tiles.getTileAtLocation(tiles.getTileLocation(7, 0)),
    tiles.getTileAtLocation(tiles.getTileLocation(0, 1)),
    tiles.getTileAtLocation(tiles.getTileLocation(2, 1)),
    tiles.getTileAtLocation(tiles.getTileLocation(4, 1)),
    tiles.getTileAtLocation(tiles.getTileLocation(6, 1)),
    tiles.getTileAtLocation(tiles.getTileLocation(1, 2)),
    tiles.getTileAtLocation(tiles.getTileLocation(3, 2)),
    tiles.getTileAtLocation(tiles.getTileLocation(5, 2)),
    tiles.getTileAtLocation(tiles.getTileLocation(7, 2)),
    tiles.getTileAtLocation(tiles.getTileLocation(0, 3)),
    tiles.getTileAtLocation(tiles.getTileLocation(2, 3)),
    tiles.getTileAtLocation(tiles.getTileLocation(4, 3)),
    tiles.getTileAtLocation(tiles.getTileLocation(6, 3)),
    tiles.getTileAtLocation(tiles.getTileLocation(1, 4)),
    tiles.getTileAtLocation(tiles.getTileLocation(3, 4)),
    tiles.getTileAtLocation(tiles.getTileLocation(5, 4)),
    tiles.getTileAtLocation(tiles.getTileLocation(7, 4)),
    tiles.getTileAtLocation(tiles.getTileLocation(0, 5)),
    tiles.getTileAtLocation(tiles.getTileLocation(2, 5)),
    tiles.getTileAtLocation(tiles.getTileLocation(4, 5)),
    tiles.getTileAtLocation(tiles.getTileLocation(6, 5)),
    tiles.getTileAtLocation(tiles.getTileLocation(1, 6)),
    tiles.getTileAtLocation(tiles.getTileLocation(3, 6)),
    tiles.getTileAtLocation(tiles.getTileLocation(5, 6)),
    tiles.getTileAtLocation(tiles.getTileLocation(7, 6)),
    tiles.getTileAtLocation(tiles.getTileLocation(0, 7)),
    tiles.getTileAtLocation(tiles.getTileLocation(2, 7)),
    tiles.getTileAtLocation(tiles.getTileLocation(4, 7)),
    tiles.getTileAtLocation(tiles.getTileLocation(6, 7))
    ]
}
function highlight (list: any[]) {
    for (let value of list) {
    	
    }
    if (true) {
    	
    } else {
    	
    }
    if (true) {
    	
    } else {
    	
    }
}
let t12: Sprite = null
let t11: Sprite = null
let t10: Sprite = null
let t9: Sprite = null
let t8: Sprite = null
let t7: Sprite = null
let t6: Sprite = null
let t5: Sprite = null
let t4: Sprite = null
let t3: Sprite = null
let t2: Sprite = null
let t1: Sprite = null
let tiles2: Image[] = []
let p12: Sprite = null
let p11: Sprite = null
let p10: Sprite = null
let p9: Sprite = null
let p8: Sprite = null
let p7: Sprite = null
let p6: Sprite = null
let p5: Sprite = null
let p4: Sprite = null
let p3: Sprite = null
let p2: Sprite = null
let p1: Sprite = null
let list: number[] = []
namespace userconfig{
    export const ARCADE_SCREEN_WIDTH = 128
    export const ARCADE_SCREEN_HEIGHT = 128
}
tiles.setCurrentTilemap(tilemap`level2`)
spawn1()
spawn2()
highlight(list)
