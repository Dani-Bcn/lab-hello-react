import './App.css';
import Declarative from './components/Declarative';
import Components from './components/Components';
import SingleWay from './components/Single-Way';
import Button from './components/button';
import Jsx from './components/Jsx';
export default function App() {
  return ( 
      
     <div className="App">
      <header className='header'>
        <div className='cardHeader'>
          <h1>Say hello to ReactJS</h1>
          <p> You will learn to use the most popular fontend library,and become a super Ninja developer. </p>
          <Button />
        </div>    
      </header>
      <article>
        <Declarative />
        <Components /> 
        <SingleWay />
        <Jsx />
      </article>     
     </div>
  
  );
}
