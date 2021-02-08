import React from 'react';

const FilterBar = (props) => {
    return(
        <div className="categories">
            <h5>Category filters</h5>
            {props.categories.map(category => {
                if (props.selectedCategory === category) {
                    return (
                        <button className="selected">{category}</button>
                    )
                } else {
                    return (
                        <button onClick={() => props.changeSelectedCategory(category)}>{category}</button>
                    )
                }
            })}
        </div>
        
    )
}

export default FilterBar;