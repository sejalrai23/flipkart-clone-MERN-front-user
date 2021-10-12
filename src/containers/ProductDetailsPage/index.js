import React, { useEffect } from 'react';
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../actions/Product-action";

function ProductDeatilsPage(props) {

  const dispatch = useDispatch();


  useEffect(() => {
    const { productId } = props.match.params;
    // console.log(props);
    const payload = {
      params: {
        productId
      }
    }
    dispatch(getProductDetails(payload));
  }, [])


  return (
    <Layout>
      productDetailsPage
    </Layout>
  )
}

export default ProductDeatilsPage
