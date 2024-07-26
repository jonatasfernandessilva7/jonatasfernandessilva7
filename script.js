if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceworker.js')
        .then( (registration) => {
            console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch( (error) => {
            console.log('Falha ao registrar o Service Worker:', error);
        });
}