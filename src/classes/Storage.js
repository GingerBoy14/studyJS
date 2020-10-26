import { generateUID, getCollectionName } from '../utils'

class Storage {
  constructor() {
    this.data = {}
  }

  post(data) {
    try {
      if (!data) throw new Error('No data in post method!')
      if (typeof data !== 'object' || Array.isArray(data))
        throw new Error('Data should be an object')
      if (!data.type) throw new Error('Data should have type')
      if (typeof data.type !== 'string')
      throw new Error('Data should be a string')

      const uid = generateUID();
      const collectionName = getCollectionName(data.type)
      this.data[collectionName] = {
        ...this.data[collectionName],
        [uid]: data
      }
    } catch (e) {
      console.error(e)
    }
  }

  get() {}

  update() {}

  delete() {}
}

export default new Storage()
