const chai = require('chai')
const expect = chai.expect

/**
 * Library under test
 */

import { Record, randomRecord } from '../src/random-record'


describe('#randomRecord', () => {

    let record: Record

    it('should generate a valid record', () => {
        for (let i = 0; i < 1000; ++i) {
            record = randomRecord()
            expect(record.High).to.be.at.least(record.Open)
            expect(record.High).to.be.at.least(record.Low)
            expect(record.High).to.be.at.least(record.Close)
            expect(record.Low).to.be.at.most(record.Open)
            expect(record.Low).to.be.at.most(record.High)
            expect(record.Low).to.be.at.most(record.Close)
        }
    })

})
