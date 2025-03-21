import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryActive, setPoductCategory } from "../../redux/adminSlice";
import { productAPI } from "../../services/productService";

const FilterProductByCategory  = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const categoryActive = useSelector(
    (state) => state.AdminStore.categoryActive
  );
  const categoryStore = useSelector((state) => state.AdminStore.categoryStore);
  const productStore = useSelector((state) => state.AdminStore.productStore);

  useEffect(() => {
    if (categoryStore) {
      setCategories(categoryStore);
    }
    if (!categoryActive) {
      dispatch(setCategoryActive("allProduct"));
      dispatch(setPoductCategory(productStore));
    }
  }, [categoryStore, categoryActive, dispatch, productStore]);

  const handleClickCategory = async (categoryId) => {    
    try {
      dispatch(setCategoryActive(categoryId));
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

  return (
    <div className=" flex items-center gap-4">
      <select
        className="bg-white border-2  rounded-sm px-1 py-1.5 shadow-md text-gray-700"
        value={categoryActive || "allProduct"}
        onChange={(e) => handleClickCategory(e.target.value)}
      >
        <option value="allProduct" default>Tất cả danh mục</option>
        {categories.map((item) => (
          <option key={item.categoryId} value={item.categoryName}>
            {item.categoryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterProductByCategory;
