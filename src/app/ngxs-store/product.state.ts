import { state } from "@angular/animations";
import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { AddCart, DeleteCart, GetCart } from "./product.action";

export class CartStateModel {
    cart: string[];
}

@State<CartStateModel>({
    name: "cart",
    defaults: {
        cart: []
    }
})
@Injectable()
export class CartState {
    constructor() {
    }

    @Action(GetCart)
    getCart(state: CartStateModel) {
        return state.cart;
    }

    @Action(AddCart)
    addCart({ getState, patchState }: StateContext<CartStateModel>, { payload }: AddCart) {
        const state = getState();
        patchState({
            cart: [...state.cart, payload]
        });
    }

    @Action(DeleteCart)
    deleteCart({ getState, setState }: StateContext<CartStateModel>, { payload }: DeleteCart) {
        const state = getState();
        const filteredArray = state.cart.filter(item => item !== payload);
        setState({
            ...state,
            cart: filteredArray
        });
    }


}