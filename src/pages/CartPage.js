import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { getCart, removeFromCart, updateCart } from '../services/localStorageService';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useState(getCart());
  const [cartSize, setCartSize] = useState(cart.length);

  const navigate = useNavigate();

  // Utilisation de la fonction useEffect pour mettre à jour le panier lors du chargement de la page
  useEffect(() => {
    setCart(getCart());
    setCartSize(cart.length);
  }, []);

  // Fonction pour gérer la suppression d'une réservation
  const handleRemove = (eventId) => {
    removeFromCart(eventId);
    setCart(getCart());
    setCartSize(cart.length);
  };

  // Fonction pour gérer la mise à jour du nombre de places d'une réservation
  const handleUpdate = (eventId, tickets) => {
    updateCart(eventId, tickets);
    setCart(getCart());
    setCartSize(cart.length);
  };

  // Calcul dynamique du total des prix
  const totalPrice = cart.reduce((total, item) => {
    return total + item.event.price * item.tickets;
  }, 0);

  // Vérifiez si le panier est vide
  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Votre panier est vide</h2>
        <button onClick={() => navigate(`/`)}>Voir la liste des événements</button>
      </div>
    );
  }

  // Affichage du contenu du panier
  return (
    <div>
      <h2>Votre panier</h2>
      {cart.map(item => (
        <CartItem
          key={item.event.id}
          item={item}
          onRemove={handleRemove}
          onUpdate={handleUpdate}
        />
      ))}
      <h3>Total : {totalPrice.toFixed(2)}€</h3>
    </div>
  );
};

export default CartPage;
