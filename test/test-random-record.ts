const chai = require('chai')
const expect = chai.expect

/**
 * Library under test
 */

import Record from 'timeseries-record'
import randomRecord from '../src/random-record'


describe('#randomRecord', () => {

    it('should generate a valid record', () => {
        for (let i = 0; i < 1000; ++i) {
            let record: Record = randomRecord()
            expect(record.High).to.be.at.least(record.Open)
            expect(record.High).to.be.at.least(record.Low)
            expect(record.High).to.be.at.least(record.Close)
            expect(record.Low).to.be.at.most(record.Open)
            expect(record.Low).to.be.at.most(record.High)
            expect(record.Low).to.be.at.most(record.Close)
        }
    })

})
