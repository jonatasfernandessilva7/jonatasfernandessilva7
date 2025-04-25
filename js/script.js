document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profileImage');
    const experienceSection = document.querySelector('.experiencia');
    const buttons = document.querySelectorAll('button');

    // Animação no hover da imagem de perfil
    if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
            profileImage.style.transition = 'transform 0.5s ease-in-out';
            profileImage.style.transform = 'rotate(180deg) scale(1.1)';
        });

        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'rotate(0deg) scale(1)';
        });
    }

    // Animação de entrada na seção de experiência
    if (experienceSection) {
        experienceSection.style.opacity = '0';
        experienceSection.style.transition = 'opacity 1s ease';

        setTimeout(() => {
            experienceSection.style.opacity = '1';
        }, 300);
    }

    // Efeito de clique nos botões
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('rotating');

            setTimeout(() => {
                button.classList.remove('rotating');
            }, 500);
        });
    });
});