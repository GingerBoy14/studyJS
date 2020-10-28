import isRequiredCheck from './isRequired'
import dataTypeCheck from './dataTypeCheck'
import checkMinMax from './checkMinMax'

/**
 * @class Validator
 */

class Validator {
  constructor() {
    /**
     *
     * @type {{isRequired: (function({objProp?: *, objPropKey: *}): boolean),
     * minValue: (function(*): (boolean|undefined)),
     * maxValue: (function(*): (boolean|undefined)),
     * dataType: (function(*): boolean)}}
     */
    this.validatorFunctions = {
      dataType: dataTypeCheck,
      isRequired: isRequiredCheck,
      minValue: checkMinMax,
      maxValue: checkMinMax
    }
  }

  /**
   *
   * @param obj
   * @returns {boolean}
   */
  validate(obj) {
    const { rules, args } = obj
    for (let objPropKey in rules) {
      for (let ruleValueKey of Object.keys(rules[objPropKey])) {
        if (rules[objPropKey][ruleValueKey] === false) continue
        let validateParams = {
          objProp: args[objPropKey],
          objPropKey,
          ruleValue: rules[objPropKey][ruleValueKey],
          dataType: rules[objPropKey]['dataType'],
          ruleValueKey
        }
        this.validatorFunctions[ruleValueKey](validateParams)
      }
    }
    return true
  }
}

export default new Validator()
