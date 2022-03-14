import Card from "./components/card";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
const Home: React.FC = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    const activeProducts = products?.filter((el) => {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0");
      let yyyy = today.getFullYear();
      let todayDate = mm + "/" + dd + "/" + yyyy;
      return +new Date(el?.endDate) >= +new Date(todayDate);
    });
    setFilteredItems(randomizer(activeProducts));
  }, [products]);
  const randomizer = function (items) {
    return items
      .map((element) => {
        element["order"] = Math.random() * element.weight;
        return element;
      })
      .sort((a, b) => b.order - a.order)
      .slice(0, 5);
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {filteredItems?.length > 0 ? (
          filteredItems?.map((el) => <Card key={el.id} data={el} />)
        ) : (
          <div className="uppercase text-base text-slate-800 font-semibold h-96 flex justify-center items-center">
            No Data{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
