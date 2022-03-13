import { ProductCardProps } from "components/card/types";

const Card: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col shadow-md p-4 text-sm border border-gray-200 rounded-md">
      <div className="flex justify-start items-center mb-2">
        <span className="font-medium uppercase">name:</span>
        <span className="ml-4 text-base font-semibold text-black">
          {data?.name}
        </span>
      </div>
      <div className="flex justify-start items-center mb-2">
        <span className="font-medium uppercase">weight:</span>
        <span className="ml-4 text-base font-semibold text-black">
          {data?.weight}
        </span>
      </div>
      <div className="flex justify-start items-center mb-2">
        <span className="font-medium uppercase">price:</span>
        <span className="ml-4 text-base font-semibold text-black">
          {data?.price}
        </span>
      </div>
      <div className="flex  justify-start items-start mb-2">
        <span className="font-medium uppercase">start date:</span>
        <span className="ml-3 text-base font-semibold text-black">
          {data?.startDate}
        </span>
      </div>
      <div className="flex justify-start items-start mb-2">
        <span className="font-medium uppercase">end date:</span>
        <span className="ml-3 text-base font-semibold text-black">
          {data?.endDate}
        </span>
      </div>
    </div>
  );
};

export default Card;
