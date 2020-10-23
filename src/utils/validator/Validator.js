class Validator {
    constructor() {
        this.validatorFunctions = {
            dataType: this.dataTypeCheck,
            isRequired: this.isRequiredCheck,
            // minValue: this.minCheck,
            // maxValue: this.maxCheck
            minValue: this.checkMinMax,
            maxValue: this.checkMinMax
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

    // valueDeterminator = (objProp, dataType, objPropKey) => {
    //     dataType = dataType==='array'||dataType==='string' ? dataType='else' : dataType
    //     const map = {
    //         'else': objProp && objProp.length,
    //         'number': objProp
    //     }
    //     if(map[dataType]) return map[dataType];
    //     else throw new Error(`${objPropKey} cannot have minimum or maximum value`);
    //     // if(dataType ==='string') return objProp.length;
    //     // if(dataType === 'array') return objProp.length;
    //     // if(dataType === 'number') return objProp;
    //     // throw new Error(`Current ${objPropKey} cannot have minimum or maximum value`);
    // }

    // minCheck = (validateParams) => {
    //     const {objProp, dataType, ruleValue, objPropKey} = validateParams;
    //     let tmp = this.valueDeterminator(objProp, dataType)
    //     if(tmp >= ruleValue) return true;
    //     throw new Error(`${objPropKey} is lesser than minimum value`);
    // }

    // maxCheck=(validateParams)=>{
    //     const {objProp, dataType, objPropKey, ruleValue} = validateParams;
    //     if(this.valueDeterminator(objProp, dataType, objPropKey)<=ruleValue) return true;
    //     throw new Error(`${objPropKey} is bigger than maximum value`);
    // }

    checkMinMax = ({objProp, dataType, ruleValue, objPropKey, ruleValueKey}) => {
        let valueDeterminator = (objProp, dataType, objPropKey) => {
            //const condition = ['array', 'string'].includes(dataType) ? objProp.length : objProp
            dataType = dataType==='array'||dataType==='string' ? dataType='else' : dataType
            const map = {
                'else': objProp && objProp.length,
                'number': objProp
            }
            if(map[dataType]) return map[dataType];
            throw new Error(`${objPropKey} cannot have minimum or maximum value`);
        }
        console.log(ruleValueKey)
        let op = ruleValueKey === 'minValue' ? (valueDeterminator(objProp, dataType) >= ruleValue) : (valueDeterminator(objProp, dataType) <= ruleValue)
        if(op) return true;
        else throw new Error(`${objPropKey} is smaller/bigger than minimum/maximum value`);
    }


    validate(obj) {
        const {rules, args} = obj;
        for(let objPropKey in rules) {
            for(let ruleValueKey of Object.keys(rules[objPropKey])){
                if(rules[objPropKey][ruleValueKey] === false) continue;
                let validateParams = { 
                    objProp: args[objPropKey],
                    objPropKey,
                    ruleValue: rules[objPropKey][ruleValueKey],
                    dataType: rules[objPropKey]['dataType'],
                    ruleValueKey  
                    }
                this.validatorFunctions[ruleValueKey](validateParams);
            }
        }
        return true;
    }
}

export default new Validator()