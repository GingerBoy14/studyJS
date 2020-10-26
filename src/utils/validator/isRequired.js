const isRequiredCheck = ({ objProp, objPropKey }) => {
  if (objProp) return true
  throw new Error(`${objPropKey} cannot be empty!`)
}

export default isRequiredCheck
