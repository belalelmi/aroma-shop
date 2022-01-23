import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Scent from "./common/Scent";
import "../styles/ScentsWithSearch.scss";
import { listProducts } from "../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";
// import SearchBar from "./common/SearchBar";
// import FilterSortInExplorePage from "./FilterSortInExplorePage";

const ScentsWithSearch = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <div className="scents-with-search">
        {/* <SearchBar query={query} setQuery={setQuery} /> */}
        {/* <FilterSortInExplorePage filters={filters} setFilters={setFilters} /> */}

        <h1 className="heading">Filtered Scents</h1>
        <h4 className="subheading">Choose any of them</h4>
        {loading ? (
          <Loader />
          // <h2>Loading...</h2>
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <div className="scent-blocks">
            {products.map((s, i) => (
              <Scent
                key={i}
                id={s._id}
                name={s.name}
                details={s.details}
                rating={s.rating}
                img={s.image}
                category={s.category}
                content={s.content}
              />
            ))}
          </div>
        )}

        {/* <div className="scent-blocks">
            {filtered.map((s, i) =>
              s.isEmpty ? (
                <div key={i} className="empty-div" />
              ) : (
                <Scent
                  key={i}
                  _id={i}
                  name={s.name}
                  details={s.details}
                  rating={s.rating}
                  img={s.image}
                />
              )
          
          </div>
        )} */}
      </div>
    </>
  );
};

export default ScentsWithSearch;
