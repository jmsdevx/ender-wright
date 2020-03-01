import React from 'react';
import '../assets/sass/dropdown.scss';

export default function Dropdown(
  displayText,
  openMenu,
  selectedMenuKeys,
  menuKey,
  children
) {
  return (
    <>
      <div className="dropdown" onClick={() => openMenu(menuKey)}>
        <p>Listen Now</p>
        <span className="icon solid fa-angle-down" />
      </div>
      {/* {selectedMenuKeys.indexOf(menuKey) > -1 && children} */}
    </>
  );
}
