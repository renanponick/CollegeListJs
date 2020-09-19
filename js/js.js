var objetos = { id:[], texto:[], qtde:[] }

function bemVindo(){
    alert("Bem vindo ao cadastro de produtos.");
    var produto = prompt("O que iremos registrar hoje?");
    document.getElementById("produtoTitulo").textContent = produto;
    document.getElementById("produtoLista").textContent = produto;
    botaoAdicionar();
}
function botaoAdicionar(){
    var botaoAdicionar = document.createElement('button');
    botaoAdicionar.setAttribute("onclick","adicionar()");
    botaoAdicionar.setAttribute("type","button");
    botaoAdicionar.textContent = "Adicionar";
    document.getElementById("botoes").appendChild(botaoAdicionar);
}
function mouse(){
    alert("Vamos cadastrar agora, preencha os campos!");
}

function adicionar(){
    event.preventDefault();

    // captura o que foi digitado nos inputs de tela
    var inputTexto = document.getElementById("texto");
    var inputQtde = document.getElementById("qtde");

    //valida se ele digitou o nome do produto
    if(inputTexto.value == ""){
        alert("Preencha o nome");
    }else if(inputQtde.value == ""){
        alert("Preencha o qtde");
    }else{
        //atribui os valores para o objeto que sal
        objetos.id.push(objetos.id.length+1);
        objetos.texto.push(inputTexto.value);
        objetos.qtde.push(inputQtde.value);

        update(objetos);
    
        document.getElementById("texto").value="";
        document.getElementById("qtde").value="";
    }
   
}

function update(objetos){
    document.getElementById("conteudo").innerHTML = "";
     objetos.id.forEach(idSelect => {
        //cria um td para tabela
        var linha = document.createElement("tr");

        // cria o td de id e coloca o valor na tabela
        var colunaId = document.createElement("td");
        colunaId.innerText = idSelect;

        // cria o td de texto e coloca o nome na tabela
        var colunaTexto = document.createElement("td");
        colunaTexto.innerText = objetos.texto[idSelect-1]

        // cria o td de qtde e coloca o valor na tabela
        var colunaQtde = document.createElement("td");
        colunaQtde.innerText = objetos.qtde[idSelect-1];

        // cria o td para ação de alterar e excluir
        var colunaAcao = document.createElement("td");
        // cria o a para linkar
        var linkAlterar = document.createElement('a');
        // passa o onclick para excluir
        linkAlterar.setAttribute("onclick","alterarProduto("+(idSelect-1)+")");
        linkAlterar.innerText = "a";
        linkAlterar.className = "alterar";
        //coloca o a dentro do td
        colunaAcao.appendChild(linkAlterar);

        // cria o a para linkar
        var linkExcluir = document.createElement('a');
        // passa o onclick para excluir
        linkExcluir.setAttribute("onclick","excluir("+(idSelect-1)+")");
        linkExcluir.innerText = "x";
        linkExcluir.className = "excluir";
        //coloca o a dentro do td
        colunaAcao.appendChild(linkExcluir);

        //adiciona os td's ao tr
        linha.appendChild(colunaId);
        linha.appendChild(colunaTexto);
        linha.appendChild(colunaQtde);
        linha.appendChild(colunaAcao);

        document.getElementById("conteudo").appendChild(linha);
     });
     
}

function alterarProduto(id){
    document.getElementById("botoes").innerHTML = "";

    var botaoAdicionar = document.createElement('button');
    botaoAdicionar.setAttribute("onclick","alterarObjeto("+id+")");
    botaoAdicionar.setAttribute("type","button");
    botaoAdicionar.textContent = "Alterar";

    document.getElementById("botoes").appendChild(botaoAdicionar);

    document.getElementById("texto").value = objetos.texto[id];
    document.getElementById("qtde").value = objetos.qtde[id];
}

function alterarObjeto(id){
    
    objetos.texto[id] =  document.getElementById("texto").value;
    objetos.qtde[id] =  document.getElementById("qtde").value;
    
    document.getElementById("botoes").innerHTML = "";
    document.getElementById("texto").value = "";
    document.getElementById("qtde").value = "";

    update(objetos);
    botaoAdicionar();
}

function excluir(id){
    delete objetos.id[id];
    delete objetos.texto[id];
    delete objetos.qtde[id];
    update(objetos);
    alert("Produto Deletado");
}