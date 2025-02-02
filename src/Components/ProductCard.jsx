import styles from "./ProductCard.module.css";
import { AiFillShopping } from 'react-icons/ai';
import { useCart } from "../hooks/useCart";

export default function ProductCard({ product }) {
  const { addItemToCart } = useCart();

  function handleAddToCart() {
    addItemToCart(product.id);
  }

  let cardFooterMessage = (
    <>
      <span>**</span><strong>bakery product </strong><span>**</span>
    </>
  );

  if (product.categories.includes("bread")) {
    cardFooterMessage = (
      <>
        <span>**</span><strong>pure veg</strong><span>**</span>
      </>
    );
  }

  if (product.categories.includes("cakes") && product.categories.includes("rolls")) {
    cardFooterMessage = (
      <>
        <span>**</span><strong>contains egg</strong><span>**</span>
      </>
    );
  }

  return (
    <div className={styles.card} key={product.id}>
      <img src={product.image} alt={product.name} />

      <div className={styles.cardBackground}>
        <h3>{product.name}</h3>

        <div>
          <span>
            {product.price.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'INR' // Adjusted to USD for English localization
            })}
          </span>
          <button className={styles.cart} onClick={handleAddToCart}>
            <span>BUY</span>
            <AiFillShopping size={16} />
          </button>
        </div>

        <p>
          {product.description}
        </p>

        <div className={styles.cardFooter}>
          {cardFooterMessage}
        </div>
      </div>
    </div>
  );
}
