import React, { useEffect, useState } from "react";
import "../css/_Menu.scss";
import { MdDeliveryDining } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../state/foodMenu/foodMenuSlice";

const Menu = () => {
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

  const meals = useSelector((state) => (state.foodMenu.meals))
  const categories = useSelector((state) => (state.foodMenu.categories))
  const [categoryValue, setCategoryValue] = useState("Beef");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const categoriesWithMeals = categories.filter((category) =>
    meals.some(
      (meal) =>
        meal.strCategory === category.strCategory &&
        category.strCategory !== "Miscellaneous"
    )
  );

  const categoryMeals = meals.filter((meal) => meal.strCategory === categoryValue).slice(0, screenWidth < 700 ? 6 : meals.length);

  return (
    <main id="main" className="menu-section">
      <h1 className="h1">Menu</h1>
      <section className="menu-sub-section">
        {categoriesWithMeals.map((category) => (
          <div
            key={category.idCategory}
            onClick={() => setCategoryValue(category.strCategory)}
          >
            <div className="button-row">
              <button
                className={` ${category.strCategory === categoryValue && "select "
                  }  category-button h3 `}
              >
                {category.strCategory}
              </button>
            </div>
            <div className="meals">
              {categoryValue === category.strCategory &&
                categoryMeals.map((meal) => (
                  <div key={meal.idMeal} className="meal">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />

                    <div>
                      <p className="h3">{meal.strMeal}</p>
                      <p className="price h3">30 $</p>
                    </div>

                    <button className="icon-button">
                      <MdDeliveryDining className="icon" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Menu;
