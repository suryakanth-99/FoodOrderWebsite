import {useReducer} from 'react';
import CartContext from "./Cart-context";

const defaultCartState = {
    items : [],
    totalAmount : 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD')
    {
        
        const updatedTotalAmount = state.totalAmount + action.itemValue.price * action.itemValue.amount;

        const itemPresentIndex = state.items.findIndex(item => item.id === action.itemValue.id)
       
        let updatedItems;

        const existingCartItem = state.items[itemPresentIndex];
        if(existingCartItem)
        {
             const updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount + action.itemValue.amount
            }
            updatedItems = [...state.items];
            updatedItems[itemPresentIndex] = updatedItem;
        }
        else
        {
            updatedItems = state.items.concat(action.itemValue);
        }
        
        
        return {
             items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }


    if(action.type === 'REMOVE')
    {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        
            if(existingItem.amount ===1 )
            {
                updatedItems = state.items.filter(item => item.id !==action.id);
            }
            else
            {
                const updatedItem = {...existingItem, amount : existingItem.amount-1};
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {
                items : updatedItems,
                totalAmount : updatedTotalAmount
            
        }
    }
    return defaultCartState;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = item => {
        
        dispatchCartAction({type:'ADD', itemValue:item})
    };


    const removeitemFromCart = id => {
        dispatchCartAction( {type : 'REMOVE', id:id})
    };
    const cartValues = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : addItemToCart,
        removeItem : removeitemFromCart
    }


    return (
        <CartContext.Provider value={cartValues}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider; 