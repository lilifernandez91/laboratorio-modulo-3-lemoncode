interface Grupos {
    nombreDelGrupo: string
    añoDeFundacion: number
    activo: boolean
    generoMusical: string
}

let generoA = ' 🎵 Pop Rock'
let generoB = ' 🎸 Rock'
let generoC = ' 🤘 Hard Rock'
let generoD = ' 🎼 Clásica'
let generoE = ' 🎸 Rock'

let styleNombreDelGrupo = 'font-weight: bold; font-size:16px; background-color: green'

const grupoA: Grupos = {
    nombreDelGrupo: 'The Beatles',
    añoDeFundacion: 1960,
    activo: true,
    generoMusical: generoA
}

const grupoB: Grupos = {
    nombreDelGrupo: 'Queen',
    añoDeFundacion: 1970,
    activo: false,
    generoMusical: generoB
}

const grupoC: Grupos = {
    nombreDelGrupo: 'AC DC',
    añoDeFundacion: 1970,
    activo: true,
    generoMusical: generoC
}

const grupoD: Grupos = {
    nombreDelGrupo: 'Ludwing Van Beethoven',
    añoDeFundacion: 1770,
    activo: false,
    generoMusical: generoD
}

const grupoE: Grupos = {
    nombreDelGrupo: 'The Rolling Stone',
    añoDeFundacion: 1962,
    activo: true,
    generoMusical: generoE
}

console.log('%c' + grupoA.nombreDelGrupo, styleNombreDelGrupo, grupoA)
console.log('%c' + grupoB.nombreDelGrupo, styleNombreDelGrupo, grupoB)
console.log('%c' + grupoC.nombreDelGrupo, styleNombreDelGrupo, grupoC)
console.log('%c' + grupoD.nombreDelGrupo, styleNombreDelGrupo, grupoD)
console.log('%c' + grupoE.nombreDelGrupo, styleNombreDelGrupo, grupoE)




