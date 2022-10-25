import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories_preview/categoriesPreview_component";
import Category from "../category/category_component";
import { useEffect } from "react";
import { fetchCategoriesStartAsync } from "../../store/categories/categoryAction";
import { useDispatch } from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchCategoriesStartAsync());
        }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;
