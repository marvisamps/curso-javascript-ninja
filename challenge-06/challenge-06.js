/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var champioship = 'paulistao';
console.log(champioship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Palmeiras','Corinthians','São Paulo','Santos','Portuguesa']

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(num){
  while(num <= 4){
    return 'O time que está em ' + (num+1) + 'º lugar é o ' + teams[num] + '.';
  }
  return 'Não temos a informação do time que está nessa posição.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(5)
//"Não temos a informação do time que está nessa posição."
showTeamPosition(4)
//"O time que está em 5º lugar é o Portuguesa."
showTeamPosition(3)
//"O time que está em 4º lugar é o Santos."
showTeamPosition(1)
//"O time que está em 2º lugar é o Corinthians."
showTeamPosition(0)
//"O time que está em 1º lugar é o Palmeiras."

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20;
while(counter <= 30){
  console.log(counter);
  counter++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor){
  switch(cor) {
    case 'red':
      return 'O hexadecimal para a cor ' + cor + ' é #010101.'; 
    case 'blue':
      return 'O hexadecimal para a cor ' + cor + ' é #111111.'; 
    case 'green':
      return 'O hexadecimal para a cor ' + cor + ' é #020202.'; 
    case 'black':
      return 'O hexadecimal para a cor ' + cor + ' é #000000.'; 
    case 'white':
      return 'O hexadecimal para a cor ' + cor + ' é #FFFFFF.'; 
    default:
      return 'Não temos o equivalente hexadecimal para ' + cor + '.';
  }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('white');
//"O hexadecimal para a cor white é #FFFFFF."
convertToHex('red');
//"O hexadecimal para a cor red é #010101."
convertToHex('green');
//"O hexadecimal para a cor green é #020202."
convertToHex('blue');
//"O hexadecimal para a cor blue é #111111."
convertToHex('orange');
//"Não temos o equivalente hexadecimal para orange."
convertToHex('purple');
//"Não temos o equivalente hexadecimal para purple."
convertToHex('black');
//"O hexadecimal para a cor black é #000000."
convertToHex('yellow');
//"Não temos o equivalente hexadecimal para yellow."
