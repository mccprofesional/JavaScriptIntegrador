function TotalAPagar (cantTickets,Categoria){
    const ValorTicket = 200
    let Total = cantTickets * ValorTicket
    switch (Categoria){
        case "Estudiante":
            Total=Total-(Total*80/100)
            break
        case "Trainee":
            Total=Total-(Total*50/100)
            break
        case "Junior":
            Total=Total-(Total*15/100)
            break
    }
    return Total
}



let arreglo=document.getElementById("JS")
arreglo.addEventListener("submit", (e)=>{e.preventDefault})
let boton = document.getElementById("boton")



boton.addEventListener("click",()=>{
    let cantidad = document.getElementById("cantidad").value
    let categoria= document.getElementById("categoria").value
    let valor= TotalAPagar(cantidad,categoria)
    let divMensaje=document.getElementById("liveAlertPlaceholder")

    divMensaje.style.color="blue" ;
    divMensaje.style.backgroundColor="rgb(195, 229, 255)" ;
    divMensaje.style.padding= "10px";
    divMensaje.style.margin= "20px 0" ;
    divMensaje.style.border= "2px solid #ccc" ;
    divMensaje.style.borderRadius= "6px";

    divMensaje.textContent="Total a pagar: $ " +valor

}
)