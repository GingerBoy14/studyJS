class Validator {
    constructor() {
        this.validatorFunctions = {
            dataType: this.dataTypeCheck,
            isRequired: this.isRequiredCheck,
            minValue: this.minCheck,
            maxValue: this.maxCheck
            // min: this.checkMinMax('min')
        }
    }


    isRequiredCheck({ objProp, objPropKey }) {
        if(objProp) return true;
        throw new Error(`${objPropKey} cannot be empty!`)
    }

    dataTypeCheck(validateParams){
        const {objProp, ruleValue, objPropKey} = validateParams;
        if (Array.isArray(objProp) && (ruleValue === 'array')) return true;
        if (typeof objProp === ruleValue) return true;
        throw new Error(`${objPropKey} type isn't type that was declared in rules`);
    }

    valueDeterminator = (objProp, dataType, objPropKey) => {
        const map = {
            'string': objProp && objProp.length,
            'array': objProp && objProp.length,
            'number': objProp
        }
        return map[dataType]
        throw new Error(`Current ${objPropKey} cannot have minimum or maximum value`);
    }

    minCheck = (validateParams) => {
        const {objProp, dataType, ruleValue, objPropKey} = validateParams;
        let tmp = this.valueDeterminator(objProp, dataType)
        if(tmp >= ruleValue) return true;
        throw new Error(`${objPropKey} is lesser than minimum value`);
    }

    maxCheck=(validateParams)=>{
        const {objProp, dataType, objPropKey, ruleValue} = validateParams;
        if(this.valueDeterminator(objProp, dataType, objPropKey)<=ruleValue) return true;
        throw new Error(`${objPropKey} is bigger than maximum value`);
    }

    checkMinMax = (val) => {
        return () => {
            // const {objProp, dataType, ruleValue, objPropKey} = validateParams;
            // let tmp = this.valueDeterminator(objProp, dataType)
            // if(tmp >= ruleValue) return true;
            // throw new Error(`${objPropKey} is lesser than minimum value`);

            // Value determinator
        }
    }


    validate(obj) {
        const {rules, args} = obj;
        for(let objPropKey in rules) {
            for(let ruleValueKey of Object.keys(rules[objPropKey])){
                if(rules[objPropKey][ruleValueKey] === false || rules[objPropKey][ruleValueKey] === true) continue;
                let validateParams = { 
                    objProp: args[objPropKey],
                    objPropKey,
                    ruleValue: rules[objPropKey][ruleValueKey],
                    dataType: rules[objPropKey]['dataType']  
                    }
                this.validatorFunctions[ruleValueKey](validateParams);
            }
        }
        return true;
    }
}

export default new Validator()