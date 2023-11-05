import { combineReducers } from "redux";
import { MaincategoryReducer } from "./MaincategoryReducer";
import { SubcategoryReducer } from "./SubcategorReducer";
import { BrandReducer } from "./BrandReducer";
import { ProductReducer } from "./ProductReducer";
import { UserReducer } from "./UserReducer";
import { CartReducer } from "./CartReducer";
import { WishlistReducer } from "./WishlistReducer";
import { CheckoutReducer } from "./CheckoutReducer";
import { ContactReducer } from "./ContactReducer";
import { NewslatterReducer } from "./NewslatterReducer";

export default combineReducers({
    MainCategoryStateData: MaincategoryReducer,
    SubCategoryStateData: SubcategoryReducer,
    BrandStateData: BrandReducer,
    ProductStateData: ProductReducer,
    UserStateData: UserReducer,
    CartStateData: CartReducer,
    WishlistStateData: WishlistReducer,
    CheckoutStateData: CheckoutReducer,
    ContactStateData: ContactReducer,
    NewslatterStateData: NewslatterReducer,

})