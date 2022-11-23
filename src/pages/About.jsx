import { Link } from 'react-router-dom';
import '../App.css';
import '../assets/simplified-grid.css';

export default function Home() {
  return (
    <>
      <nav>
        <div className='container h-centre'>
          <div className='col-12'>
            <Link to={'/'} className='back'>Home</Link>
          </div>
        </div>
      </nav>
      <br/>
      <br/>
      <div className='container'>
        <div className='row'>
          <div className='col-12 '>
            <h1 className='logo'>ABOUT</h1>
            <h3>about phulkari &amp; other information.</h3>
          </div>
          <div className='col-12'>
            <p>Phulkari is a start up design agency based out of Toronto, Ontario. We're passionate
              about design and development. <em>Watch this space.</em> More to come soon!
            </p>
          </div>
        </div>
      </div>

    </>
  );
}