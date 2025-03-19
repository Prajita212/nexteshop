
export const totalItem = (cart) => {
    if (!cart || cart.length === 0) return 0;
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };
  
  export const totalPrice = (cart) => {
    if (!cart || cart.length === 0) return 0;
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };
  
  const CartReducer = (state, action) => {
    switch (action.type) {
      case "Add":
        const existingProductIndex = state.findIndex(
          (item) => item.id === action.payload.id
        );
        if (existingProductIndex >= 0) {
          return state.map((item, index) =>
            index === existingProductIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...state, { ...action.payload, quantity: 1 }];
        }
  
      case "Increase":
        return state.map((item) =>
          item.id === action.payload && item.quantity < 10
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
  
      case "Decrease":
        return state.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
  
      case "Remove":
        return state.filter((item) => item.id !== action.payload);
  
      default:
        return state;
    }
  };
  
  export default CartReducer;
  