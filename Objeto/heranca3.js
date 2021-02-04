const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', enumerable: true, writable: false}
})

console.log(filha2.nome)
filha2.nome= 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// validar uma situacao em que nao se deseja herdar atributos

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? // hasOwnProperty > se o atributo é deste objeto
        console.log(key): console.log(`Por herança: ${key}`)
}