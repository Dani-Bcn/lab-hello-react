import React from 'react';
import '../App.css';
import imgDeclarative from '../images/icon2.png'

const Declarative = () => {
    return (       
        <div className='cardsArticle'>
            <img src={imgDeclarative} alt="" />           
            <h3>Components</h3>
            <p>
                Build encapsuled components that manage state.
            </p>   
        </div>    
    );
}
export default Declarative;