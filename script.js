// Verifica se o Service Worker é suportado pelo navegador
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
            .then(registration => {
                console.log('Service Worker registrado com sucesso com escopo:', registration.scope);
            })
            .catch(error => {
                console.error('Erro ao registrar o Service Worker:', error);
            });
    });
}