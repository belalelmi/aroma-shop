import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
// import { lychee } from "../../utils/Lists";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import CustomButton from "./CustomButton";
import FruitWithText from "./FruitWithText";
import "../../styles/common/Scent.scss";

const Scent = ({ id, img, name, details, rating, favorite, category, content }) => {
  return (
    <div className="scent">
      <div className="favorite-heart">
        {favorite ? (
          <Favorite color="error" />
        ) : (
          <FavoriteBorder color="error" />
        )}
      </div>

      <img className="scent-pic" src={img} alt="" />
      <div className="content">
        <h3>{name}</h3>
        <h4>{category}</h4>
        <h4>{details}</h4>
        <Rating value={rating} readOnly size="small" />

        <div className="wrap-container">
          {/* <FruitWithText name="Lychee" img={lychee} />
          <FruitWithText name="Lychee" img={lychee} />
          <FruitWithText name="Lychee" img={lychee} />
          <FruitWithText name="Lychee" img={lychee} />
        <FruitWithText name="Lychee" img={lychee} /> */}

          {content && content.map((item, index) => (

            <FruitWithText key={index} name={item.name} img={item.imgUrl} />

          ))}
        </div>
      </div>
      <Link to={`/product/${id}`}>
        <CustomButton text="View Details" />
      </Link>
    </div>
  );
};

export default Scent;
