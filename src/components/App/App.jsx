import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Information from '../Information/Information';
import Surveyapp from '../Surveyapp/Surveyapp';
import Message from '../Message/Message';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../Layout/Layout';

function App() {
  return (
    <div className="container p-0">
    <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/">
          <Information />
        </Route>
        <Route path="/survey">
          <Surveyapp />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
      </Layout>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
