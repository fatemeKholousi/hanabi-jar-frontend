import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editProduct: "",
};

const ProductManagement = createSlice({
  name: "productManagement",
  initialState,
  reducers: {
    editProductAction: (state: any, action: any) => {
      state.editProduct = action.payload;
    },
    addNewProductIdAction: (state: any, action: any) => {
      state.addedProdutId = action.payload;
    },
  },
});

export const { editProductAction } = ProductManagement.actions;

export default ProductManagement;
