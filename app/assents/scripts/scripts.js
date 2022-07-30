// next loop image
setInterval(() =>
{
    let nextImg = document.querySelector('#nextImg');
    nextImg.click()
}, 4500)
// search
let btnSearch = document.querySelector('#btnSearch').addEventListener('click',searchFunc);

window.addEventListener('keypress', (e) => {
    if(e.key === 'Enter')
    {
        searchFunc()
    }
});

function searchFunc(){

    let searchInput = document.querySelector('#searchInput').value;
    if(searchInput)
    {
        let btnModalErrorSearch = document.querySelector('#btnModalErrorSearch');
        let errorTitleSearch = document.querySelector('#errorTitleSearch');
        errorTitleSearch.innerHTML = `0 Resultados para "${searchInput}" encontrados.`
        btnModalErrorSearch.click()
    }
    
};