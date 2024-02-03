import React from 'react'
import "../css/_SideBar.scss";
import { AiOutlineClose, AiOutlineStop } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { cartClear, cartRemoveItem, cartToggle, countChange } from '../../state/cart/cartSlice';
import Button from './Button';

function SideBar() {
    const toggle = useSelector((state) => (state.cart.toggle))
    const meals = useSelector((state) => (state.cart.meals))
    const count = useSelector((state) => (state.cart.count))
    const dispatch = useDispatch();
    return (
        <>
            {toggle &&
                <div className='side-bar'>
                    <div className='side-bar-header'>
                        <AiOutlineClose
                            className='close-icon'
                            onClick={() => dispatch(cartToggle(false))}
                            aria-label="On Click" />
                        <h3>Cart</h3>
                        <button
                            className='clear-button'
                            onClick={() => dispatch(cartClear())}
                            aria-label="On Click">
                            Clear <AiOutlineStop className='icon' />
                        </button>
                    </div>
                    <div className='menu'>
                        <div className="menu-body">
                            {
                                meals.map((meal, index) => (
                                    <div
                                        key={index}
                                        className={`${meals && "shadow"} sub-menu`}
                                    >
                                        <img src={meal.strMealThumb} alt={`${meal.idMeal}`} />
                                        <div className='name'>
                                            <p>{meal.strMeal}</p>
                                            <p>{30 * count[index]}$</p>
                                        </div>
                                        <div className='count'>
                                            <button onClick={() => {
                                                if (count[index] > 1) {
                                                    dispatch(countChange({ type: "decrement", index }))
                                                } else {
                                                    dispatch(cartRemoveItem(index))
                                                }
                                            }}
                                                aria-label="On Click">
                                                -
                                            </button>
                                            <p>{count[index]}</p>
                                            <button onClick={() => dispatch(countChange({ type: "increment", index }))}
                                                aria-label="On Click">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="check-out">
                            {meals.length > 0 && <Button text={"Check Out"} />}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SideBar