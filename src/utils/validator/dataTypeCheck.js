/**
 * @module dataTypeCheck
 */
/**
 * @param {object} validateParams This is object is received properties
 * @returns {boolean} return true if dataType(from constants data types) = validate parameters
 */
const dataTypeCheck = (validateParams) => {
  const { objProp, ruleValue, objPropKey } = validateParams
  if (Array.isArray(objProp) && ruleValue === 'array') return true
  if (typeof objProp === ruleValue) return true
  throw new Error(`${objPropKey} type isn't type that was declared in rules`)
}

export default dataTypeCheck
