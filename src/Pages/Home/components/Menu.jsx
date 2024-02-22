import React, { useEffect, useState } from "react";
import "../css/_Menu.scss";
import { MdDeliveryDining } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../state/foodMenu/foodMenuSlice";
import { useNavigate } from "react-router-dom";
import { cartAddItem, cartToggle } from "../../../state/cart/cartSlice";

const Menu = () => {
  const sideBarMeals = useSelector((state) => (state.cart.meals))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const addToCart = (meal) => {
    dispatch(cartToggle(true))
    if (!sideBarMeals.includes(meal)) {
      dispatch(cartAddItem(meal))
    }
  };

  const navigate = useNavigate();
  const handleClickLink = (meal) => {
    navigate(`/product/${meal.idMeal}`, { state: { meal: meal } });
  };

  const meals = useSelector((state) => (state.foodMenu.meals))
  const categories = useSelector((state) => (state.foodMenu.categories))
  const [categoryValue, setCategoryValue] = useState("Beef");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const categoriesWithMeals = categories.filter((category) =>
    meals.some(
      (meal) =>
        meal.strCategory === category.strCategory && category.strCategory !== "Miscellaneous"
    )
  );

  const categoryMeals = meals.filter((meal) => meal.strCategory === categoryValue);

  return (
    <main id="main" className="menu-section">
      <h1 className="h1">Menu</h1>
      <section className="menu-sub-section">
       <div className="buttons">
       {categoriesWithMeals.map((category) => (
          <button
            className={` ${category.strCategory === categoryValue && "select button-row "
              }  category-button h3 `}
            key={category.idCategory}
            onClick={() => setCategoryValue(category.strCategory)}
          // className=""
          >
            {category.strCategory}
          </button>
        ))}
       </div>
        {categoriesWithMeals.map((category) => (
          <div className="meals">
            {categoryValue === category.strCategory &&
              categoryMeals.map((meal) => (
                <div key={meal.idMeal} className="meal">
                  <img src={meal.strMealThumb} alt={meal.strMeal} onClick={() => handleClickLink(meal)} />

                  <div>
                    <p className="h3">{meal.strMeal}</p>
                    <p className="price h3">30 $</p>
                  </div>

                  <button
                    className="icon-button"
                    onClick={() => addToCart(meal)}>
                    <MdDeliveryDining className="icon" />
                  </button>
                </div>
              ))}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Menu;
