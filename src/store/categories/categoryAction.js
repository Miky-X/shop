import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";
import { createAction } from "../../utils/reducer/reducer_utils";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase_utils";

export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
    );

export const fetchCategoriesFailure = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesStartAsync = () => {
    return async (dispatch) => {
        dispatch(fetchCategoriesStart());
        try {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(fetchCategoriesSuccess(categoriesArray));
        } catch (error) {
            dispatch(fetchCategoriesFailure(error));
        }
    };
};
