import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Form.module.scss";

interface IProduct {
  productName: string;
  description: string;
  price: number;
}

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState<IProduct>({
    productName: '',
    description: '',
    price: 0
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api-salvus.vercel.app/product/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to post the product');
      }

      window.alert("Product posted successfully");

      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      setError('Failed to post the product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formWrapper}>
        <label htmlFor="productName">Product Name</label>
        <input 
          type="text" 
          name="productName" 
          id="productName"
          value={newProduct.productName} 
          onChange={handleChange} 
          required 
        />
      </div>
      <br />
      <div className={styles.formWrapper}>
        <label htmlFor="price">Price</label>
        <input 
          type="number" 
          name="price" 
          id="price"
          value={newProduct.price} 
          onChange={handleChange} 
          className={styles.price} 
          required 
        />
      </div>
      <br />
      <div className={styles.formWrapper}>
        <label htmlFor="description">Description</label>
        <textarea 
          name="description" 
          id="description"
          value={newProduct.description} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit" className={styles.send} disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
      {error && <div className={styles.error}>{error}</div>}
    </form>
  );
}
