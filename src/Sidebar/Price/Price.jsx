import "./Price.css";
import Input from "../../Components/Input";

const Price = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <Input handleChange={handleChange} type="radio" value="" name="price" title="All" />
        <Input handleChange={handleChange} type="radio" value="0-50" name="price" title="$0 - $50" />
        <Input handleChange={handleChange} type="radio" value="50-100" name="price" title="$50 - $100" />
        <Input handleChange={handleChange} type="radio" value="100-150" name="price" title="$100 - $150" />
        <Input handleChange={handleChange} type="radio" value="150-0" name="price" title="Over $150" />
      </div>
    </div>
  );
};

export default Price;