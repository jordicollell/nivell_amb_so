let nivell = game.createSprite(2, 2)
basic.forever(function () {
    nivell.change(LedSpriteProperty.Y, Math.round(input.acceleration(Dimension.Y) / 500))
    nivell.change(LedSpriteProperty.X, Math.round(input.acceleration(Dimension.X) / 500))
    if (nivell.get(LedSpriteProperty.X) == 2 && nivell.get(LedSpriteProperty.Y) == 2) {
        music.ringTone(988)
    } else {
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
})
