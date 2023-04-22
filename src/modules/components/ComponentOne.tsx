import React from 'react';
import { IProduct } from '../models/IProduct';

interface IProps{
    product :IProduct;
}


const ComponentOne:React.FC<IProps> = (props) => {
  return (
    <>
       <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="card p-4">
                        <pre>Component Three</pre>
                        <pre>{JSON.stringify(props.product)}</pre>
                        </div>
                    </div>
                </div>
        </div>
    </>
  );
}
export default ComponentOne;
