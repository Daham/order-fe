import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import configuration from "../../config";

const sliceId = 'product';

export const createProduct = createAsyncThunk(
    'customer/createProduct',
    // eslint-disable-next-line no-empty-pattern
    async ({name, description, price}) => {

        console.log(configuration.api.orderApiUrl)

        const config = {
            method: 'post',
            url: `${configuration.api.orderApiUrl}/products`,
            data: {
                "name": name,
                "description": description,
                "price": price,
            }
        };

        const response = await axios(config);
        return response.data
    }
)

const productSlice = createSlice({
    name: sliceId,
    initialState: {
        loading: false,
        error: null,
        openSnackBar: false
    },
    reducers: {
        setOpenSnackBar: (state, {payload}) => {
            state.openSnackBar = payload
        },
    },
    extraReducers: builder => {
        builder.addCase(createProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(createProduct.fulfilled, (state, {payload}) => {
            state.loading = false
            state.openSnackBar = true
        });

        builder.addCase(createProduct.rejected, (state, {error}) => {
            state.loading = false
            state.openSnackBar = true
            state.error = error.message;
        });
    }
});

export const {
    setOpenSnackBar
} = productSlice.actions;

export const productSelectors = {
    loading: (state) => state.product.loading,
    error: (state) => state.product.error,
    openSnackBar: (state) => state.product.openSnackBar,
};

export default productSlice.reducer;