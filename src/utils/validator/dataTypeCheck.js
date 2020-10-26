const dataTypeCheck = (validateParams) => {
  const { objProp, ruleValue, objPropKey } = validateParams
  if (Array.isArray(objProp) && ruleValue === "array") return true
  if (typeof objProp === ruleValue) return true
  throw new Error(`${objPropKey} type isn't type that was declared in rules`)
}

export default dataTypeCheck
