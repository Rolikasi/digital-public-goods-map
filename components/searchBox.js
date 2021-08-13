import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";

const SearchBox = forwardRef((props, ref) => {
  console.log("selectedgoodname", props.selectedGood);
  const [menuOpen, setMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState(
    props.selectedGood ? props.selectedGood : ""
  );
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
    setInputValue(item.name);
    props.onChange(item);
  };
  const handleClear = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setInputValue("");
    props.clearSelectedGood();
  };
  const handleChangeInput = (event) => {
    console.log("handlechange", event.target.value);
    setInputValue(event.target.value);
    event.target.style.height = "2rem";
    event.target.style.height = event.target.scrollHeight + "px";
  };
  const changeInput = (value) => {
    setInputValue(value)
  }
  useImperativeHandle(ref, () => {
    return {
      changeInput: changeInput,
    };
  });

  return (
    <div className="selectContainer">
      <div
        onClick={handleMenuClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        id="dg-menu"
      >
        {console.log("selectedgoodname INPUT VALUE", inputValue)}
        <textarea
          className="searchInput"
          type="text"
          value={inputValue}
          placeholder="Select a digital good"
          onChange={(e) => handleChangeInput(e)}
        ></textarea>
        <span className={menuOpen ? "arrow up active" : "arrow down active"}></span>
        <div
          onClick={handleMenuSelect}
          onMouseLeave={handleMouseLeave}
          id="dg-menu-dropdown"
          className={menuOpen ? "active" : ""}
        >
          {props.goods
            .filter(
              (el) => el.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
            )
            .map((item, index) => (
              <a key={item.name + index} href="#" onClick={(e) => handleSelect(item, e)}>
                {item.name}
              </a>
            ))}
        </div>
      </div>
      <div className="closeIcon" onClick={(e) => handleClear(e)}>
        <span>x</span>
      </div>
    </div>
  );
});
export default SearchBox;
