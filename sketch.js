var listaDeCompra = {
            frutas: [],
            laticinios: [],
            congelados: [],
            doces:[]     
        }

let decisao = "sim"; //condição pra entrar no Loop

decisao = prompt("Você deseja adicionar uma comida na sua lista de compras?");

while(decisao.toLowerCase() != "nao" && decisao.toLowerCase() != 'não'){ // vai permancer no loop até uma das condições serem falsas, por isso o E e não o OU
  
    let lista = prompt("Qual item deseja adicionar a lista de compra?"); //adiciona o elemento na lista
    let categoria = prompt("Qual dessas categoria deseja adicionar o item: Frutas, laticínios, congelados, doces, Limpeza?") // adiciona o item a categoria correta
    if(categoria.toLowerCase() == "frutas"){
        listaDeCompra.frutas.push(lista);
    }else if(categoria.toLowerCase() == "laticínios"){
        listaDeCompra.laticínios.push(lista);
    }else if(categoria.toLowerCase() == "congelados"){
        listaDeCompra.congelados.push(lista);
    }else if(categoria.toLowerCase() == "doces"){
        listaDeCompra.doces.push(lista);
    }else{
      alert("opção invalida");
    }
    decisao = prompt("Você deseja adicionar uma comida na sua lista de compras?"); // a pergunta no final para continuar ou sair do loop
}

alert(`Lista de compras:\n  Frutas: ${listaDeCompra.frutas}\n  Laticínios: ${listaDeCompra.laticinios}\n  Doces: ${listaDeCompra.doces}\n  Congelados: ${listaDeCompra.congelados}`);

