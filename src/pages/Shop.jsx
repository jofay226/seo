import { Helmet } from "react-helmet-async";

const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="shop our latest products now" />
        <link rel="canonical" href="./shop" />
      </Helmet>
      <p>shop</p>
    </div>
  );
};

export default Shop;
