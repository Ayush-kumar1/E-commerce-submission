import React, { useReducer,useState } from 'react'
import {useCart} from "../../Context/CartContext"
import "./Cart.css"

const Cart = () => {

    const {cart,dispatch}=useCart()
    

    function total(list){

        const amount=list.reduce((acc,item)=>{
              return acc+ (item.quantity+1) * item.price;
        },0)
        return amount
    }
    
    total(cart)
    

    // const reducer=(state,action)=>{

    //     switch(action.type){

    //         case "INCREMENT":
    //             console.log(action.payload)
                
    //                return setItemsinCart((state)=> (
    //                     state.map((elem)=>
    //                     elem.id===action.payload.id
    //                     ?{...elem, quantity:elem.quantity+1}
    //                     :elem)))
                    
                

    //         case "DECREMENT":
    //             return{
    //                 ...state,
    //                  itemsinCart: state.itemsinCart.map((elem)=>
    //                  elem.id===action.payload.id
    //                  ?{...elem, quantity:elem.quantity-1}
    //                  :elem)
    //             } 

    //             default:
    //                 return state
    //     }

    // }

    // const [state,dispatch]=useReducer(reducer,{itemsinCart});
    // console.log(state.itemsinCart)
    // console.log(cart.length)

    



    return (

        <>
        <h1 style={{paddingTop:"7rem"}}>Cart</h1>
        <h3 >Total amount is {total(cart)}</h3>
       
        <div className="cart_display_page">
            
            {
                cart.map((elem)=>
                     
                <div className="card_for_cart">

                    <h2>{elem.name}</h2>
                    <img className="cart_poster" src={elem.image} alt="" />
                    <p>Rs. {elem.price}</p>
                    <p>Quantity- {elem.quantity+ 1}</p>

                    <button onClick={()=> dispatch({type: "INCREMENT", payload: elem._id})}>+</button>

                    <button onClick={()=> dispatch({type: "DECREMENT", payload: elem._id})}> -- </button>
                </div>
                )
            }


           
        </div>
        
        
        </>
    )
}

export default Cart
