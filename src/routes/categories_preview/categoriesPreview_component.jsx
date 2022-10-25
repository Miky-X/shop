import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap, selectIsLoading } from "../../store/categories/categorySelector";

import CategoryPreview from "../../components/category_preview/categoryPreview_component";
import Spinner from "../../components/spinner/spinner_component";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);

    return (
        <Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    );
                })
            )}
        </Fragment>
    );
};

export default CategoriesPreview;
