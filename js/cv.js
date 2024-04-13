document.addEventListener('DOMContentLoaded', function() {
    const xpButton = document.getElementById('xp');
    const habButton = document.getElementById('hab');
    const formacaoButton = document.getElementById('formacao');
    const cursosButton = document.getElementById('cursos');
    const githubButton = document.getElementById('github');

    // Adiciona efeito hover aos botões
    const buttons = [xpButton, habButton, formacaoButton, cursosButton, githubButton];

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = '#2980b9';
        });

        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '#3498db';
        });
    });

    // Navegação ao clicar nos botões
    xpButton.addEventListener('click', function() {
        window.location.href = 'html/xp.html';
    });

    habButton.addEventListener('click', function() {
        window.location.href = 'html/habilidades.html';
    });

    formacaoButton.addEventListener('click', function() {
        window.location.href = 'html/formacao.html';
    });

    cursosButton.addEventListener('click', function() {
        window.location.href = 'html/cursos_extras.html';
    });

    githubButton.addEventListener('click', function() {
        window.location.href = 'https://github.com/jonatasfernandessilva7';
    });
});
