import pluralize from "pluralize"
import S from "string"

const getCollectionName = (name) => {
  try {
    if (!name)
      throw new Error("Please provide name to the getCollectionName method")
    if (typeof name !== "string") throw new Error("name is not a string")
    return pluralize(S(name).camelize().s)
  } catch (e) {
    console.error(e)
  }
}

export default getCollectionName
