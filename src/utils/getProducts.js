const products = [
    {
        id: 1,
        title: "Mochila Fjallraven",
        price: 8000,
        description: "Mochila cómoda y moderna, permite transportar tu laptop de 15 pulgadas",
        category: "accesorios",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        stock: 10
    },

    {
        id: 2,
        title: "Remera slimFit New York",
        price: 4000,
        description: "Estilo slim, 3 botones, cuello tipo V, super cómoda",
        category: "hombre",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        stock: 50
    },

    {
        id: 3,
        title: "Campera Joel",
        price: 15000,
        description: "Campera de algodón moderna,para utilizar en múltiples situaciones",
        category: "hombre",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        stock: 70
    },

    {
        id: 4,
        title: "Remera 2do Francia",
        price: 4000,
        description: "Estilo slim, mangas largas.Color azúl",
        category: "hombre",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        stock: 35
    },


    {
        id: 5,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 5000,
        description: "transporta tu información con vos a todo lugar;soporta USB 3.0 and USB 2.0; Compatible con Windows 10, Windows 8.1, Windows 7; ",
        category: "accesorios",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        stock: 10
    },

    {
        id: 6,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 4000,
        description: "Vuelve más rápida tu pc, prende y apaga en segundos. Velocidad de escritura 535MB/s",
        category: "electrónica",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        stock: 50
    },

    {
        id: 7,
        title: "Silicon Power 256GB SSD 3D NAND A55 2.5",
        price: 4000,
        description: "SLC Cache Performance Boost SATA III.",
        category: "electrónica",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        stock: 20
    },
    {
        id: 8,
        title: "Disco rigido externo WD 4 Tb",
        price: 6000,
        description: "Para mejorar tu experiencia jugando PS4 , podes cargar tus juegos de forma externa",
        category: "electrónica",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        stock: 5
    },
]

//simulo que lo traigo del back con una promesa
const getList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
}

export default getList;