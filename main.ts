let Gandalf = 0
let Gundabark_Orks_2 = 0
led.plot(1, Gandalf)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.unplot(1, Gandalf)
        music.playTone(440, music.beat(BeatFraction.Half))
        Gandalf = Gandalf + 1
    }
    if (input.buttonIsPressed(Button.B)) {
        led.unplot(1, Gandalf)
        music.playTone(262, music.beat(BeatFraction.Half))
        Gandalf = Gandalf - 1
    }
    if (Gandalf > 4) {
        Gandalf = 4
    }
    if (Gandalf < 0) {
        Gandalf = 0
    }
    led.plot(1, Gandalf)
})
