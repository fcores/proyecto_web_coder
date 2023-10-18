//LOGUEAR AL USUARIO

const confirmarLogin = document.getElementById("login");
function login() {
    const email = document.getElementById("email")
    const pass = document.getElementById("pass")
    if(email.value!= "" && pass.value !="") { 
        Toastify({
            text: `Bienvenido a tu nueva PC`,
            duration: 3000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast()
        sessionStorage.setItem("usuario",JSON.stringify(email.value))
    }else{

        Toastify({
            text: `Ingresa los datos`,
            duration: 3000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast()
    }}

confirmarLogin.addEventListener("click",()=>{
    login()
}
)