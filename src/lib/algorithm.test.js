import { count, countIsland } from './algorithms'
import { gridExample, gridOnlyWater} from './constants'

it('counts number of land and water cells', () => {
  expect(count(gridExample)).toEqual({
    numOfEmpty: 17,
    numOfFill: 8
  })
  expect(count(gridOnlyWater)).toEqual({
    numOfEmpty: 4,
    numOfFill: 0
  })
});

it('counts number of islands', () => {
  expect(countIsland(gridExample)).toEqual(2)
  expect(countIsland(gridOnlyWater)).toEqual(0)
})