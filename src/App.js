import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/global/navigation/index'
import Footer from './components/global/footer/index'
import Finance from './components/finance/index'
import VendorManagement from './components/vendorManagement/index'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route exact path='/finance' component={Finance} />
      <Route exact path='/vendor-management' component={VendorManagement} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
