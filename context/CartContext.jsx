import { createContext, useState } from "react";

const CartContext = createContext();
// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = product.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
      return;
    }
    setCart((prevCart) => [...prevCart, { ...product, quatity: 1 }]);
  };

  const updateQuatity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: quantity };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const products = [
    {
      Title: "Deportivas",
      image:
        "https://unsplash.com/es/fotos/par-de-zapatos-deportivos-blancos-y-naranjas-en-una-caja-blanca-dwKiHoqqxk8",
      price: 30.0,
      description: "descripcion",
      id: "00001",
    },
    {
      Title: "Camisa",
      image:
        "https://unsplash.com/es/fotos/mujer-con-camisa-de-vestir-blanca-y-pantalones-cortos-de-mezclilla-azul-MkqVieSpi5U",
      price: 25.0,
      description: "descripcion",
      id: "00002",
    },
    {
      Title: "Chandal",
      image:
        "https://unsplash.com/es/fotos/mujer-con-chaqueta-negra-y-pantalon-blanco-sentada-en-el-suelo-de-hormigon-gris-2UTk-Nip5aM",
      price: 45.0,
      description: "descripcion",
      id: "00003",
    },
    {
      Title: "Chandal",
      image:
        "https://unsplash.com/es/fotos/mujer-con-chaqueta-negra-y-pantalon-blanco-sentada-en-el-suelo-de-hormigon-gris-2UTk-Nip5aM",
      price: 45.0,
      description: "descripcion",
      id: "00003",
    },
  ];

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuatity, removeFromCart, products }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
