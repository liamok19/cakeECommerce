import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { style } from "@mui/system";

const styles = {
  imgSize: {
    width: 100,
    height: 100,
  },
  cakeHeader: {
    fontSize: "60px",
    // textDecoration: "none",
    color: "Black",
  },
  stockText: {
    fontSize: "40px",
    wordWrap: "break-word",
  },
};
function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, productName, _id, pricing, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card px-1 py-1 cakeCard">
      <Stack>
        <Link
          style={styles.cakeHeader}
          className="prouctHeader"
          to={`/products/${_id}`}
        >
          <p>{productName}</p>
          <img
            style={styles.imgSize}
            alt={productName}
            src={`/images/${image}`}
          />
        </Link>
        <div>
          <div style={styles.stockText} className="fontstyle">
            {quantity} {pluralize("item", quantity)} in stock
          </div>
          <span className="priceCurrency">${pricing} - AUD</span>
        </div>
        <Button className="addCartStyle" onClick={addToCart}>
          Add to cart
        </Button>
      </Stack>
    </div>
  );
}

export default ProductItem;
