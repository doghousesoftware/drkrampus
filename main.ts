function response (Value: number) {
    if (Value >= 900) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    pins.analogWritePin(AnalogPin.P1, Value)
}
basic.forever(function () {
    response(pins.analogReadPin(AnalogPin.P0))
})
