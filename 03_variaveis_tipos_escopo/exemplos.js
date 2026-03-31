var idade = 34; //Exemplo de var, fora da função (escopo global)
function exemplos() {
    let saldo = 200; //Exemplo de let, dentro da função (escopo de função)
    while (saldo > 100 && idade < 70){
        const taxa = 10; //Exemplo de const, dentro do while (escopo de bloco)
        saldo-=taxa;
    }
    console.log(saldo);
    console.log(taxa); //A taxa não será printada, pois está fora do bloco e o código não consegue puxar uma variável de dentro de um bloco.
}

{
const senha = 1981;

console.log(senha);
}
console.log(senha); //A senha não aparecerá, pois ela pertence ao bloco