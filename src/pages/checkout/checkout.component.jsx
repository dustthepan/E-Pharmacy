import React from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';
import './checkout.styles.scss';
import StripeButton from '../../components/stripe-button/stripe.button.component'



const Checkout = ({cartItems,total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'> 
        <div className='header-block'>
            <span>Product</span>
        </div>
        <div className='header-block'>
            <span>Description</span>
        </div>
        <div className='header-block'>
            <span>Price</span>
        </div>
        <div className='header-block'>
            <span>Quantity</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>
    </div>
    {
        cartItems.map(cartItem => 
          <CheckoutItem key={cartItem.id} item={cartItem} />  )
    }

    <div className ='total'> TOTAL: ${total} </div>
        <StripeButton price={total} />
    </div>
);

//redux
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal 
});

export default connect(mapStateToProps)(Checkout);