import { Action } from 'redux';


interface AddToCartAction {
    type: 'ADD_TO_CART',
    payload: {
      title: string,
      img: string,
      price: string,
      quantity: number
    }
  }

  interface RemoveFromCartAction {
    type: 'REMOVE_FROM_CART',
    payload: {
      title: string,
    }
  }
  
  type CartAction = AddToCartAction | RemoveFromCartAction;

interface BuyType {
  title: string;
  img: string;
  price: string;
  quantity: number;
}

interface InitialStateType {
  cartItems: BuyType[];
}

const initialState: InitialStateType = {
  cartItems: [],
};

const cartReducer = (state: InitialStateType = initialState, action: CartAction) :InitialStateType => {
  switch (action.type) {
    case "ADD_TO_CART":
      // check if item already exist in cart
      const existingItem = state.cartItems.findIndex(
        (item) => item.title === action.payload.title
      );
      if (existingItem !== -1 ) {
        const upadatedCartItems = [...state.cartItems];

        if (upadatedCartItems[existingItem]){
            upadatedCartItems[existingItem] = {
          ...upadatedCartItems[existingItem],
          quantity: upadatedCartItems[existingItem].quantity + 1,}
        };
        return { ...state, cartItems: upadatedCartItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }
    default:
        return state || initialState;
  }
};

export default cartReducer;
