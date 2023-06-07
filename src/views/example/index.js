import React from 'react';
import classNames from 'classnames/bind';
import styles from './myComponent.module.scss'
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
const cx = classNames.bind(styles)
class MyComponent extends React.Component {

    state = {

        arrjobs:[
            {id:'1', title:'Development',salary:'500'},
            {id:'2', title:'Tester',salary:'400 '},
            {id:'3', title:'Project Manager',salary:'500 '}
        ]
        
    }

    addNewjob = (jobs)=>{
        this.setState({
            arrjobs: [...this.state.arrjobs, jobs]
        })
    }

    render() {
        return(
            <>
            <div className={cx('wapper')}>
                <AddComponent
                    addNewjob= {this.addNewjob}
                />
                <ChildComponent 
                arrjobs= {this.state.arrjobs}
                
                />
            </div>
            </>
        )
    }

}
export default MyComponent