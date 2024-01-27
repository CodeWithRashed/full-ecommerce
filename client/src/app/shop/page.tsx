import ProductsPage from "@/components/shop/ProductsPage";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AllProductShop = () => {
  return (
    <div className="grid grid-cols-12 max-w-[1240px] mx-auto">
      <div className="sidebar col-span-3">
        {/* FILTER BY PRODUCT CATEGORY */}
        <div className="filter-by-cat">
          <h3 className="font-bold mb-2">Product Category</h3>
          <div className="categories">
            <div className="flex items-center space-x-2">
              <Checkbox id="Headphones" />
              <label
                htmlFor="Headphones"
                className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Headphones
              </label>
            </div>
          </div>
        </div>

         {/* FILTER BY PRODUCT BRANDS */}
         <div className="filter-by-brands mt-5">
          <h3 className="font-bold mb-2">Brands</h3>
          <div className="categories">
            <div className="flex items-center space-x-2">
              <Checkbox id="lenovo" />
              <label
                htmlFor="lenovo"
                className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                lenovo
              </label>
            </div>
          </div>
        </div>
        {/* SORT BY DATE */}
        <div className="sort-by-date mt-5">
          <h3 className="font-bold mb-2">Sort By</h3>
          <div className="dates">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="high" />
                <label htmlFor="high">Price High to Low</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="low" />
                <label htmlFor="low">Price Low to High</label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="products col-span-9">
        <h4 className="font-bold mb-3">Showing 1 - 10 of 15 Products</h4>
        <div>
          <ProductsPage />
        </div>
      </div>
    </div>
  );
};

export default AllProductShop;