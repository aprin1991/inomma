import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { removeItem } from "redux/products/products.action";
import { RootState } from "redux/reducers";
import { ProductCardProps } from "./types";

const Card: React.FC<ProductCardProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: RootState) => state.user);
  const deleteItem = () => {
    dispatch(removeItem(data?.id));
  };
  return (
    <div className="flex flex-col shadow-md p-4 text-sm border border-gray-200 rounded-md">
      <div className="flex justify-start items-center mb-2">
        <span className="font-medium uppercase">name:</span>
        <span className="ml-4">{data?.name}</span>
      </div>
      <div className="flex justify-start items-center mb-2">
        <span className="font-medium uppercase">weight:</span>
        <span className="ml-4">{data?.weight}</span>
      </div>
      <div className="flex justify-start items-center mb-2">
        <span className="font-medium uppercase">price:</span>
        <span className="ml-4">{data?.price}</span>
      </div>
      <div className="flex  justify-start items-start mb-2">
        <span className="font-medium uppercase">start date:</span>
        <span className="ml-3">{data?.startDate}</span>
      </div>
      <div className="flex justify-start items-start mb-2">
        <span className="font-medium uppercase">end date:</span>
        <span className="ml-3">{data?.endDate}</span>
      </div>
      {currentUser?.isLoggedIn && pathname === "/admin/add/product" && (
        <button
          onClick={deleteItem}
          className="text-white bg-slate-800 font-bold p-3 w-full mt-4 rounded-md uppercase"
        >
          Delet
        </button>
      )}
    </div>
  );
};

export default Card;
