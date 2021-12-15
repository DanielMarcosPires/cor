/*${e} ${r} */

var e = document.getElementById('e') 
var r = document.getElementById('r')
e.addEventListener('click',interruptor)
r.addEventListener('click',interruptor2)  
/**
 * na ${3} o código document.getElementById(id)
 * está pegando o id do botão com id='e' e id='r'
 * quando faço isso.
 * permite que eu distribua o button para outras linguagens de programação como css e JavaScript
 */



function interruptor(){
   e.style.background = 'orange'
   r.style.background = null
   var fundo = window.document.body
   fundo.style.background = 'black'

}
function interruptor2(){
   r.style.background = 'orange'
   e.style.background = null
   var fundo = window.document.body
   fundo.style.background = null
}