import { configureStore } from "@reduxjs/toolkit";
import CartRedux from "./redux/CartRedux";

export default configureStore({
    reducer:{
        cart:CartRedux
    }
})