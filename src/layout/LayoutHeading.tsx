import React from 'react';

interface IProps{
    heading : string;
}

const LayoutHeading:React.FC<IProps> = (props) => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <p className="h3 text-success">{props.heading}</p>
                    <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet architecto assumenda consequuntur eaque earum eius magni minima necessitatibus officia pariatur perferendis perspiciatis provident soluta temporibus vel, voluptate? Distinctio, ut.</p>
                </div>
            </div>
        </>
    );
}
export default LayoutHeading;
