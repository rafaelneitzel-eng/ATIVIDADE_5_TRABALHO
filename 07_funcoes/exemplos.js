function semParametro(){
    var valor = 20;
    console.log(valor);
}
console.log(valor); //O valor não será printado


function comParametro(valor, mensagem = "Você deve"){
    return '${mensagem}, ${valor}';
}
console.log(comParametro("30"));              //Saída: Você deve 30
console.log(comParametro("10", "Você tem"));  //Saída: Você tem 10


function retornaValor(val1, val2){
    return val1 % val2;
}
let result = retornarValor(10, 3);
console.log(result);