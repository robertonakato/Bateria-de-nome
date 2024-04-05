document.body.addEventListener("keyup",(event)=>{
    //tolocallewoercase coloca o texto como minusculo
    tocarsom(event.code.toLocaleLowerCase())
})
document.querySelector(".botao").addEventListener("click", ()=>{
 let musica = document.querySelector("#input").value
 if (musica != ""){
    //split faz com que os elementos individuais se tonem arrays, ou seja cada letra será um array
    arraymusica = musica.split('');
    tocarmusica(arraymusica)
 }
})
function tocarsom(som){
let audio = document.querySelector(`#s_${som}`);
let keyelement = document.querySelector(`div[data-key="${som}"]`);
if (audio){
    //currentime zera o audio para voltar ao começo
audio.currentTime = 0
audio.play()
}
if (keyelement){
    keyelement.classList.add("active")
    setTimeout(() => {
        keyelement.classList.remove("active");
    }, 300);}
}
function tocarmusica(arraymusica){
    let pausa =0;
    for ( let musicaitem of arraymusica){
        setTimeout(() => {
        tocarsom(`key${musicaitem}`);
        }, pausa);
        pausa += 150       
    }
}