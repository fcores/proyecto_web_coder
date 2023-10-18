//CARGAR LOS DATOS DESDE EL JSON

let catalagoProductos = []
let tipoVenta = ["escritorio"]
async function cargarCatalogo(){
    try {
        const resp = await fetch("../productos.json")
        const claseProductos = await resp.json()
        for (let clase of claseProductos) {  
            for (let producto of clase.detalle) {
                let nuevoProducto = new Producto(clase.tipo,producto.id, producto.componente, producto.descripcion, producto.precio, producto.imagen);
                catalagoProductos.push(nuevoProducto);
            }
        }
        localStorage.setItem("catalogo",JSON.stringify(catalagoProductos))
        mostrarCatalogo(catalagoProductos,tipoVenta)
        
    }catch (error) {
        console.error("Error al cargar el catálogo:", error);
    }
    
    
}  

//EXPONER EN EL DOM
function mostrarCatalogo(array,tipos) {
    tipos.forEach((tipo)=>{
        console.log(tipo);
        let containerProductosGamer
        containerProductosGamer = document.getElementById(tipo);
        try{
            array.forEach((elemento) => {
                if(elemento.tipo == tipo){
                    if(tipo=="gamer"|| tipo=="escritorio" || tipo=="gamerCompra" || tipo=="escritorioCompra"){
                        let containerProductosDiv = document.createElement("div")
                        containerProductosDiv.className = "col-12 col-md-6 col-lg-4 my-2"
                        containerProductosDiv.innerHTML += `
                        <div id="${elemento.id}" class="card text-bg-dark  border-5 border-black" style="width: 18rem;">
                                <img class="card-img-top img-fluid border-black" style="height: 200px;" src="../assets/${elemento.imagen}" alt="${elemento.descripcion}">
                                <div class="card-body border-0">
                                    <h4 class="card-title border-black">${elemento.componente}</h4>
                                    <p>${elemento.descripcion}</p>
                                    <p class="precio">Precio: ${elemento.precio}</p>
                                </div>
                        </div>`;
                        containerProductosGamer.append(containerProductosDiv) 
                    }else{
                        let containerProductosDiv = document.createElement("div")
                        containerProductosDiv.className = "col-12 col-md-6 col-lg-4 my-2"
                        containerProductosDiv.innerHTML += `<div>\n\n</div>
                        <div id="${elemento.id}" class="card text-bg-dark  border-5 border-black" style="width: 18rem;">
                                <div class="card-body border-0">
                                    <h4 class="card-title border-black">${elemento.componente}</h4>
                                    <p>${elemento.descripcion}</p>
                                </div>
                        </div>`;
                        containerProductosGamer.append(containerProductosDiv)
                    }
                }
            })

        }catch (error){
        }
    })
    
}

//EJECUCIONES
document.addEventListener("DOMContentLoaded", function() {
    cargarCatalogo();
});