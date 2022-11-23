import { Link } from 'react-router-dom';
import '../App.css';
import '../assets/simplified-grid.css';

export default function Home() {
    return (
        <>
        <nav>
        <div className='container h-centre'>
          <div className='col-12 right'>
            <Link to={'more'}>about&amp;more</Link>
          </div>
        </div>
      </nav>
        <div className='container h-centre bg'>
        <div className='row'>
          <div className='col-12 center'>
            <h1 className='logo'>PHULKARI</h1>
            <h3>Design Co.</h3>
            <br/>
            <hr/>
            <br/>
            <div className='col-12'>
            <p>Phulkari is a start up design agency based out of Toronto, Ontario. </p>
             <p><a className='highlighted_link' href={'/more'}>More info</a></p>
            </div>
          </div>
        </div>
      </div>

      </>
    );
}