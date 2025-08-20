import { initRouter } from './modules/router.js';

function main() {
    console.log("Aplicação iniciada. Roteador pronto para navegação.");
    
    initRouter();
}

document.addEventListener('DOMContentLoaded', main);
