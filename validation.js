const button = document.getElementById('btn01');
button.addEventListener('click', changemodal);

console.log('im here!')

function changemodal() {
    let input01 = document.getElementById("input01");
    let input02 = document.getElementById("input02");

    const node = document.createElement('h1');
    const textnode = document.createTextNode('Opsss...');
    const node02 = document.createElement('p');
    const textnode2 = document.createTextNode('Para validar o Login, precisamos que você preencha os campos do formulário. :-)');

    if (input01.value == "" || input02.value == "") {
        node.appendChild(textnode);
        node02.appendChild(textnode2);
        document.getElementsByClassName("modal-header").appendChild(node);
        document.getElementsByClassName("modal-body").appendChild(node02)

        /*document.getElementsByClassName("modal-title").innerHTML = 
            'Opsss...';
        document.getElementsByClassName("modal-body").innerHTML =
            'Para validar o Login, precisamos que você preencha os campos do formulário. :-)';*/

            console.log('Parece que pelo menos um dos campos está vazio!');
    }
}