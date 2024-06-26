import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const sellerReducer = createReducer(initialState, (builder) => {
  builder
  .addCase('LoadSellerRequest', (state) => {
    state.isLoading = true;
  })
  .addCase('LoadSellerSuccess', (state, action) => {
    state.isSeller = true;
    state.isLoading = false;
    state.seller = action.payload;
  })
  .addCase('LoadSellerFail', (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.isSeller = false;
  });

  // // get all sellers ---admin
  // getAllSellersRequest: (state) => {
  //   state.isLoading = true;
  // },
  // getAllSellersSuccess: (state, action) => {
  //   state.isLoading = false;
  //   state.sellers = action.payload;
  // },
  // getAllSellerFailed: (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // },
  // clearErrors: (state) => {
  //   state.error = null;
  // },
});
