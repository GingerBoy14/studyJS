const checkMinMax = (option) => ({
  objProp,
  dataType,
  ruleValue,
  objPropKey,
}) => {
  let valueDeterminator = (objProp, dataType, objPropKey) => {
    dataType =
      dataType === "array" || dataType === "string"
        ? (dataType = "else")
        : dataType
    const map = {
      else: objProp && objProp.length,
      number: objProp,
    }
    if (map[dataType]) return map[dataType]
    throw new Error(`${objPropKey} cannot have value length restriction`)
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

export default checkMinMax
