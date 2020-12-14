const { deepStrictEqual, throws } = require('assert')

;
(async () => {
    const Heroes = require('./heroes')
    const heroes = new Heroes()
    
    heroes.add('Barry', 'Allen')
    heroes.add('Clark', 'Kent')
    
    //console.log(heroes)
    //console.log('heroes.toString()', heroes.toString())
    //console.log('heroes * 1)', heroes * 1)
    deepStrictEqual(heroes.toString(), '\nBarry Allen\nClark Kent')
    deepStrictEqual(String(heroes), '\nBarry Allen\nClark Kent')
    //throws(() => heroes * 1, { name: 'TypeError', message: "Invalid Conversion!"})

    const expectedItems = [
        { firstName:'Barry', lastName:'Allen' },
        { firstName:'Clark', lastName:'Kent' }
    ]

    //.iterator
    //console.log('heroes::', [...heroes])
    //console.log('heroes::', Array.from(heroes))

    deepStrictEqual(Array.from(heroes), expectedItems)
    deepStrictEqual([...heroes], expectedItems)

    {
        const items = []
        for(const item of heroes) { items.push(item) }
        deepStrictEqual(items, [...heroes])
    }
})()