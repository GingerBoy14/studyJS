/**
 * @module isRequiredCheck
 */

/**
 * @param objProp {object} value object property
 * @param objPropKey{object} key object property
 * @returns {boolean} return true if object property is available in object
 *
 * */

const isRequiredCheck = ({ objProp, objPropKey }) => {
  if (objProp) return true
  throw new Error(`${objPropKey} cannot be empty!`)
}

export default isRequiredCheck
