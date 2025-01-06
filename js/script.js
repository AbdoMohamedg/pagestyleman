function search(){
    let searchBar = document.querySelector('.input-search').value.toUpperCase();
    let productList = document.querySelector('.best-offer');
    let product = document.querySelectorAll('.clothe');
    let productName = document.getElementsByTagName('h2');

    for (let i = 0; i < productName.length; i++)
    {
        if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0){
            product[i].style.display = "";
        }else{
            product[i].style.display = "none";
        }
    }
}

