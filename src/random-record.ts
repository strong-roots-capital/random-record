/**
 * random-record
 * Generate a random talib-record
 */

import randomInt from 'random-int'
import Record from 'timeseries-record'


/**
 * Generate a random (and valid) Record.
 */
export default function randomRecord(): Record {

    let open = randomInt(100)
    let high = randomInt(open, open + 100)
    let low = randomInt(0, open)
    let close = randomInt(low, high)
    let time = randomInt(100)
    let volume = randomInt(100000)

    return {
        Time: time,
        Open: open,
        High: high,
        Low: low,
        Close: close,
        Volume: volume
    }
}
