
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.module.scss';
import styles from './App.module.scss';
import classNames from 'classnames/bind';
import MyComponent from './example';
import ListTodo from './todos/ListTodo';
const cx = classNames.bind(styles);
function App() {
  return (
    <div className={cx('app')}>
      <ListTodo/>

      
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
  );
}

export default App;
