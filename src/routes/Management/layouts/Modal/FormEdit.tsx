import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./FormEdit.module.scss";

interface IProduct {
  id: number;
  productName: string;
  description: string;
  price: number;
}

interface Props {
  id: number;
  name: string;
}

export default function FormEdit({ id, name }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editProduct, setEditProduct] = useState<IProduct>({
    productName: "",
    description: "",
    price: 0,
    id,
  });

  const handleChangeEdit = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditProduct({
      ...editProduct,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log(id);
    console.log(editProduct);
    try {
      const response = await fetch(
        `https://api-salvus.vercel.app/product/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update the product");
      }

      window.alert("Product updated successfully");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      setError("Failed to update the product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>{name} edit</h1>
      <div className={styles.formWrapper}>
        <label htmlFor="productNameEdit">Product Name</label>
        <input
          type="text"
          name="productName"
          id="productNameEdit"
          onChange={handleChangeEdit}
          required
        />
      </div>
      <br />
      <div className={styles.formWrapper}>
        <label htmlFor="priceEdit">Price</label>
        <input
          type="number"
          id="priceEdit"
          name="price"
          onChange={handleChangeEdit}
          className={styles.price}
          required
        />
      </div>
      <br />
      <div className={styles.formWrapper}>
        <label htmlFor="descriptionEdit">Description</label>
        <textarea
          id="descriptionEdit"
          name="description"
          onChange={handleChangeEdit}
          required
        />
      </div>

      <button type="submit" className={styles.send} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      {error && <div className={styles.error}>{error}</div>}
    </form>
  );
}
