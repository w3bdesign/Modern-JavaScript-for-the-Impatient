// node raw-templates.js

'use strict'
console.log('// In a raw string, backslashes are not escape characters')
let path = String.raw`c:\users\nate`
path === 'c:\\users\\nate'
console.log('// A tagged template function for including greek letters')
const greek = (fragments, ...values) => {
  const substitutions = { alpha: 'α',     beta: 'β',
    gamma: 'γ',
    delta : 'δ',
    epsilon : 'ε',
    zeta : 'ζ',
    eta : 'η',
    theta : 'θ',
    iota : 'ι',
    kappa : 'κ',
    lambda : 'λ',
    mu : 'μ',
    nu: 'ν',      xi : 'ξ',
    omicron : 'ο',
    pi : 'π',
    rho : 'ρ',
    sigma : 'σ',
    tau : 'τ',
    upsilon : 'υ',
    phi : 'φ',
    chi : 'χ',
    psi : 'ψ',
    omega : 'ω'
 }
  const substitute = str => str.replace(/\\[a-z]+/g,
    match => substitutions[match.slice(1)])

  let result = substitute(fragments.raw[0])
  for (let i = 0; i < values.length; i++)
    result += values[i] + substitute(fragments.raw[i + 1])
  return result
}

console.log('// Using the tagged template function')
let factor = 2
let message = greek`\nu=${factor}\upsilon`
console.log('message:', message) // ν=2υ
