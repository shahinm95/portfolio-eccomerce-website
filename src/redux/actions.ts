export const addToCart = (title: string, img: string, price: string, quantity:number) =>{
    return {
        type:'ADD_TO_CART',
        payload: {title, img, price, quantity}
    }
}