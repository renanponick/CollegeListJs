var objetos = { id:[], texto:[], qtde:[] }

function mouse(){
    alert("Vamos cadastrar agora, preencha os campos!");
}
function bemVindo(){
    alert("Bem vindo ao cadastro de produtos.");
    var produto = prompt("O que iremos registrar hoje?");
    document.getElementById("produtoTitulo").textContent = produto;
    document.getElementById("produtoLista").textContent = produto;
    criaBotaoAdicionar();
}
function adicionarLinha(){
    var inputTexto = document.getElementById("texto");
    var inputQtde = document.getElementById("qtde");
    if(inputTexto.value == ""){
        alert("Preencha o nome");
    }else if(inputQtde.value == ""){
        alert("Preencha o qtde");
    }else{
        objetos.id.push(objetos.id.length+1);
        objetos.texto.push(inputTexto.value);
        objetos.qtde.push(inputQtde.value);

        update(objetos);
    
        document.getElementById("texto").value="";
        document.getElementById("qtde").value="";
    }
}
function update(objetos){

    document.getElementById("tbodyTabela").innerHTML = "";
    var tabela = document.getElementById("tbodyTabela");

     objetos.id.forEach(idSelect => {
        var linha = tabela.insertRow();

        var cel1 = linha.insertCell(0);
        var cel2 = linha.insertCell(1);
        var cel3 = linha.insertCell(2);
        var cel4 = linha.insertCell(3);

        cel1.innerText = idSelect;
        cel2.innerText = objetos.texto[idSelect-1]
        cel3.innerText = objetos.qtde[idSelect-1];

        var botaoAlterar = criaBotaoAlterar(idSelect-1)
        cel4.appendChild(botaoAlterar);
        
        var botaoExcluir = criaBotaoExcluir(idSelect-1)
        cel4.appendChild(botaoExcluir);

        linha.appendChild(cel1);
        linha.appendChild(cel2);
        linha.appendChild(cel3);
        linha.appendChild(cel4);
     });
     
}

function criaBotaoAdicionar(){
    var botao = document.createElement('button');
    botao.setAttribute("onclick","adicionarLinha()");
    botao.type = "button";
    botao.className = "col-12 btn btn-primary btn-sm";
    botao.textContent = "Adicionar";
    document.getElementById("botoes").appendChild(botao);
}

function criaBotaoSalvar(id){
    var botao = document.createElement('button');
    botao.setAttribute("onclick","alterarLinha("+id+")");
    botao.type = "button";
    botao.className = "col-12 btn btn-secondary btn-sm";
    botao.textContent = "Alterar";
    document.getElementById("botoes").appendChild(botao);
}

function criaBotaoAlterar(id){
    var botao = document.createElement('button');
    var icon = criarIcone("fa fa-pencil-square-o");
    botao.appendChild(icon);

    botao.setAttribute("onclick","selecionaParaAlterar("+(id)+")");
    botao.type = "button";
    botao.className = "col-5 btn btn-warning btn-sm mr-1";
    
    return botao;
}

function criaBotaoExcluir(id){
    var botao = document.createElement('button');
    var icon = criarIcone("fa fa-trash-o");
    botao.appendChild(icon);

    botao.setAttribute("onclick","excluirLinha("+(id)+")");
    botao.type = "button";
    botao.className = "col-5 btn btn-danger btn-sm ml-1";
    
    return botao;
}

function criarIcone(classe){
    var icon = document.createElement("i");
    icon.setAttribute("aria-hidden","true");
    icon.className = classe;
    return icon;
}

function selecionaParaAlterar(id){
    document.getElementById("botoes").innerHTML = "";
    criaBotaoSalvar(id);
    document.getElementById("texto").value = objetos.texto[id];
    document.getElementById("qtde").value = objetos.qtde[id];
}

function alterarLinha(id){
    objetos.texto[id] =  document.getElementById("texto").value;
    objetos.qtde[id] =  document.getElementById("qtde").value;
    
    document.getElementById("botoes").innerHTML = "";
    document.getElementById("texto").value = "";
    document.getElementById("qtde").value = "";

    update(objetos);
    criaBotaoAdicionar();
}

function excluirLinha(id){
    delete objetos.id[id];
    delete objetos.texto[id];
    delete objetos.qtde[id];
    update(objetos);
    alert("Produto Deletado");
}