
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Todolist.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
class AddTodoList extends React.Component {

    state = {
        title:''
    }
    handleTodoChange= (e)=>{
        this.setState({
            title: e.target.value

        })

    }

    handleAdd =()=>{

        if(!this.state.title){
            toast.warning("Bạn chưa điền thông tin!");
            return;
        }
        toast.success("Thành công!");
        this.props.addNewTodo(
            {
                id:Math.floor(Math.random() * 1001 ).toString(),
                title: this.state.title
            }
        )
        this.setState({title:''})
    }
    render() {
        return(
            <>
                <div className={cx('container')}>
                    <input 
                        className={cx('todo_input')} 
                        type="text"
                        value={this.state.title} 
                        onChange={(e)=> this.handleTodoChange(e)}
                    />
                    <button onClick={()=> this.handleAdd()} className={cx('btn_add')}>ADD</button>
                </div>
            </>
        )
    }
}

export default AddTodoList