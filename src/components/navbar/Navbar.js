import {Link} from 'react-router-dom'
const Navbar = ()=>{

    return (
    

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to='/listec2'>List EC2</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/createec2'>Create EC2</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/lists3'>List S3</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/creates3'>Create S3</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/listdynamodb'>List DynamoDb</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to='/deletedynamodb'>delete DynamoDb</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>


    )
}

export default Navbar;