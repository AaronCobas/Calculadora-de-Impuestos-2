function calculadoraIva(numero1){
    return(numero1 * 1.21)
}
function calculadoraICL(numero2){
    return(numero2 * 1.75)
}
const formIVA = document.getElementById("formIVA")
const ivaInput = document.getElementById("ivaInput")
const divIVA = document.getElementById("divIVA")
const formICL = document.getElementById("formICL")
const iclInput = document.getElementById("iclInput")
const divICL = document.getElementById("divICL")
formIVA.addEventListener("submit", (iva1) => {
    iva1.preventDefault()
let numeroCalcular = parseFloat(ivaInput.value)
divIVA.innerHTML += `
<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${calculadoraIva(numeroCalcular)}</h5>
</div>
</div>
`
formIVA.reset() 
})
formICL.addEventListener("submit", (e1) => {
    e1.preventDefault()
let numeroCalcularicl = parseFloat(iclInput.value)
divICL.innerHTML += `
<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${calculadoraICL(numeroCalcularicl)}</h5>
</div>
</div>
`
formICL.reset() 
})
