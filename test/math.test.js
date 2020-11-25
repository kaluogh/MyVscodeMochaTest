import chai from 'chai'
import { add } from '../math.js'

const {expect} = chai
describe('add test',  () => {
    it('return 3 when adding  1 + 2', () => {
        expect(add(1,2)).to.eq(3)
    })
});