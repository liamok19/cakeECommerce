import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      console.log(categoryData);

      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  const styles = {
    alignedText: {
      textAlign: "center",
    },
    buttonSpacing: {
      marginLeft: 40,
    },
    textStyling: {
      textAlign: "start",
      marginLeft: "10px",
      marginBottom: "30px",
      fontSize: "6vw",
    },
  };
  return (
    <Stack>
    <div style={styles.alignedText}>
    <h2 className="fontstyle" style={styles.textStyling}>Choose a Category:</h2>
      {categories.map((item) => (
        <Button
        variant="text"
        style={styles.buttonSpacing}
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </Button>
      ))}
    </div>
    </Stack>
  );
}

export default CategoryMenu;
