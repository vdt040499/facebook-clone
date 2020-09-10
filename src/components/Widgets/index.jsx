import React from 'react'
import './Widgets.css';

function Widget() {
    return (
        <div className="widgets">
            <iframe 
                title="The kids world"
                src="https://tiki.vn/"
                width="100%"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widget
