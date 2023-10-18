//CARGAR EL CATALOGO DESDE LA BASE JSON

let catalagoProductos = [] 
async function cargarCatalogo(tipoVenta){
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
        
        
    }catch (error) {
        console.error("Error al cargar el catálogo:", error);
    }
    return catalagoProductos
} 


//EXPONER EL CATALOGO EN EL DOM DE FOMRA DINAMICA
function mostrarCatalogo(array,tipos) {
    tipos.forEach((tipo)=>{
        let containerProductosGamer = document.getElementById("grilla");
        eliminarEtiquetasPorID()
        try{
            array.forEach((elemento) => {
                if(elemento.tipo == tipo){
                    if(tipo=="gamer"|| tipo=="escritorio"){
                        let containerProductosDiv = document.createElement("div")
                        containerProductosDiv.id = "PD"
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
                        containerProductosDiv.id = "PD"
                        containerProductosDiv.className = "col-12 col-md-6 col-lg-4 my-2"
                        containerProductosDiv.innerHTML += `
                        <div id="${elemento.id}" class="card text-bg-dark  border-5 border-black" style="width: 18rem;">
                                <div class="card-body border-0">
                                    <h4 class="card-title border-black">${elemento.componente}</h4>
                                    <p>${elemento.descripcion}</p>
                                </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span id="ingreso_${elemento.id}" class="input-group-text" >${elemento.id}</span>
                                <input id="input_${elemento.id}" type="text" class="form-control">
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
    catalago = cargarCatalogo();
});

//QUITAR ETIQUETAS DE OTRAS OPCIONES DE VENTA
function eliminarEtiquetasPorID() {
    let elementos = document.querySelectorAll('[id="PD"]');
    elementos.forEach(function(elemento) {
        elemento.remove();
    });
}


//CONFIRMAR LA COMPRA Y GRABARLA EN EL SESSION STORAGE
const confirmarComprabtn = document.getElementById("confirmarCompra")
async function confirmarCompra(){
    let totalCompra = 0
    let totalDOM = document.getElementById("totalCompra")
    const tipoPresupuesto = document.getElementById("tipoPresupuesto")
    if(tipoPresupuesto.value ==2){
        const tipoVenta = ["gamer",]
        eliminarEtiquetasPorID()
        await mostrarCatalogo(catalagoProductos,tipoVenta)
        listaId = []
        listaProductos = []
        catalagoProductos.forEach((elemento) =>{
            if(elemento.tipo ==tipoVenta[0]){
                totalCompra += elemento.precio
                listaId.push(elemento.id)
                listaProductos.push(elemento.descripcion)
            }
            
        })
        totalDOM.innerText=`El valor de la compra es: ${totalCompra}`
        sessionStorage.setItem("idProductosGamer",listaId)
        sessionStorage.setItem("DesProductosGamer",listaProductos)
    }else if(tipoPresupuesto.value ==1){
        const tipoVenta = ["escritorio",]
        eliminarEtiquetasPorID()
        await mostrarCatalogo(catalagoProductos,tipoVenta)
        listaId = []
        listaProductos = []
        catalagoProductos.forEach((elemento) =>{
            if(elemento.tipo ==tipoVenta[0]){
                totalCompra += elemento.precio
                listaId.push(elemento.id)
                listaProductos.push(elemento.descripcion)
            }
            
        })
        totalDOM.innerText=`El valor de la compra es: ${totalCompra}`
        sessionStorage.setItem("idProductosEscritorio",listaId)
        sessionStorage.setItem("DesProductosEscritorio",listaProductos)
    }else if(tipoPresupuesto.value ==3){
        const tipoVenta = ["a_medida",]
        eliminarEtiquetasPorID()
        await mostrarCatalogo(catalagoProductos,tipoVenta)
        catalagoProductos.forEach((elemento) =>{
            if(elemento.tipo ==tipoVenta[0]){
                totalCompra += elemento.precio
            }
            
        })
        totalDOM.innerText=`El valor promedio de una PC es de $250.000, \nindicanos cada uno de los elementos y te estaremos contactando`
    };
}
confirmarComprabtn.addEventListener("click",async ()=>{
    await confirmarCompra()
 })
 


//CAPTURAR LOS DATOS MANUALES INGRESADOS POR EL USUARIO PARA EL AREA DE COTIZACIONES 
const capturarDatosbtn = document.getElementById("tomarDatos")
function validarProductosManuales(array) {
    listaId = []
    listaProductos = [] 
    array.forEach((elemento) => {
        if(elemento.tipo == "a_medida"){
        // Obtener el input por su ID
         let idManual = document.getElementById(`ingreso_${elemento.id}`);
         console.log(idManual.innerText);
         listaId.push(idManual.innerText)
         // Obtener el input por su ID
         let idDescripciónManual = document.getElementById(`input_${elemento.id}`);
         console.log(idDescripciónManual.value);
         if(idDescripciónManual.value ==""){
            listaProductos.push("Sin Productos Informados")
         }else{
            listaProductos.push(idDescripciónManual.value)
         }
         
        }
         
     });
     sessionStorage.setItem("DesProductosManuales",JSON.stringify(listaProductos))
     sessionStorage.setItem("idProductosManuales",JSON.stringify(listaId))
     Swal.fire({
        title: 'Estas seguro?',
        text: "Tomaremos los productos para enviarte una cotización",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, seguro!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Perfecto!',
            'Por favor finaliza la cotización.'
          )
        }else{
            Swal.fire(
                'Volve a probar!',
                
            )
            sessionStorage.setItem("DesProductosManuales","")
            sessionStorage.setItem("idProductosManuales","")
        }
      })
}

capturarDatosbtn.addEventListener("click",()=>{
    validarProductosManuales(catalagoProductos)
})


//CERRAR LA COTIZACION Y GUARDAR EN EL LOCALSTORAGE
const finalizarComprabtn = document.getElementById("finalizarCompra")
function finalizarCompra(){
    const tipoPresupuesto = document.getElementById("tipoPresupuesto")
    if(tipoPresupuesto.value ==2){
        const tipoVenta = ["gamer",]
        eliminarEtiquetasPorID()
        mostrarCatalogo(catalagoProductos,tipoVenta)
        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Felicitaciones',
            text:'Nos estaremos contactando para coordinar',
            showConfirmButton: false,
            timer: 2500
        })
        const grabarDatosID = sessionStorage.getItem("idProductosGamer")
        const grabarDatosProductos = sessionStorage.getItem("DesProductosGamer")
        sessionStorage.clear()
        localStorage.setItem("idProductosGamer",grabarDatosID)
        localStorage.setItem("DesProductosGamer",grabarDatosProductos)
    }
        
    else if(tipoPresupuesto.value ==1){
        const tipoVenta = ["escritorio",]
        eliminarEtiquetasPorID()
        mostrarCatalogo(catalagoProductos,tipoVenta)
        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Felicitaciones',
            text:'Nos estaremos contactando para coordinar',
            showConfirmButton: false,
            timer: 2500
        })
        const grabarDatosID = sessionStorage.getItem("idProductosEscritorio")
        const grabarDatosProductos = sessionStorage.getItem("DesProductosEscritorio")
        sessionStorage.clear()
        localStorage.setItem("idProductosEscritorio",grabarDatosID)
        localStorage.setItem("DesProductosEscritorio",grabarDatosProductos)
    }
    else if(tipoPresupuesto.value ==3){
        const tipoVenta = ["a_medida",]
        eliminarEtiquetasPorID()
        mostrarCatalogo(catalagoProductos, tipoVenta)
        
        const grabarDatosID = sessionStorage.getItem("idProductosManuales")
        const grabarDatosProductos = sessionStorage.getItem("DesProductosManuales")
        sessionStorage.clear()
        localStorage.setItem("idProductosManuales",grabarDatosID)
        localStorage.setItem("DesProductosManuales",grabarDatosProductos)

        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Felicitaciones',
            text:'Nos estaremos contactando para coordinar',
            showConfirmButton: false,
            timer: 2500
        })
        
    };
}

finalizarComprabtn.addEventListener("click",()=>{
    finalizarCompra()
})
