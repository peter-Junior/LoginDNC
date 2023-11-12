const button = document.getElementById('btn01');
button.addEventListener('click', changemodal);

console.log('im here!')

function changemodal() {
    let input01 = document.getElementById("input01");
    let input02 = document.getElementById("input02");

    if (input01.value == "" || input02.value == "") {
        console.log('Parece que um dos campos está vazio!');

        document.getElementById("exampleModalLabel").innerHTML = 
            'Opsss...';
        document.getElementsByClassName("modal-body").innerHTML =
            'Para validar o Login, precisamos que você preencha os campos do formulário. :-)';
    }
}