import isRequiredCheck from './isRequired'
import dataTypeCheck from './dataTypeCheck'
import checkMinMax from './checkMinMax'

/**
 * @class Validator
 */
class Validator {
  constructor() {
    /**
     *@constructor property which contains function calls
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
      //moving keys in rules
      for (let ruleValueKey of Object.keys(rules[objPropKey])) {
        //moving for keys in rules keys
        if (rules[objPropKey][ruleValueKey] === false) continue //if property unavailable in object
        let validateParams = {
          objProp: args[objPropKey],
          objPropKey,
          ruleValue: rules[objPropKey][ruleValueKey],
          dataType: rules[objPropKey]['dataType'],
          ruleValueKey
        }
        this.validatorFunctions[ruleValueKey](validateParams) //called constructor in Validator class and called all functions
      }
    }
    return true
  }
}

export default new Validator()
