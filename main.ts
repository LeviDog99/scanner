function subs () {
    for (let index = 0; index < 4; index++) {
        basic.showString("| |")
    }
}
basic.forever(function () {
    subs()
})
