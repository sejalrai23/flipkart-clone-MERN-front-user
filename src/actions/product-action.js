import axiosInstance from "../helpers/axios";
import { ProductConstants } from "./constants";
export const getProductsBySlug = (slug) => {
  return async dispatch => {
    const res = await axiosInstance.get(`/product/${slug}`);
    console.log("products:", res);
    if (res.status === 200) {
      dispatch({
        type: ProductConstants.GET_PRODUCTS_BYSLUG,
        payload: res.data
      })
    }
  }
}

export const getProductPage = (payload) => {
  return async dispatch => {
    // console.log("started");
    try {
      const { cid, type } = payload.params;
      console.log(payload);
      const res = await axiosInstance.get(`/page/${cid}/${type}`);
      // console.log("pageres", res);
      dispatch({
        type: ProductConstants.GET_PRODUCT_PAGE_REQUEST,
      });
      if (res.status === 200) {
        const { page } = res.data;
        dispatch({
          type: ProductConstants.GET_PRODUCT_PAGE_SUCCESS,
          payload: { page }
        });

      } else {
        const { error } = res.data;
        dispatch({
          type: ProductConstants.GET_PRODUCT_PAGE_FAILURE,
          payload: { error }
        });
      }

    } catch (error) {
      console.log(error);
    }

  }
}

export const getProductDetails = (payload) => {
  return async dispatch => {
    dispatch({ type: ProductConstants.GET_PRODUCT_DETAILS_REQUEST });
    const { productId } = payload.params;
    console.log(productId)
    const res = await axiosInstance.get(`/product/${productId}`);
    console.log("res", res);
    if (res.status === 200) {
      dispatch({
        type: ProductConstants.GET_PRODUCT_DETAILS_SUCCESS, payload: { productDetails: res.data.product }
      });
    } else {
      dispatch({
        type: ProductConstants.GET_PRODUCT_DETAILS_FAILURE, payload: res.data.error
      })


    }



  }
}