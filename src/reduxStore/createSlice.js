import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductss = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();

      return data;
    } catch (error) {
      return error.message;
    }
  },
);

const initialState = {
  products: [],
  isloading: false,
  selected: [],
  cartItem: [],
  price:0,
  qty:0,
};

getProductss();
export const updateReducer = createSlice({
  name: "Allproducts",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartquanaty += 1;
       
   
      } else {
        const temp = { ...action.payload, cartquanaty: 1 };
        state.cartItem.push(temp);
      }
      state.qty+=1;
    },
    delItem:(state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (state.cartItem[itemIndex].cartquanaty  > 1) {
        state.cartItem[itemIndex].cartquanaty -= 1;
      }else if(state.cartItem[itemIndex].cartquanaty  === 1){
         const nextItem= state.cartItem.filter((x)=> x.id !== action.payload.id)
        
         state.cartItem=nextItem
        }
        state.qty-=1;
    },
    removeitem:(state, action)=>{
      const nextItem= state.cartItem.filter((x)=> x.id !== action.payload.id)
      state.cartItem=nextItem
 
    

    },
    totalItem:(state, action)=>{
  let x=0;
  let y=0
 state.cartItem.map((item)=> x+=(item.price* item.cartquanaty ) )
state.cartItem.map((item)=> y+= item.cartquanaty )
state.price =parseFloat(x.toFixed(2));
state.qty=parseInt(y)
    },
   clearAll:(state)=>{
state.cartItem=[];
console.log(state.cartItem.length)
state.qty=0;
    },
  },
  extraReducers: {
    [getProductss.pending]: (state, action) => {
      state.isloading = true;
    },
    [getProductss.fulfilled]: (state, action) => {
      state.isloading = false;
      state.products = action.payload;
      state.selected = action.payload;
      // console.log(state.selected)
    },
    [getProductss.rejected]: (state, action) => {
      state.isloading = false;
      // console.log(action);
    },
  },
});
export const { addItem, delItem ,removeitem,totalItem,clearAll} = updateReducer.actions;
export default updateReducer.reducer;
