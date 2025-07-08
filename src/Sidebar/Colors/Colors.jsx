// import "./Colors.css";
import Input from "../../Components/Input";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <div>
        <Input handleChange={handleChange} type="radio" value="" name="color" title="All" id="color-all" />
        <Input handleChange={handleChange} type="radio" value="red" name="color" title="Red" id="color-red" />
        <Input handleChange={handleChange} type="radio" value="green" name="color" title="Green" id="color-green" />
        <Input handleChange={handleChange} type="radio" value="blue" name="color" title="Blue" id="color-blue" />
        <Input handleChange={handleChange} type="radio" value="black" name="color" title="Black" id="color-black" />
        <Input handleChange={handleChange} type="radio" value="white" name="color" title="White" id="color-white" />

      </div>
    </div>
  );
};

export default Colors;
