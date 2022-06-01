import React, { useEffect, useState } from "react";
import Controls from "./Controls";

import ProductsItems from "./ProductsItems";
export default function Products() {
  const [data, setData] = useState([]);
  const [Filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mount, setMount] = useState(true);
//---------------------------on Updata--------------------------------------
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (mount) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      setMount(false);

    };
    getProducts();
  }, []);
//---------------------------on Updata--------------------------------------

  const filterProduct = (cat) => {
    const selection = data.filter((x) => x.category === cat);
    setFilter(selection);
  };

  const AllProduct = () => {
   
    setFilter(data);
  };

  const Load = () => {
    return (
      <>
        {" "}
        <h1> Loading....</h1>
      </>
    );
  };
  return (
    <div className='container-fluid mt-4 '>
      {loading ? (
        <>
       <Load/>
        </>
      ) : (
        <>
        <Controls all={AllProduct}   filter={filterProduct} 
        men={"men's clothing"} 
        women={"women's clothing"} 
        electronics={"electronics"}
        jewelery={"jewelery"}
       
        />
          <div className='  row  d-flex flex-colum  justify-content-center'>
            {Filter.map((product) => {
              return (
                <>
                  <ProductsItems
                    title={product.title}
                    image={product.image}
                    desc={product.description}
                    price={product.price}
                    key={product.id}
                  />
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
