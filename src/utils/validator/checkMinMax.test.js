/**
 * @module checkMinMax
 */

/**
 * @param objProp{object} value in object
 * @param dataType {object} type parameters
 * @param ruleValue{object} object with rules
 * @param objPropKey{object} key in object
 * @param ruleValueKey{object} key in object with rules
 * @returns {boolean} return true  if op satisfies condition
 */

const checkMinMaxTest = (option) => ({
  objProp,
  dataType,
  ruleValue,
  objPropKey,
}) => {
  let valueDeterminator = (objProp, dataType, objPropKey) => {
    dataType =
      dataType === 'array' || dataType === 'string'
        ? (dataType = 'else')
        : dataType
    const map = {
      else: objProp && objProp.length,
      number: objProp
    }
    if (map[dataType]) return map[dataType] //return available data type
    throw new Error(`${objPropKey} cannot have minimum or maximum value`)
  }
  let errorMessage = ""
  const op = () => {
    return option === "min"
      ? () => {
          errorMessage = `${objPropKey} is smaller than minimum value`
          return valueDeterminator(objProp, dataType) >= ruleValue
        }
      : () => {
          errorMessage = `${objPropKey} is bigger than maximum value`
          return valueDeterminator(objProp, dataType) <= ruleValue
        }
  }
  if (op()()) return true
  else throw new Error(errorMessage)
}

export default checkMinMaxTest
