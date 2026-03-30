-o que é JavaScript;
JavaScript é a linguagem utilizada para criar códigos dentro do HTML e CSS.

-para que JavaScript serve em páginas web;
O Javascript serve para dar funcionalidade a certos elementos da página (Ex: Com o clique de um botão, aparece uma imagem.)

-como JavaScript se relaciona com HTML e CSS;
Se relaciona de tal forme que, para fazer um site decente, é necessário ter os 3 sendo usados, pois o HTML faz a estrutura, o CSS decora, e o Javascript faz a parte lógica.

-onde JavaScript pode ser usado no HTML;
Como dito anteriormente, pode ser usado para dar funcionalidade a um botão

-diferença entre script dentro do HTML e script em arquivo separado;
Quando colocado dentro do html, deve ser utilizada a chave (<script></script>) para funcionar.
Quando colocado fora do arquivo html (em outra página), você deve criar um arquivo .js, e linkar pelo html com (<script src="nome_do_arquivo.js"></script>)

-como declarar variáveis;
Se declara variáveis com o tipo dela primeiro, e logo em seguida colocar o nome da sua variável (ex: const idade_Fixa = 10; let Saldo = 200;)

-diferença entre var, let e const;
Var: Serve para definir valores numéricos e palavras globais(ex: empresa = 'apple')
Let: Serve para definir valores numéricos que podem ser alterados depois (Ex: let saldo = 300;)
Const: A variável const serve para definir valores numéricos e palavras que não podem ser alterados depois(ex: const time = "Flamengo"; const pi = 3,14159265;).

-o que é escopo de variável;
Define a acessibilidade e visibilidade da variável em diferentes partes do código, por exemplo, quando o valor de uma variável let é alterada dentro de um (if), o valor da variável ficará alterado somente dentro da chave, quando a chave acaba, ele volta para o valor original. 
(Ex: let nome = 'Rogerio';
if (nome === 'Rogerio') {
    let nome = 'Joao Batista';
    console.log('Nome: ' + nome); // aparece Joao Batista
}
console.log('Nome: ' + nome); // aparece Rogerio
)

-diferença entre == e ===;
== compara se os valores tem uma igualdade solta. Por exemplo (5 == '5') retorna true
=== compara se os valores tem uma igualdade estrita. Por exemplo (5 === '5') retorna false, pois um seria considerado number, e o outro seria considerado string

-diferença entre != e !==;
!= compara se os valores tem uma diferença solta. Por exemplo (5 != '5') retorna false
!== compara se os valores tem uma diferença estrita. Por exemplo (5 !== '5') retorna true, pois um seria considerado number, e o outro seria considerado string

-como declarar funções;
utilizando o comando 
function nomedafuncao() {

}

-como fazer operações aritméticas e lógicas básicas;
Operações Aritméticas: utilizando as operações padrão da matemática, sendo elas: Adição(+), Subtração(-), Multiplicação(*), Divisão(/), Módulo ou Resto(%), Exponenciação(**), Incremento(++)(Aumenta o valor em 1), e Decremento(--)(Diminui o valor em 1)
Lógicas Básicas: utilizamos operadores lógicos e comparação, Estruturas Condicionais, e Laços de Repetição.
>Operadores lógicos e comparação: Igualdade = verifica se os valores são iguais (==), Igualdade estrita = verifica se os valores são iguais E os tipos são iguais (===), E Lógico = Retorna true se ambas das condições forem verdadeiras (&&), OU Lógico = Retorna true se pelo menos uma condição for verdadeira (||), NÃO Lógica = Inverte o valor booleano (!)
>Estruturas Condicionais: permite que o código tome decisões
>Laços de Repetição

-como usar estruturas condicionais;
Usadas no programas para a tomada de decisãocom base em diferentes condições

-como usar estruturas de repetição;
automatizam tarefas até que condições sejam atendidas, e podem ser iplementadas por meio de estruturas como:(while, for...)

-como JavaScript pode interagir com elementos da página;
Ele condiciona os elementos pode meio de ids, que moldam os elementos neles descritos














Introdução
O que é JavaScript.
Para que ele serve.
Como ele complementa HTML e CSS.

Formas de uso no HTML
JavaScript escrito dentro da própria página HTML.
JavaScript em arquivo separado (script.js).
Exemplo prático das duas formas.

Variáveis, tipos e escopo
O manual deve explicar:
o que é uma variável;
como declarar variável em JavaScript;
diferença entre var, let e const;
quando cada uma pode ser usada;
o que é escopo global;
o que é escopo de função;
o que é escopo de bloco.

Exemplos obrigatórios:
um exemplo com var;
um exemplo com let;
um exemplo com const;
um exemplo mostrando uma variável acessível fora de um bloco;
um exemplo mostrando uma variável que não pode ser acessada fora do bloco;
um exemplo simples explicando, com comentário, o que acontece quando se tenta usar a variável fora do escopo.
Operadores, comparações e lógica
O manual deve explicar:
operadores aritméticos principais;
operadores relacionais principais;
operadores lógicos principais;
diferença entre == e ===;
diferença entre != e !==.

Exemplos obrigatórios:
comparação entre 5 == "5";
comparação entre 5 === "5";
comparação entre 5 != "5";
comparação entre 5 !== "5";
um exemplo em que o discente explique, com suas palavras, por que === é mais seguro em muitos casos.

Estruturas condicionais
if;
if...else;
switch.

Exemplos obrigatórios:
um exemplo simples com if;
um exemplo com if...else;
um exemplo com switch.
Estruturas de repetição
for;
while.

Exemplos obrigatórios:
um exemplo com for;
um exemplo com while.

Funções
O manual deve explicar:
o que é uma função;
como declarar uma função;
como chamar uma função;
função com parâmetro;
função com retorno.

Exemplos obrigatórios:
uma função sem parâmetro;
uma função com parâmetro;
uma função que retorna valor.

Manipulação de página com JavaScript

Obrigatório:
document;
getElementById();
querySelector();
.value;
.checked;
.textContent;
.style;
classList;
addEventListener().

Recomendado:
querySelectorAll();
checkValidity();
DOMContentLoaded.

Diferencial:
createElement();
appendChild();
remove().

Para cada item de manipulação de página, o discente deve:
explicar com suas palavras para que serve;
criar um exemplo simples funcionando;
mostrar o resultado com print;
indicar em qual pasta está salvo o exemplo.