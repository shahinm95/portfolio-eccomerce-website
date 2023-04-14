
interface AddToCartAction {
    type: 'TOGGLE_TO_LIKED',
    payload: {
      title: string,
      img: string,
      price: string,
    }
  }

  
  type CartAction = AddToCartAction 

interface BuyType {
    title: string;
    img: string;
    price: string;
  }
  
  
  interface InitialStateType {
    cartItems: BuyType[];
  }
  
  const initialState: InitialStateType = {
    cartItems: [],
  };
  
  const likedItemsReducer = (state: InitialStateType = initialState, action: CartAction) :InitialStateType  => {
    switch (action.type) {
      case "TOGGLE_TO_LIKED":
        // check if item already exist in cart
        const existingItem = state.cartItems.findIndex(
          (item) => item.title === action.payload.title  && item.img === action.payload.img 
        );
        if (existingItem !== -1) {
          const FilteredItems = state.cartItems.filter(item => item.title !== action.payload.title)
          return { ...state, cartItems: [...FilteredItems]};
        } else {
          return { ...state, cartItems: [...state.cartItems, action.payload] };
        }
        default : 
        return state || initialState;
    }
  };
  
  export default likedItemsReducer;