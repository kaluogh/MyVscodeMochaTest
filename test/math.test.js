import { expect } from 'chai'
import { add } from '../src/math.js'

describe('add test',  () => {
    it('return 3 when adding  1 + 2', (done) => {
        let tempValue = add(1,2)
        expect(tempValue).to.eq(3)
        done()
    })
});