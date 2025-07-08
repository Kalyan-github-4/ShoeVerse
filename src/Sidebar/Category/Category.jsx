// import "./Category.css";
import Input from "../../Components/Input";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        {/* <label htmlFor="all" className="sidebar-label-container">
          
          <input type="radio" name="category" id="all" value="" />
          <span className="checkmark"></span>All
        </label> */}

        <Input handleChange={handleChange} type= "radio" value="" name="category" title="All" />
        <Input handleChange={handleChange} type= "radio" value="sneakers" name="category" title="Sneakers" />
        <Input handleChange={handleChange} type= "radio" value="flats" name="category" title="Flats" />
        <Input handleChange={handleChange} type= "radio" value="sandels" name="category" title="Sandels" />
        <Input handleChange={handleChange} type= "radio" value="heels" name="category" title="Heels" />
      </div>
    </div>
  );
};

export default Category;

