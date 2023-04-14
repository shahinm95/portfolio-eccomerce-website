export const addToCart = (title: string, img: string, price: string, quantity:number) =>{
    return {
        type:'ADD_TO_CART',
        payload: {title, img, price, quantity}
    }
}

export const toggleToLiked = (title: string, img: string, price:string)=>{
    return {
        type: "TOGGLE_TO_LIKED",
        payload:{title, img, price}
    }
}