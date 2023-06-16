
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.module.scss';
import styles from './App.module.scss';
import classNames from 'classnames/bind';
import MyComponent from './example';
import ListTodo from './todos/ListTodo';
import Home from './example/Home';
import Nav from './nav/Nav';
const cx = classNames.bind(styles);
function App() {
  return (
    <Router>
      <div className={cx('app')}>
        <Nav/>
        <Switch>
          <Route path="/about" >
            <MyComponent />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>

        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
