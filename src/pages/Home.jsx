import { Link } from 'react-router-dom';
import '../App.css';
import '../assets/simplified-grid.css';

export default function Home() {
    return (
        <>
        <div className='container h-centre bg'>
        <div className='row'>
          <div className='col-12 center'>
            <h1 className='logo'>PHULKARI</h1>
            <h3>Design Co.</h3>
          </div>
        </div>
      </div>
      <footer>
        <div className='container h-centre'>
          <div className='col-12'>
            <Link to={'more'}>about&amp;more</Link>
          </div>
        </div>
      </footer>
      </>
    );
}