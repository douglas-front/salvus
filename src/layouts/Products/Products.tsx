import { useState } from "react";
import styles from "./Products.module.scss";
import Slide from "../../components/Slide/Slide";
import ProductCard from "./ProductCard";
import useGetProducts from "../../hooks/useGetProducts";
import { animationModal } from "../../components/Modal/animations";
import Modal from "../../components/Modal";
import useIsomorphicEffect from "../../hooks/useIsomorphicEffect";
import reveal from "./animations/reveal";



interface Product {
  id: number;
  productname: string;
  description: string;
  price: number;
  productdate: string;
  image: string;
}

export default function Products() {
  const [productModal, setProductModal] = useState<Product | null>(null);
  const products = useGetProducts();
  const [productImages, setProductImages] = useState<{ [key: number]: string }>(
    {}
  );

  const images = ["/bag2.jpg", "/bag3.jpg", "/bag4.jpg"];

  function sortImage() {
    const aleatoryIndex = Math.floor(Math.random() * images.length);
    return images[aleatoryIndex];
  }
  
  useIsomorphicEffect(()=>{
    reveal()
  },[])

  useIsomorphicEffect(() => {
    const imagesMap: { [key: number]: string } = {};
    products.forEach((product) => {
      imagesMap[product.id] = sortImage();
    });
    setProductImages(imagesMap);
  }, [products]);

  return (
    <section className={styles.products} data-slide-element id="products">
      <div className={styles.container}>
        {products.length >= 1 && <Slide />}
        <div className={styles.wrapper} data-slide-wrapper>
          {products.map((item) => (
            <ProductCard
              productname={item.productname}
              price={item.price}
              key={`product ${item.id}`}
              image={productImages[item.id]}
              click={() =>
                animationModal({
                  state: setProductModal,
                  description: item.description,
                  productname: item.productname,
                  price: item.price,
                  image: productImages[item.id],
                })
              }
            />
          ))}
        </div>
      </div>
      {productModal && (
        <Modal
          description={productModal.description}
          price={productModal.price}
          productname={productModal.productname}
          image={productModal.image}
        />
      )}
    </section>
  );
}
