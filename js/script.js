document.addEventListener('DOMContentLoaded', function () {
    const profileImage = document.getElementById('profileImage');

    profileImage.addEventListener('mouseenter', function () {
        profileImage.style.transform = 'rotate(180deg)';
    });

    profileImage.addEventListener('mouseleave', function () {
        profileImage.style.transform = 'rotate(0deg)';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const bodyElement = document.querySelector('body');
    const experienceSection = document.querySelector('.experiencia');

    // Inicia a animação de quadrado
    bodyElement.classList.add('animate');

    // Após a animação de quadrado, revela o conteúdo
    setTimeout(function () {
        bodyElement.classList.remove('animate');
        experienceSection.style.opacity = '1';
    }, 500); // Tempo da animação deve coincidir com o tempo da transição no CSS
});
