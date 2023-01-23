// 1-
let ensaladaDeFrutas = ["uva", "anana", "durazno", "frutilla", "manzana"];
console.log("Las frutas que hay en la ensalada son:")
for (let i = 0; i < ensaladaDeFrutas.length; i++) {
    console.log(ensaladaDeFrutas[i])
}
// 2-
let edades = [22, 24, 23, 26, 20];
let suma = 0;
for (let i = 0; i < edades.length; i++) {
    suma += edades[i]
}
suma = suma / edades.length;
console.log(suma)
// 3-
const gente = ["Ryan", "Kieran", "Mark", "Miguel"];
const amigo = []
for (let i = 0; i < gente.length; i++) {
    let numlet = gente[i]
    if (numlet.length === 4) {
        amigo.push(gente[i])
    }
}
console.log(amigo)

// 4-
let listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];
listaDeSuper.push("shampoo")
let index = listaDeSuper.indexOf("jabon");
listaDeSuper.splice(index, 1);
console.log(listaDeSuper.length)
console.log(listaDeSuper)
if (listaDeSuper.indexOf("shampoo") == -1) {
    console.log("No existe Shampoo");
}

// 5-
let saludo = () => {
    console.log("Bienvenido!")
}


// 6-
let calculoMayor = (num1, num2) => {
    if (num1 > num2) {
        alert(num1 + " Es mayor")
    } else if (num2 > num1) {
        alert(num2 + " Es mayor")
    } else {
        alert("Los numeros son iguales")
    }
}



// 7-
const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"]
const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"]
let filtrarAmigos = (arr) => {
    const amigo = []
    for (let i = 0; i < arr.length; i++) {
        let numlet = arr[i]
        if (numlet.length === 4) {
            amigo.push(arr[i])
        }
    }
    if (amigo.length > 0) {
        console.log("Tus amigos son" + amigo)
    } else {
        console.log("No tené amigos");
    }
}
filtrarAmigos(amigo1)
filtrarAmigos(amigo2)


// 8-
let tirarDado = () => {
    const dado = [1, 2, 3, 4, 5, 6];
    let x = Math.floor((Math.random() * 5));
    console.log(dado[x])
}


// 9-
let toDoList = {
    tipoDeTarea: "Compras",
    dia: "Lunes",
    productos: ["leche", "pan", "huevos"],
    cantidadDeProductos: 3,
    showTask: function() {
        alert("Esta tarea tiene una prioridad urgente!");
    }
};
// 10-
const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [{
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
        }
    ]
}

// Arrays avanzados
// 1-
const amigo = ["Ryan", "Kieran", "Mark", "Miguel"]
let esAmigo = amigo.filter((esONo => esONo.length == 4));
console.log(esAmigo)
// 2-
const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
let exclama = frases.map(function(frasexclama) {
    return frasexclama + "!";
});
console.log(exclama)