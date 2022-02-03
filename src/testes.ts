type obj = {
  numero:number;
  nome?:string
}

const objPadrao = {
  numero: 10
}
const teste = {
  ...objPadrao,
  nome: 'teste'
}

function mensagem(objeto: obj = objPadrao){
  console.log(objeto);
}



mensagem(teste);
mensagem({ numero: 15, nome: 'teste2'});
mensagem({ numero: 18 });