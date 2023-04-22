import React from 'react';
import ComponentOne from './ComponentOne';
import { IProduct } from '../models/IProduct';

interface IProps{
    product : IProduct;
}

const ComponentTwo:React.FC<IProps>= (props) => {
  return (
    <>
         <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="card p-4">
                        <pre>Component Two</pre>
                        <pre>{JSON.stringify(props.product)}</pre>
                        <ComponentOne product={props.product}/>
                        </div>
                    </div>
                </div>
         </div>    
    </>
  );
}
export default ComponentTwo;
