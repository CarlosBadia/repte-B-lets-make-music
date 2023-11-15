input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", music.tempo()), music.PlaybackMode.UntilDone)
    music.changeTempoBy(200)
    basic.showString("FAST")
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("D E F G A A G C ", 250), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D E F G G F E D ", 250), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D F G E D C G F ", 250), music.PlaybackMode.UntilDone)
    basic.showString("MOVE")
    music.play(music.stringPlayable("C5 B A G F E D C ", input.acceleration(Dimension.X)), music.PlaybackMode.UntilDone)
})
