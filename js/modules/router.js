const routerView = document.querySelector('#app-router-view');

function navigateTo(viewId) {
    const template = document.querySelector(`#view-${viewId}`);
    
    if (!template) {
        console.error(`A view "${viewId}" não foi encontrada. Verifique o ID do seu template no index.html.`);
        return;
    }

    const viewContent = template.content.cloneNode(true);

    routerView.innerHTML = '';

    routerView.appendChild(viewContent);

    console.log(`Navegando para a view: ${viewId}`);
}

function initRouter() {

    document.addEventListener('click', (event) => {
        const link = event.target.closest('a[data-view]');
        
        if (link) {
            event.preventDefault(); 
            const view = link.dataset.view;
            navigateTo(view);
        }
    });

}

export { initRouter };
