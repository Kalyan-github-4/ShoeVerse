import "./Recommended.css";
import Buttons from "../Components/Buttons";

const Recommended = ({ handleClick, activeFilter }) => {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Buttons 
          onClickHandler={handleClick} 
          value="" 
          title="All Products"
          isActive={activeFilter === ""}
        />
        <Buttons 
          onClickHandler={handleClick} 
          value="nike" 
          title="Nike"
          isActive={activeFilter === "nike"}
        />
        <Buttons 
          onClickHandler={handleClick} 
          value="adidas" 
          title="Adidas"
          isActive={activeFilter === "adidas"}
        />
        <Buttons 
          onClickHandler={handleClick} 
          value="puma" 
          title="Puma"
          isActive={activeFilter === "puma"}
        />
        <Buttons 
          onClickHandler={handleClick} 
          value="vans" 
          title="Vans"
          isActive={activeFilter === "vans"}
        />
      </div>
    </div>
  );
};

export default Recommended;