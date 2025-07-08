import "./sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ handleChange }) => {
  return (
    <aside className="sidebar">
      
      <div className="filter-section">
        <Category handleChange={handleChange} />
      </div>
      
      <div className="line"></div>
      
      <div className="filter-section">
        <Price handleChange={handleChange} />
      </div>
      
      <div className="line"></div>
      
      <div className="filter-section">
        <Colors handleChange={handleChange} />
      </div>
    </aside>
  );
};

export default Sidebar;