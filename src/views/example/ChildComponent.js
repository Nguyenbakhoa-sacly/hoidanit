import React from 'react';
import classNames from 'classnames/bind';
import styles from './myComponent.module.scss'

const cx = classNames.bind(styles)
class ChildComponent extends React.Component {
    

    state = {
        showJobs: false,
    }

    handleShowHide= ()=>{
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    
    handleDelte =(job) => {
        this.props.deleteJob(job)

    }

    render() {

        let { arrjobs } = this.props;
        let {showJobs} = this.state

        return(
            <>
            {showJobs ?
                <>
                    <div>
                        {
                            arrjobs.map((item, index) =>{
                                return(
                                    <div key={item.id}>
                                        {item.title} - {item.salary} $  
                                        <span onClick={()=> this.handleDelte(item)} className={cx('delete')}>&#215;</span>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <button onClick={()=> this.handleShowHide()}>hide</button>
                </>
                :
                <button onClick={()=> this.handleShowHide()}>show</button> 
            }

            </>
        )
    }

}
export default ChildComponent