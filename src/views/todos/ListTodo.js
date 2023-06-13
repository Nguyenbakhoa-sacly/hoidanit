
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Todolist.module.scss'
import AddTodoList from './AddTodoList';
import { toast } from 'react-toastify';


const cx = classNames.bind(styles)
class ListTodo extends React.Component {
    state={
        todolist:[
            {id:'1', title:'Quet nha'},
            {id:'2', title:'Lau nha'},
            {id:'3', title:'Rua bat'},
        ],
        editTodo:{

        }
    }
    //add
    addNewTodo = (todo)=>{
        this.setState({
            todolist: [...this.state.todolist, todo]
        })
    }
    //delete
    handleDelete =(todo)=>{
        let currentTodo = this.state.todolist
        currentTodo = currentTodo.filter(item=>item.id !== todo.id)
        this.setState({
            todolist: currentTodo
        })
        toast.success('Xóa thành công!')
    }
    //edit
    handleEdit= (todo) => {
        let {editTodo, todolist} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if(isEmptyObj === false && editTodo.id === todo.id) {
            
            let todoListCopy =[...todolist]

            // //Find index of specific object using findIndex method.    
            let objIndex = todoListCopy.findIndex((item => item.id === todo.id));

            // //Log object to Console.
            // console.log("Before update: ", myArray[objIndex])

            // //Update object's name property.
            todoListCopy[objIndex].title = editTodo.title;

            this.setState({
                todolist: todoListCopy,
                editTodo:''
            })
            toast.success('Cập nhật thành công!')
            return ;
        }
            this.setState({
                editTodo: todo
            })
        
    }
    handleOnchangeEdit=(e)=>{
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = e.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { todolist, editTodo} = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <div className={cx('wapper')}>
                    <h1>Hello Todolist</h1>
                    <AddTodoList 
                        addNewTodo ={this.addNewTodo}
                    />
                    <div className={cx('list_todo')}>
                        {
                            todolist.map((item, index)=>{
                                return(
                                    <div key={item.id} className={cx('list_todo-item')}>
                                        {
                                            isEmptyObj === true  ? 
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                            { editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - 
                                                    <input 
                                                        className={cx('input_edit')} 
                                                        value={editTodo.title}
                                                        onChange={(e)=> this.handleOnchangeEdit(e)}
                                                    />
                                                </span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                            </>
                                        }
                                        <div>
                                            <button 
                                                onClick={()=> this.handleEdit(item)} 
                                                className={cx('btn_edit-todo')}>
                                                {
                                                isEmptyObj === false && editTodo.id === item.id ?
                                                    'Save':'Edit'
                                                }
                                            </button>
                                            <button  onClick={()=> this.handleDelete(item)} 
                                                className={cx('btn_delete-todo')}>delete</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        )
    }
}

export default  ListTodo