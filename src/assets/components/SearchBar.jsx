import React, { useEffect, useState } from "react";
import "../css/_SearchBar.scss";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchMeals } from "../../state/foodSearch/foodSearchSlice";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const meals = useSelector((state) => (state.foodSearch.meals))

  const [inputFocused, setInputFocused] = useState(false);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setInputFocused(false);
  };

  const navigate = useNavigate();
  const handleClickLink = (meal) => {
    navigate(`/product/${meal.idMeal}`, { state: { meal: meal } });
  };

  const ProductCards = () => {
    return meals?.slice(0, 6)?.map((meal) => (
      <button
        key={meal.idMeal}
        onClick={() => handleClickLink(meal)}
        className="sub-search-menu"
      >
        <img src={meal.strMealThumb} alt={`${meal.idMeal} search`} />
        <p>{meal.strMeal}</p>
      </button>
    ));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMeals(searchValue));
  }, [dispatch, searchValue]);

  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <input
        type="search"
        value={searchValue}
        onChange={handleSearchChange}
        onFocus={() => setInputFocused(true)}
        onBlur={() =>
          setTimeout(() => {
            setInputFocused(false);
          }, 150)
        }
        placeholder="Search"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <BiSearch />
      </button>
      {inputFocused && (
        <div className={`${meals && "search-shadow"} search-menu`}>
          {ProductCards()}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
