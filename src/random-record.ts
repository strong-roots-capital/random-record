/**
 * random-record
 * Generate a random talib-record
 */

import randomInt = require('random-int')


/**
 * Copied definition of Record from package `talib-binding`.
 */
export declare interface Record {
    /**
     * Time that the current Record began, in units of milliseconds
     * elapsed since January 1, 1970.
     */
    Time: number,
    /**
     * Opening value of current Record.
     */
    Open: number,
    /**
     * Highest value observed during current Record.
     */
    High: number,
    /**
     * Lowest value observed during current Record.
     */
    Low: number,
    /**
     * Closing value of current Record.
     */
    Close: number,
    /**
     * Volume observed in current Record.
     */
    Volume: number
}

/**
 * Generate a random (and valid) Record.
 */
export function randomRecord(): Record {

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
