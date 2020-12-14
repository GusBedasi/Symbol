const kItems = Symbol('kItems')
const kFormatName = Symbol('kFormatName')

class Heroes {
    constructor() {
        this[kItems] = []
    }

    add(firstName, lastName) {
        this[kItems].push({ firstName, lastName })
    }
    [kFormatName](firstName, lastName) {
        return `${firstName} ${lastName}`
    }
    toString() {
        const result = this[kItems]
                        .map(item => this[kFormatName](item.firstName, item.lastName))
                        .join('\n')
        
        return '\n'.concat(result)
    }

    // Chamado no String(obj), obj + ''
    [Symbol.toPrimitive](coercionType) {
        if(coercionType !== 'string') throw new TypeError('Invalid Conversion!')

        return this.toString()
    }

    // Chamado no rest [...obj], Array.from(obj), for(const item of obj) {}
    * [Symbol.iterator]() {
        for(const item of this[kItems]) {
            yield item 
        }
    }
}

module.exports = Heroes