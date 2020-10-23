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
        const bug = {...this, min: val};
        bug.__proto__ = PropType.prototype
        return bug
    }

    max(val){
        const bug = {...this, max: val};
        bug.__proto__ = PropType.prototype
        return bug
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