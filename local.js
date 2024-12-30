const getStoredItem = () =>{
    let cart = {};
    const storedItem = localStorage.getItem('cart');
    if(storedItem){
        cart = JSON.parse(storedItem);
    }
    return cart;
}

const saveProductToLocalStorage = (course_name,course_id) =>{

}