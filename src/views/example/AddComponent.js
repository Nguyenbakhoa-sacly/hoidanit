import React from 'react';
import classNames from 'classnames/bind';
import styles from './myComponent.module.scss'
const cx = classNames.bind(styles)
class AddComponent extends React.Component {

    state={
        title:'',
        salary:''
    }
    handleChangeTitleJob = (e)=>{
        this.setState({
            title: e.target.value
        })
    }
    handleChangeSalary = (e)=>{
        this.setState({
            salary: e.target.value
        })
    }

    handleSubmit= (e)=>{
        e.preventDefault()
        if(!this.state.title || !this.state.salary) {
            alert('Thiếu!')
            return;
        }
        
        this.props.addNewjob({
            id:Math.floor(Math.random() * 1001).toString(),
            title:this.state.title,
            salary:this.state.salary
        })
        this.setState({
            title:"",
            salary:""
        });
    }

    render() {
        return (
            <>
                <form className={cx('form')}>
                    <label htmlFor='fname'>Job title:</label><br />
                    <input type="text" value={this.state.title}
                    onChange={(e)=>this.handleChangeTitleJob(e)}

                    /><br />
                    <label htmlFor='lname'>Salary:</label><br />
                    <input type="text" value={this.state.salary}
                        onChange={(e)=>this.handleChangeSalary(e)}
                    /><br />
                    <input type="submit"
                        onClick={(e)=>this.handleSubmit(e)}
                        
                    />
                </form>
            </>
        )
    }

}

export default AddComponent;