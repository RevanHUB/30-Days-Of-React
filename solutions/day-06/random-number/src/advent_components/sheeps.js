const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
//   console.log(ovejas)
  
//   export default function contarOvejas(ovejas) {
//     ovejas.find((ovejita) => ovejita.color === 'rojo').find((filtered) => filtered.name.includes("n") & filtered.name.includes("a"))
//     return ovejas
//   }
  console.log(ovejas.map((ovejita) => (ovejita.color === 'rojo')? ovejita.name : null).find((name) => name.includes("n")))

