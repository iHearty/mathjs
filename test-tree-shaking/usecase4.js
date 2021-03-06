// Use case 4
// use all functions in the expression parser with config

import { create, all } from '..'

const config = { number: 'BigNumber' }
const { evaluate } = create(all, config)

console.log('\nuse case 4')
console.log(evaluate('sin(pi / 2) / 3').toString())
// BigNumber 0.3333333333333333333333333333333333333333333333333333333333333333
