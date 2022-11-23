import { Link } from 'react-router-dom';
import '../App.css';
import '../assets/simplified-grid.css';

export default function FourOhFour() {
  return (
    <>
      <nav>
        <div className='container h-centre'>
          <div className='col-12'>
            <Link to={'/'} className='back'>Home</Link>
          </div>
        </div>
      </nav>
      <div className='container h-centre'>
        <div className='row'>
          <div className='col-12 center'>
            <h1 className='logo'>404.</h1>
            <h3>the page you've requested was not found.</h3>
          </div>
        </div>
      </div>
    </>
  );
}