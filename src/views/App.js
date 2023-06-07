
import './App.module.scss';
import styles from './App.module.scss';
import classNames from 'classnames/bind';
import MyComponent from './example';
const cx = classNames.bind(styles);
function App() {
  return (
    <div className={cx('app')}>
      <MyComponent/>
    </div>
  );
}

export default App;
