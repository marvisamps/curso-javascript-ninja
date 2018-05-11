(function(){
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  var person = {name: 'Mário', lastname: 'Filho', age: 27};
  console.log( 'Propriedades de "person":' );

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log([person.name, person.lastname, person.age]);

  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  var addBook1 = {name: 'O Senhor dos Anéis', pages: 500};
  var addBook2 = {name: 'Harry Potter e a Ordem da Fênix', pages: 713};
  var addBook3 = {name: 'Os Três Porquinhos', pages: 110};
  
  books.push(addBook1,addBook2,addBook3)
  console.log( '\nLista de livros:' );

  /*
  Mostre no console todos os livros.
  */
  console.log(books);

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  books.pop(2);

  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  console.log(books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  // ?
  console.log( '\nLivros em formato string:' );

  /*
  Mostre os livros nesse formato no console:
  */
  // ?

  /*
  Converta os livros novamente para objeto.
  */
  // ?
  console.log( '\nAgora os livros são objetos novamente:' );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  // ?

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['M','á','r','i','o']
  console.log( '\nMeu nome é:' );

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  for(var counter = 0; counter <= myName.length; counter++){
    console.log(myName[counter]);
  }

  console.log( '\nMeu nome invertido é:' );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  for(var counter = myName.length; counter === 0; counter--){
    console.log(myName[counter]);
  }

  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  // ?
});
