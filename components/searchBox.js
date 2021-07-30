import React, {useState} from "react";

export default function SearchBox(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchText, setSearchText] = useState("Select a digital good");
    const handleMouseOver = () => {
      menuOpen ? null : setMenuOpen(true);
    };
    const handleMouseLeave = () => {
      menuOpen ? setMenuOpen(false) : null;
    };
    const handleMenuClick = () => {
      !menuOpen ? setMenuOpen(true) : null;
    };
    const handleMenuSelect = () => {
      menuOpen ? setMenuOpen(false) : null;
    };
    const handleSelect = (item, event) => {
      event.preventDefault();
      // Here, we invoke the callback with the new value
      console.log("clicked good!", item);
      setSearchText(item.name);
      props.onChange(item);
    };
  
    return (
      <div className="selectContainer">
        <div
          onClick={handleMenuClick}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          id="dg-menu"
        >
          <span id="dg-menu-text" className={searchText == "Select a digital good" ? 'gray-text' : ''}>{searchText}</span>{" "}
          <span className={menuOpen ? "arrow up active" : "arrow down active"}></span>
          <div
            onClick={handleMenuSelect}
            onMouseLeave={handleMouseLeave}
            id="dg-menu-dropdown"
            className={menuOpen ? "active" : ""}
          >
            {props.goods.map((item, index) => (
              <a key={item.name + index} href="#" onClick={(e) => handleSelect(item, e)}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }