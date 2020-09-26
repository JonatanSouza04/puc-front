if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
         navigator.serviceWorker.register('./sw.js').then((reg) => {
             console.log('Registrado o ServiceWork',reg);
         }).catch((error) => console.log('Erro ao registrar ' + error));  
    });
}