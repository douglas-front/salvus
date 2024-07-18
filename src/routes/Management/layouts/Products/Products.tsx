import { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import ProductCard from "./ProductCard";
import useGetProducts from "../../../../hooks/useGetProducts";
import Slide from "../../../../components/Slide/Slide";
import FormEdit from "../Modal/FormEdit";

interface IProductEdit {
  id: number;
  name: string;
}

export default function Products() {
  const products = useGetProducts();
  const [productImages, setProductImages] = useState<{ [key: number]: string }>(
    {}
  );
  const [selectedProductId, setSelectedProductId] =
    useState<IProductEdit | null>(null);

  const images = ["/bag2.jpg", "/bag3.jpg", "/bag4.jpg"];

  function sortImage() {
    const aleatoryIndex = Math.floor(Math.random() * images.length);
    return images[aleatoryIndex];
  }

  useEffect(() => {
    const imagesMap: { [key: number]: string } = {};
    products.forEach((product) => {
      imagesMap[product.id] = sortImage();
    });
    setProductImages(imagesMap);
  }, [products]);

  const openEditModal = ({ id, name }: IProductEdit) => {
    setSelectedProductId({ id: id, name: name });
  };

  return (
    <section className={styles.products} data-slide-element id="products">
      {products.length >= 1 && <Slide />}
      <div className={styles.wrapper} data-slide-wrapper>
        {products.map((item) => (
          <ProductCard
            productname={item.productname}
            price={item.price}
            key={`product ${item.id}`}
            image={productImages[item.id]}
            id={item.id}
            onClickEdit={() =>
              openEditModal({ id: item.id, name: item.productname })
            }
          />
        ))}
      </div>
      {selectedProductId !== null && (
        <FormEdit id={selectedProductId.id} name={selectedProductId.name} />
      )}
    </section>
  );
}
