import React , {useState} from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import ComponentThree from './modules/components/ComponentThree';
import { IProduct } from './modules/models/IProduct';

const App: React.FC= () => {
    const [product,setProduct] = useState<IProduct>({
        name : "Apple iphone",
        price : 50000,
        description : "Extra Features"
    })
    return (
        <>
        <NavBar heading={"Component Intraction"}/>
            {/* Props Drilling Child to parent */}
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="card p-4">
                        <pre>App Component</pre>
                        <ComponentThree product={product}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default App;
