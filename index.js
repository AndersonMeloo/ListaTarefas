let listaDeItens = [];
let itemAEditar;

const form = document.getElementById('form-itens');
const itensInput = document.getElementById('receber-item');
const ulItens = document.getElementById('lista-de-itens');
const ulItensTarefas = document.getElementById('itens-tarefas');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    salvarItem();
    itensInput.focus();
    mostrarItem();
});

function salvarItem() {
    const tarefasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some((elemento) =>
        elemento.valor.toUpperCase() === tarefasItem.toUpperCase());

    if (checarDuplicado) {
        alert('item já existe');
    } else {
        listaDeItens.push({
            valor: tarefasItem,
            checar: false
        });
    };

    itensInput.value = '';
};

function mostrarItem() {
    ulItens.innerHTML = '';
    ulItensTarefas.innerHTML = '';

    listaDeItens.forEach((elemento, index) => {

        if (elemento.checar) {
            ulItensTarefas.innerHTML += `
        <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
           <div>
            <input type="checkbox" checked class="is-clickable" />  
            <span class="itens-tarefas is-size-5">${elemento.valor}</span>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
    `

        } else {
            ulItens.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" class="is-clickable" />
                    <input type="text" class="is-size-5" value="${elemento.valor}" ${index !== Number(itemAEditar) ? 'disabled' : ''}></input>
                </div>
        
                <div>
                    ${index === Number(itemAEditar) ? '<button onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button>' : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'}
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
        </li>
            `
        };
    });

    const inputsCheck = document.querySelectorAll('input[type="checkbox');

    inputsCheck.forEach(i => {
        i.addEventListener('click', (e) => {
            const valorDoElemento = e.target.parentElement.parentElement.getAttribute('data-value');
            listaDeItens[valorDoElemento].checar = e.target.checked;
            mostrarItem();
        });
    });

    const deletarObjetos = document.querySelectorAll('.deletar');

    deletarObjetos.forEach(i => {
        i.addEventListener('click', (e) => {
            const valorDoElemento = e.target.parentElement.parentElement.getAttribute('data-value');
            listaDeItens.splice(valorDoElemento, 1);
            mostrarItem();
        });
    });

    const editarItens = document.querySelectorAll('.editar');

    editarItens.forEach(i => {
        i.addEventListener('click', (event) => {
            itemAEditar = event.target.parentElement.parentElement.getAttribute('data-value');
            mostrarItem();
        });
    });

    atualizaLocalStorage();
};

function atualizaLocalStorage() {
    localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens));
};

function salvarEdicao() {
    const itemEditado = document.querySelector(`[data-value="${itemAEditar}"] input[type="text"]`);
    listaDeItens[itemAEditar].valor = itemEditado.value;
    itemAEditar = -1;
    mostrarItem();
}
