import React, {useState} from 'react'
import { useCart } from '../../Context/CartContext'
import SingleContent from '../../SingleContent/SingleContent';
import "./Wishlist.css"

const Wishlist = () => {
    const {fav}=useCart()
   
//    console.log(fav)

// function empty(){
   
//     fav.length=0;
// }

    return (
        <>
        <h1 style={{paddingTop:"7rem"}}>Your Wishlist</h1>
        {/* <button className="btn-primary-1" onclick={()=> empty()}>Empty wishlist</button> */}
        <div className="display_page">
         
         {
             fav.map((elem)=>
                <SingleContent 
                key={elem.id}
                id={elem.id}
                name={elem.name}
                price={elem.price}
                image={elem.image}
                wishlist={elem.wishlist}
                quantity={elem.quantity}
                payload={elem} />
             )
         }
               
        </div>
        </>
    )
}

export default Wishlist
