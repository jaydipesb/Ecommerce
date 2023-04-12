import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserHeader from "../UserHeader";

const CheckoutCart = () => {
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.cart
  );
  console.log(
    "products",
    useSelector((state) => state.cart)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkout = () => {
    const auth = localStorage.getItem("user");
    console.log(auth);
    console.log("Auth", JSON.parse(auth)[0].id);
    // console.log(auth[0].id);
    let id = JSON.parse(auth)[0].id;

    if (auth) {
      navigate("/purchase");
    } else {
      alert("please login first");
    }
  };

  return (
    <> 
    <UserHeader/>   
    <div className="container">
      <h3>Your Purchased Product</h3>
      {products.length > 0 ? (
        <>
          <div className="row">
            <div className="col-9">
              <div className="cart__heading">
                <div className="row">
                  <div className="col-2">Picture</div>
                  <div className="col-2">Name</div>
                  <div className="col-2">Price</div>
                  <div className="col-2">Quantity</div>
                  <div className="col-2">Total Price</div>
                </div>
              </div>
              {products.map((product) => (
                <div className="row verticalAlign" key={product.id}>
                  <div className="col-2">
                    <div className="cart__image">
                      <img src={`${product.image}`} alt="" />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart__name">{product.title}</div>
                  </div>
                  <div className="col-2">
                    <div className="cart__price">{product.price}</div>
                  </div>
                  <div className="col-2">
                    <div className="details__info cart__incDec">
                      <div className="col-2">
                        <div className="cart__total text-center">
                          {product.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart__total text-center">
                      {(product.price * product.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-3 summary-col">
              <div className="summary">
                <div className="summary__heading">Summary</div>
                <div className="summary__details">
                  <div className="row mb-10">
                    <div className="col-6">Total Items:</div>
                    <div className="col-6">{totalQuantities}</div>
                  </div>
                  <div className="row mb-10">
                    <div className="col-6">Total Price</div>
                    <div className="col-6">{totalPrice}</div>
                  </div>
                  <button
                    type="button"
                    className="checkout"
                    onClick={() => checkout()}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        "Your cart is empty!"
      )}
    </div>
    </>

  );
};

export default CheckoutCart;
