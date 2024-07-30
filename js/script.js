const buttonIRProjeto1 = document.getElementById('Ir_projeto1');
const buttonIRProjeto2 = document.getElementById('Ir_projeto2');
const buttonIRprojetos = document.getElementById('projetos');
const buttonHabilidades = document.getElementById('habilidades');

buttonIRProjeto1.addEventListener('click', () => {
    console.log('oi');
    window.location.href="https://github.com/jonatasfernandessilva7/backend-schoolLab.git"
})

buttonIRProjeto2.addEventListener('click', () => {
    console.log('oi');
    window.location.href="https://github.com/jonatasfernandessilva7/tasks-FreeRTOS-Linux.git"
})

buttonIRprojetos.addEventListener('click', () => {
    window.location.href="../html/projetos.html"
})

buttonHabilidades.addEventListener('click', () => {
    window.location.href="../html/habilidades.html"
})