document.getElementById("btn01").disabled = true;

document.getElementById("input02").addEventListener("input", () => {
    
    let input01 = document.getElementById("input01").value;
    let input02 = document.getElementById("input02").value;

    if (input01 !== null && input01 !== '' && input02 !== null && input02 !== '') {
        document.getElementById("btn01").disabled = false;        
    } else {
        document.getElementById("btn01").disabled = true;
    }
});

document.getElementById("btn01").addEventListener("click", () => {
    document.getElementById("input01").value = '';
    document.getElementById("input02").value = '';
})