import { DATA_TYPES_VALUES } from '../../constants/dataTypes'

class PropType {
    constructor(dataType) {
        this.dataType = dataType;
        this.isRequired = false;
        this.min = false;
        this.max = false;       
    }

    required() {
        this.isRequired = true;
        return this;
    }

    min(val){
        this.min = val
        return this
    }

    max(val){
        this.max = val
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