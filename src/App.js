import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import { Fragment } from 'react';
import {Route,Routes} from 'react-router-dom'
import Listec2 from './components/ListEc2/Listec2';
import Lists3 from './components/ListS3/Lists3';
import Listdynamodb from './components/ListDynamoDB/Listdynamodb';
import Creates3 from './components/CreateS3/Creates3';
import Deletedynamo from './components/deletedynamo/Deletedynamo';

function App() {
  return (
  <Fragment>
      <Navbar/>

      <Routes>
        
        <Route path='/listec2' element={<Listec2/>}/>
        <Route path='/lists3' element={<Lists3/>}/>
        <Route path='/listdynamodb' element={<Listdynamodb/>}/>
        <Route path='/creates3' element={<Creates3/>}/>
        <Route path='/deletedynamodb' element = {<Deletedynamo/>}/>
      </Routes>

  
  </Fragment>
  );
}

export default App;
