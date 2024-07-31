document.addEventListener('DOMContentLoaded', function () {
    const profileImage = document.getElementById('profileImage');

    profileImage.addEventListener('mouseenter', function () {
        profileImage.style.transform = 'rotate(180deg)';
    });

    profileImage.addEventListener('mouseleave', function () {
        profileImage.style.transform = 'rotate(0deg)';
    });
});