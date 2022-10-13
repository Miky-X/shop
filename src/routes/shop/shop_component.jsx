import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories_preview/categoriesPreview_component";
import Category from "../category/category_component";

import "./shop_styles.scss";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;
