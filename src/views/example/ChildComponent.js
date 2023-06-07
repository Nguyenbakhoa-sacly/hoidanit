import React from 'react';
import classNames from 'classnames/bind';
import styles from './myComponent.module.scss'

const cx = classNames.bind(styles)
class ChildComponent extends React.Component {
    

    state = {
        showJobs: false,
    }
    handleShowHide(){
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {

        let { arrjobs } = this.props;
        let {showJobs} = this.state
        return(
            <>
            {showJobs ?
                <>
                    <div className={cx('wapper')}>

                        {
                            arrjobs.map((item, index) =>{
                                return(
                                    <div key={item.id}>
                                        {item.title} - {item.salary} $
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