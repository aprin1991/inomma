import Card from "components/card";
import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "redux/reducers";
import Form from "./components/Form";
function AddProduct() {
  const { products } = useSelector((state: RootState) => state.products);

  return (
    <div>
      <Form />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
}

export default AddProduct;
