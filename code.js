let tarefasAlta = [];
let tarefasMedia = [];
let tarefasBaixa = [];
let tarefasDefault = [];

function adicionarTarefa() {
    let descricao = document.getElementById("descricao").value;
    let prioridade = document.getElementById("prioridade").value;

    if (descricao === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let tarefa = {
        descricao: descricao,
        concluida: false
    };

    if (prioridade === "alta") {
        tarefasAlta.push(tarefa);
    } else if (prioridade === "media") {
        tarefasMedia.push(tarefa);
    } else if (prioridade === "baixa") {
        tarefasBaixa.push(tarefa);
    } else {
        tarefasDefault.push(tarefa);
    }

    document.getElementById("descricao").value = "";
    atualizarTela();
}

function atualizarTela() {
    renderizarLista("listaAlta", tarefasAlta, "alta");
    renderizarLista("listaMedia", tarefasMedia, "media");
    renderizarLista("listaBaixa", tarefasBaixa, "baixa");
    renderizarLista("listaDefault", tarefasDefault, "default");
}

function renderizarLista(id, vetor, classe) {
    let lista = document.getElementById(id);
    lista.innerHTML = "";

    vetor.forEach((tarefa, index) => {
        let div = document.createElement("div");
        div.classList.add("postit", classe);

        if (tarefa.concluida) {
            div.classList.add("concluida");
        }

        div.innerText = tarefa.descricao;

        div.onclick = () => {
            vetor[index].concluida = !vetor[index].concluida;
            atualizarTela();
        };

        lista.appendChild(div);
    });
}