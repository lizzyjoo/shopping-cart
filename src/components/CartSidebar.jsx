import "./CartSidebar.css";

export default function CartSideBar({
  isOpen,
  setIsOpen,
  cartItems = [],
  onRemoveItem,
  onUpdateQuantity,
  cartTotal,
}) {
  return isOpen ? (
    <>
      <div className="cart-overlay" onClick={() => setIsOpen(false)} />
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, (item.quantity || 1) - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, (item.quantity || 1) + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-item"
                  onClick={() => onRemoveItem(item.id)}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="total">
              <span>Total:</span>
              <span>${cartTotal}</span>
            </div>
            <button className="checkout">Checkout</button>
          </div>
        )}
      </div>
    </>
  ) : null;
}
