let titulo = document.getElementById("titulos");

titulo.textContent = "HOLAR";

let foto = document.getElementById("foto")

foto.src="https://image.api.playstation.com/vulcan/ap/rnd/202010/1512/8ThoZrE519SBuOMpYKFunYS0.png"

titulo.classList.add("letra")

let boton = document.getElementById("boton")

boton.addEventListener("click",function(){
    console.log("Hice click")
})

// boton.addEventListener("click",click)

// eventClick = () => {

// }