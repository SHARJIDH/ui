/* eslint-disable react/prop-types */

import "./Grid.css"
const Grid = () => {
    return (
        <div className="container">
            <div className="item-1">
                <img src="/images/image2.jpg" alt="image1" />
            </div>
            <div className="item-2">
                <img src="/images/image1.jpg" alt="image2" />
            </div>
            <div className="item-3">
                <img src="/images/image3.jpg" alt="image3" />
            </div>
            <div className="item-4">
                <img src="/images/image4.jpg" alt="image3" />
            </div>
            <div className="text-1">
                <h1>5000+</h1>
                <p>TOURISTS</p>
            </div>
            <div className="text-2">
                <h1>300+</h1>
                <p>TOURISTS</p>
            </div>
            <div className="text-3">
                <h1>150+</h1>
                <p>HOSTELS</p>
            </div>

        </div>
    );
};

export default Grid;

