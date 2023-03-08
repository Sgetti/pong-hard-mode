input.onButtonPressed(Button.A, function () {
    paddle.move(1)
})
input.onButtonPressed(Button.B, function () {
    paddle.move(-1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    ball.move(1)
})
let angle = 0
let random = 0
let ball: game.LedSprite = null
let paddle: game.LedSprite = null
paddle = game.createSprite(4, 2)
ball = game.createSprite(1, 0)
let check = 0
paddle.turn(Direction.Left, 90)
ball.turn(Direction.Left, 0)
radio.setGroup(69)
basic.forever(function () {
    random = randint(-180, 180)
})
basic.forever(function () {
    if (ball.isTouching(paddle)) {
        ball.set(LedSpriteProperty.Direction, 235)
        ball.turn(Direction.Right, angle)
        check = 1
    } else if (ball.isTouchingEdge() && ball.get(LedSpriteProperty.X) == 4) {
        game.addScore(1)
    } else {
        ball.ifOnEdgeBounce()
    }
})
basic.forever(function () {
    if (random > 0) {
        angle = 90
    } else if (random < 0) {
        angle = 0
    } else {
        angle = 90
    }
})
basic.forever(function () {
    if (ball.get(LedSpriteProperty.X) == 0 && check == 1) {
        radio.sendNumber(ball.get(LedSpriteProperty.Y))
        radio.sendNumber(ball.get(LedSpriteProperty.Direction))
        ball.delete()
        radio.sendString("good")
    }
})
