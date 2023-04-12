import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import currencyFormatter from "currency-formatter";
import UserHeader from "../UserHeader";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const CATEGORIES = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const [filterTags, setFilterTags] = useState([]);
  const [seachProduct, setsearchProduct] = useState("");
  console.log("seachProduct", seachProduct);

  const filterHandler = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setFilterTags([...filterTags, event.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      );
    }
  };

  console.log(filterTags);

  const filteredData = [];

  if (filterTags.length > 0) {
    for (let tag in filterTags) {
      filteredData.push(
        ...products.filter((product) => product["category"] === filterTags[tag])
      );
    }
  } else if (seachProduct !== "") {
    console.log("call seacrh product function");
    let filterSearch = products.filter((item) => {
      console.log(item.category);
      if (item.category.toLowerCase().includes(seachProduct.toLowerCase())) {
        console.log("item", item);
        return item;
      }
    });
    console.log(filterSearch);
    filteredData.push(...filterSearch);
  } else {
    filteredData.push(...products);
  }
  console.log(products);


  return (
    <>
     <UserHeader />
      <div className="filters">
        <header id="filters-header">{"Filters"}</header>
        <ul>
          {CATEGORIES.map((category) => (
            <li key={category}>
              <label>
                <input
                  onChange={filterHandler}
                  type="checkbox"
                  value={category}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="searchProduct">
        <input  
          type="text"
          name="seachproduct"
          onChange={(e) => setsearchProduct(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className="container">
        <div className="row">
          {filteredData.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="product">
                <div className="product__img">
                  <Link to={`/details/${product.id}`}>
                    <img src={`${product.image}`} alt="image name" />
                  </Link>
                </div>
                <div className="product__name">{product.category}</div>
                <div className="row">
                  <div className="col-6">
                    <div className="product__price">
                      {currencyFormatter.format(product.price, { code: "INR" })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListing;