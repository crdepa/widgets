import React from "react";

const Accordion = ({ items }) => {
    const renderedItems = items.map(item => {
        // Remeber: Every return item needs to have a key
        // Use React.Fragment as a element instead a div in order to remove extra border
        return <React.Fragment key={item.title}>
            <div className="title active">
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className="content active">
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    });

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
};

export default Accordion;
