import React, { useContext } from "react";

import { AppContext } from "../context/AppContext";
import '../styles/components/Sorter.css'

const Sorter = () => {
    const { setSorter } = useContext(AppContext);
  return (
    <div className="sorter">
      <select className="sorter-selector" name="sorter" id="sorter" onChange={(item) => setSorter(item.target.value)}>
        <option className="sorter-selector-option" value="Default">Default</option>
        <option className="sorter-selector-option" value="Title(A-Z)">Title (A-Z)</option>
        <option className="sorter-selector-option" value="Title(Z-A)">Title (Z-A)</option>
        <option className="sorter-selector-option" value="Artist(A-Z)">Artist (A-Z)</option>
        <option className="sorter-selector-option" value="Artist(Z-A)">Artist (Z-A)</option>
        <option className="sorter-selector-option" value="Price(High to Low)">Price(High to Low)</option>
        <option className="sorter-selector-option" value="Price(Low to High)">Price(Low to High)</option>
      </select>
    </div>
  );
};

export { Sorter };
