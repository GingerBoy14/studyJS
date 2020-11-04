const expect = (result) => {
  return {
    not: (internalFuncRes) => !internalFuncRes,
    toBe: (val) => {
      if (result === val) return true
      else throw new Error(`${result} isn't equal ${val}`)
    },
    checkObjectsEqual: (obj1, obj2) => {
      if (Object.key(obj1).length !== Object.key(obj2).length) return false
      for (let i in obj1) {
        if (obj2[i] === undefined || obj1[i] !== obj2[i]) return false
      }
      return true
    },
    toEqual: (val) => {
      if (this.checkObjectsEqual(result, val)) return true
      else throw new Error(`${result} isn't equal ${val}`)
    },
    toBeNull: () => {
      if (result === null) return true
      else throw new Error(`${result} isn't null`)
    },
    toBeUndefined: () => {
      if (result === undefined) return true
      else throw new Error(`${result} isn't undefined`)
    },
    toBeTruthy: () => {
      if (result ? true : false) return true
      else throw new Error(`${result} doesn't return true`)
    },
    toBeFalsy: () => {
      if (this.not(this.toBeTruthy())) return true
      else throw new Error(`${result} doesn't return false`)
    },
    toBeGreaterThan: (val) => {
      if (result > val) return true
      else throw new Error(`${result} isn't greater than ${val}`)
    },
    toBeGreaterThanOrEqual: (val) => {
      if (result >= val) return true
      else throw new Error(`${result} isn't greater than or equal to ${val}`)
    },
    toBeLessThan: (val) => {
      if (result < val) return true
      else throw new Error(`${result} isn't lesser than ${val}`)
    },
    toBeLessThanOrEqual: (val) => {
      if (result <= val) return true
      else throw new Error(`${result} isn't lesser than or equal to ${val}`)
    },
    toBeCloseTo: (val) => {
      if (result.toString().startsWith(val.toString())) return true
      else throw new Error(`${result} isn't close to ${val}`)
    },
    toMatch: (val) => {
      if (result.match(new RegExp(val))) return true
      else throw new Error(`${result} doesn't match ${val}`)
    },
    contains: (collection, index, val) => {
      if (index === -1) return false
      else if (collection[index] === val) return true
      else return this.contains(collection, index - 1, val)
    },
    toContain: (val) => {
      if (this.contains(result, result.length - 1, val)) return true
      else throw new Error(`${result} doesn't contain ${val}`)
    }
  }
}

module.exports = expect
