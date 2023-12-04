const products = [
    {id: 1, name:'Arte negro', category:'Camiseta', precio: 25, stock: 10, img:'../public/assets/1.png', description:'Un producto confeccionado a mano.'},
    {id: 2, name:'Arte blanco', category:'Camiseta', precio: 25, stock: 10, img:'../public/assets/2.png', description:'Un producto confeccionado a mano.'},
    {id: 3, name:'Arte verde', category:'Camiseta', precio: 25, stock: 10, img:'../public/assets/3.png', description:'Un producto confeccionado a mano.'},
    {id: 4, name:'Camisas ocasionales', category:'Camisas', precio: 30, stock: 10, img:'../public/assets/4.png', description:'Camisas para una ocasión especial.'},
    {id: 5, name:'Camisas ocasionales', category:'Camisas', precio:30, stock: 10, img:'../public/assets/5.png', description:'Camisas para una ocasión especial.'},
    {id: 6, name:'Camisas ocasionales', category:'Camisas', precio: 30, stock: 10, img:'../public/assets/6.png', description:'Camisas para una ocasión especial.'},
    {id: 7, name:'Cuadros de tela', category:'Cuadros', precio: 85, stock: 8, img:'../public/assets/7.png', description:'Cuadros hechos con técnica artesanal.'},
    {id: 8, name:'Cuadros de tela', category:'Cuadros', precio: 85, stock: 8, img:'../public/assets/8.png', description:'Cuadros hechos con técnica artesanal.'},
    {id: 9, name:'Cuadros de tela', category:'Cuadros', precio: 85, stock: 8, img:'../public/assets/9.png', description:'Cuadros hechos con técnica artesanal.'},
    {id: 10, name:'Cuadros de tela', category:'Cuadros', precio: 85, stock: 8, img:'../public/assets/10.png', description:'Cuadros hechos con técnica artesanal.'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        if ( products.length > 0 ) {
            setTimeout(() => {
                resolve(products);
            }, 500)
        }
    })
}