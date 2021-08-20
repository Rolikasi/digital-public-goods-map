import React, {forwardRef, useImperativeHandle, useState} from "react";

const SearchBox = forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState(
    props.selectedGood
      ? props.selectedGood
      : props.selectedCountry
      ? props.selectedCountry
      : ""
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
    props.onSelectGood(item);
  };
  const handleSelectCountry = (item, event) => {
    event.preventDefault();
    // Here, we invoke the callback with the new value
    setInputValue(item.name);
    props.onSelectCountry(item.code);
  };
  const handleClear = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setInputValue("");
    props.clearSelectedGood();
  };
  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
    event.target.style.height = "2rem";
    event.target.style.height = event.target.scrollHeight + "px";
  };
  const changeInput = (value) => {
    setInputValue(value);
  };
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
        <textarea
          className="searchInput"
          type="text"
          value={inputValue}
          placeholder="Select a digital good or country"
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
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item, index) => (
              <a key={item.name + index} href="#" onClick={(e) => handleSelect(item, e)}>
                {item.name}
              </a>
            ))}
          {Object.values(props.countries)
            .filter(
              (el) => el.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
            )
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item, index) => (
              <a
                key={item.name + index}
                href="#"
                onClick={(e) => handleSelectCountry(item, e)}
              >
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
