import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Image from "next/image";
import productImage from "../../assets/banner-bg.jpg";
const CartTable = ({cartProducts}:any) => {
 
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs text-gray-700 uppercase bg-muted">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              cartProducts.map((product) => (
                
            <tr key={product.id} className="border-b hover:bg-accent/50">
              <td className="p-4">
                <Image
                  src={product.image}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover"
                  alt={product.name}
                />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {product.name}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3 border-2 border-border p-1 rounded-lg">
                  <button
                    className="p-1 text-sm rounded-full border border-transparent hover:border-border"
                    type="button"
                  >
                    <FaMinus />
                  </button>
                  <div className="flex justify-center items-center bg-accent/50">
                    <input
                      type="number"
                      name="quantity"
                      className="p-1 w-12 flex justify-center items-center text-center"
                      placeholder="1"
                      required
                    />
                  </div>
                  <button
                    className="p-1 text-sm rounded-full border border-transparent hover:border-border"
                    type="button"
                  >
                    <FaPlus />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {product.price}.00৳
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline text-xl"
                >
                 <MdDeleteOutline/>
                </a>
              </td>
            </tr>
              ))
            }
        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
