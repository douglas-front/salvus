import { useState } from "react";
import styles from "./ProductCard.module.scss";

interface Props {
  id: number;
  productname: string;
  price: number;
  image: string;
  onClickEdit: () => void; // Correção: Adicionado tipo de retorno para onClickEdit
}

export default function ProductCard({ productname, price, image, id, onClickEdit }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function deleteProduct() {
    setLoading(true);
    try {
      const response = await fetch(`https://api-salvus.vercel.app/product/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error('Failed to delete the product');
      }

      window.alert("Product deleted");

      // Recarregar a página após a exclusão
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      setError('Failed to delete the product. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <figure className={styles.card} data-slide-item>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={deleteProduct} disabled={loading}>
          {loading ? 'Deleting...' : 'Delete'}
        </button>
        <button className={styles.button} onClick={() => {
          onClickEdit(); // Correção: Chamar a função onClickEdit corretamente
        }}>
          Edit
        </button>
      </div>
      <img className={styles.image} src={image} alt="bag image" />
      
      <div className={styles.info}>
        <small>{productname}</small>
        <small>{price}</small>
      </div>

      
      
      {error && <small className={styles.error}>{error}</small>}
    </figure>
  );
}
