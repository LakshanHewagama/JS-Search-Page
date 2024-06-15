document.addEventListener('DOMContentLoaded',()=>{

    const searchInput = document.getElementById('search');
    const clothingItems = document.querySelectorAll('.phone-item');

    searchInput.addEventListener('input', ()=>{
        const searchProduct = searchInput.value.toLowerCase();

        clothingItems.forEach(item=>{           
            if(item.textContent.toLowerCase().includes(searchProduct)){
                item.style.display = '';
            }else{
                item.style.display = 'none';
            }
        });
    });
});



// - use array data sturtues
// - linear search algorithms