export const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  export const addToCart = (item) => {
    const cart = getCart();
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const removeFromCart = (eventId) => {
    let cart = getCart();
    cart = cart.filter(item => item.event.id !== eventId);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const updateCart = (eventId, tickets) => {
    let cart = getCart();
    cart = cart.map(item => (item.event.id === eventId ? { ...item, tickets } : item));
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  