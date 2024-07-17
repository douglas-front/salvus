import { useEffect, useState } from "react"

interface Product {
  id: number
  productname: string
  description: string
  price: number
  productdate: string
}

type ProductsArray = Product[]

export default function useGetProducts() {
  const [products, setProducts] = useState<ProductsArray>([])

  useEffect(function getProducts() {
    const controller = new AbortController()
    const signal = controller.signal;

    (async () => {
      try {
        const req = await fetch("https://api-salvus.vercel.app/product", {
          signal,
        })

        const jsonApi = await req.json()

        setProducts(jsonApi)
      } catch (error) {
        console.error("Error fetching or parsing data:", error)
      }
    })()

    return () => controller.abort()
  }, [])

  return products
}