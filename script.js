const passList = [];
const pLastPass = document.getElementById("pLastPass")
const pNextPass = document.getElementById("pNextPass")
const btnAddPass = document.getElementById("btnAddPass")
const btnGetNextPass = document.getElementById("btnGetNextPass")

btnAddPass.addEventListener('click', addPass);
btnGetNextPass.addEventListener('click', GetNextPass);

function addPass() {
    let lastPass = 0;
    const indexLastPass = passList.length - 1;
    if (indexLastPass >= 0)
        lastPass = passList[indexLastPass];
    passList.push(++lastPass);
    pLastPass.innerText = lastPass;
}

function GetNextPass() {
    const nextPass = passList.shift();
    pNextPass.innerText = nextPass;
}
