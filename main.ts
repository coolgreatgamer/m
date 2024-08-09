enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const backround = SpriteKind.create()
    export const hidden = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (loading_done == 1) {
        music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        merio.setVelocity(0, -80)
        pause(200)
        merio.setVelocity(0, 0)
        pause(100)
        merio.setVelocity(0, 80)
        pause(200)
        merio.setVelocity(0, 0)
        merio.y = 105
        if (block_used == 0) {
            merio.y = 105
        } else {
            merio.y = 103
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (block_used == 1) {
        projectile = sprites.createProjectileFromSprite(assets.image`laser`, merio, 100, 0)
        music.play(music.createSoundEffect(WaveShape.Square, 1500, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        pause(1700)
    } else {
        game.showLongText("real smart", DialogLayout.Bottom)
    }
})
controller.combos.attachCombo("drlu", function () {
    music.stopAllSounds()
    animation.stopAnimation(animation.AnimationTypes.All, merio)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.backround)
    sprites.destroyAllSpritesOfKind(SpriteKind.hidden)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    music.setVolume(255)
    loading_done = -1
    huh_used = 6
    how_used = 6
    block_used = 6
    scene.setBackgroundImage(assets.image`error`)
    pause(1000)
    b_load = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (loading_done == 1) {
        music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        merio.setVelocity(0, -80)
        pause(200)
        merio.setVelocity(0, 0)
        pause(100)
        merio.setVelocity(0, 80)
        pause(200)
        merio.setVelocity(0, 0)
        if (block_used == 0) {
            merio.y = 105
        } else {
            merio.y = 103
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (loading_done == 1) {
        animation.runImageAnimation(
        merio,
        assets.animation`merio walking`,
        400,
        true
        )
    }
})
controller.combos.attachCombo("adalda", function () {
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    800,
    800,
    255,
    255,
    200,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    pause(200)
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    400,
    200,
    255,
    255,
    200,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    pause(200)
    music.play(music.createSoundEffect(
    WaveShape.Sine,
    200,
    200,
    255,
    255,
    200,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    game.showLongText("secret", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(gonba)
    animation.runImageAnimation(
    projectile,
    assets.animation`laser hit`,
    50,
    false
    )
    projectile.vx = 0
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 41, 200, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    pause(400)
    sprites.destroy(projectile)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (loading_done == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, merio)
        merio.setImage(assets.image`merio right`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (loading_done == 1) {
        animation.stopAnimation(animation.AnimationTypes.All, merio)
        merio.setImage(assets.image`merio left`)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (loading_done == 1) {
        animation.runImageAnimation(
        merio,
        assets.animation`merio walking2`,
        400,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (block_used == 0) {
        huh.setImage(assets.image`super used`)
        huh.vy = -29
        pause(100)
        huh.vy = 29
        pause(100)
        huh.vy = 0
        weiuji.vy = -50
        music.play(music.createSoundEffect(WaveShape.Square, 1, 1220, 83, 83, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)


        scaling.scaleByPixels(merio, 2, ScaleDirection.Vertically, ScaleAnchor.Bottom)
        life += 1

        info.setLife(2)

        info.setLife(2)

        info.setLife(2)


        info.setLife(2)

        info.changeScoreBy(1)

        block_used = 1
    } else {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(139, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        pause(1000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hidden, function (sprite, otherSprite) {
    if (how_used == 0) {
        how.setImage(assets.image`hidden used`)
        how.setVelocity(0, -29)
        pause(100)
        how.setVelocity(0, 29)
        pause(100)
        how.setVelocity(0, 0)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        how_used = 1
        pause(200)
    } else {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(139, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        pause(1000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.backround, function (sprite, otherSprite) {
    if (huh_used == 0) {
        bluck.setImage(assets.image`brick used`)
        bluck.vy = -29
        pause(100)
        bluck.vy = 29
        pause(100)
        bluck.vy = 0
        cuion.vy = -50
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Triplet)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        huh_used = 1
        pause(200)
        sprites.destroy(cuion)
    } else {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(139, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        pause(1000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (loading_done == 1) {
        if (life == 2) {
            life = 1
            music.play(music.createSoundEffect(WaveShape.Square, 428, 0, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        } else {
            music.play(music.createSoundEffect(WaveShape.Square, 1005, 1, 255, 255, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            merio.setImage(assets.image`whomp whomp whompppp`)
            merio.setVelocity(0, 60)
            pause(1000)
            game.setGameOverScoringType(game.ScoringType.HighScore)
        }
    }
})
let broken = 0
let zyh = 0
let mySprite: Sprite = null
let textsprite2: TextSprite = null
let textSprite: TextSprite = null
let other_loading = 0
let loading = 0
let b_load = 0
let projectile: Sprite = null
let life = 0
let loading_done = 0
let how: Sprite = null
let huh: Sprite = null
let weiuji: Sprite = null
let bluck: Sprite = null
let cuion: Sprite = null
let gonba: Sprite = null
let merio: Sprite = null
let how_used = 0
let huh_used = 0
let block_used = 0
block_used = 0
huh_used = 0
how_used = 0
scene.setBackgroundImage(assets.image`backround`)
merio = sprites.create(assets.image`merio started`, SpriteKind.Player)
scaling.scaleToPixels(merio, 32, ScaleDirection.Horizontally, ScaleAnchor.Bottom)
scaling.scaleToPixels(merio, 32, ScaleDirection.Vertically, ScaleAnchor.Bottom)
merio.setPosition(15, 105)
let speed = 30
gonba = sprites.create(assets.image`evil amongus`, SpriteKind.Enemy)
scaling.scaleToPixels(gonba, 32, ScaleDirection.Horizontally, ScaleAnchor.Middle)
scaling.scaleToPixels(gonba, 32, ScaleDirection.Vertically, ScaleAnchor.Middle)
gonba.setPosition(140, 105)
controller.moveSprite(merio, 0, 0)
cuion = sprites.create(assets.image`coin`, SpriteKind.Food)
cuion.setPosition(47, 60)
bluck = sprites.create(assets.image`brick`, SpriteKind.backround)
bluck.setPosition(40, 64)
scaling.scaleToPixels(bluck, 24, ScaleDirection.Horizontally, ScaleAnchor.Middle)
scaling.scaleToPixels(bluck, 24, ScaleDirection.Vertically, ScaleAnchor.Middle)
weiuji = sprites.create(assets.image`power`, SpriteKind.Food)
weiuji.setPosition(96, 64)
huh = sprites.create(assets.image`power block`, SpriteKind.Food)
scaling.scaleToPixels(huh, 24, ScaleDirection.Horizontally, ScaleAnchor.Middle)
scaling.scaleToPixels(huh, 24, ScaleDirection.Vertically, ScaleAnchor.Middle)
huh.setPosition(96, 64)
info.setLife(1)
