import { DATA_TYPES_VALUES } from '../../constants/dataTypes'

class PropType {
    constructor(dataType) {
        this.dataType = dataType;
        this.isRequired = false;
        this.minValue = false;
        this.maxValue = false;
    }

    required() {
        this.isRequired = true;
        return this;
    }

    min(val) {
        this.minValue = val
        return this
    }

    max(val) {
        this.maxValue = val
        return this
    }
}

DATA_TYPES_VALUES.forEach((dataType) => {
    PropType.prototype[dataType] = function(){
        this.dataType = dataType;
        return new PropType(this.dataType);
    }
})

export default new PropType()

/**
 * var postPropTypes = {
 *  content: PropTypes.string().required()
 *  author: PropTypes.string()
 * }
 */