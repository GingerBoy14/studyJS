import isRequiredCheck from "./isRequired"
import dataTypeCheck from "./dataTypeCheck"
import checkMinMax from "./checkMinMax"

class Validator {
  constructor() {
    this.validatorFunctions = {
      dataType: dataTypeCheck,
      isRequired: isRequiredCheck,
      minValue: checkMinMax("min"),
      maxValue: checkMinMax("max"),
    }
  }

  validate(obj) {
    const { rules, args } = obj
    for (let objPropKey in rules) {
      for (let ruleValueKey of Object.keys(rules[objPropKey])) {
        if (rules[objPropKey][ruleValueKey] === false) continue
        let validateParams = {
          objProp: args[objPropKey],
          objPropKey,
          ruleValue: rules[objPropKey][ruleValueKey],
          dataType: rules[objPropKey]["dataType"],
        }
        this.validatorFunctions[ruleValueKey](validateParams)
      }
    }
    return true
  }
}

export default new Validator()
