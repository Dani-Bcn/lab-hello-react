import React from 'react';
import '../App.css';
import imgDeclarative from '../images/icon1.png'

const Declarative = () => {
    return (          
        <div className='cardsArticle'>
            <img src={imgDeclarative} alt="" />           
            <h3>Daclarative</h3>
            <p>
                React makes it
                paintless to create
                interactive UIs.
            </p>                   
        </div>
    );
}
export default Declarative;
