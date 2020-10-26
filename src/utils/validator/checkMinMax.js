const checkMinMax = ({
  objProp,
  dataType,
  ruleValue,
  objPropKey,
  ruleValueKey,
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
    throw new Error(`${objPropKey} cannot have minimum or maximum value`)
  }
  let op =
    ruleValueKey === "minValue"
      ? valueDeterminator(objProp, dataType) >= ruleValue
      : valueDeterminator(objProp, dataType) <= ruleValue
  if (op) return true
  else
    throw new Error(
      `${objPropKey} is smaller/bigger than minimum/maximum value`
    )
}

export default checkMinMax
