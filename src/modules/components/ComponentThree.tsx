import React , {useState} from 'react';
import { IProduct } from '../models/IProduct';
import ComponentTwo from './ComponentTwo';

interface IProps{
    product : IProduct;
}

const ComponentThree:React.FC<IProps>= (props) => {
return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-12 mt-4">
            <div className="card p-4">
            <pre>Component One</pre>
            <pre>{JSON.stringify(props.product)}</pre>
            <ComponentTwo product={props.product}/>
            </div>
            </div>
        </div>
    </div>
    </>
  );
}
export default ComponentThree;
