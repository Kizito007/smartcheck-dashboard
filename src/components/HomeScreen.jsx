import React from 'react'
import Header from '../components/Header';
import SelectBar from './SelectBar';
import BasicTable from './Table';

const HomeScreen = () => {
  return (
    <>
    <Header />
    <div className='backdrop'>
        <div className='rect-container'>
            <div className='rectangle'>
                <h3>Application Status</h3>
                <div className='rect-stats'>
                    <div>
                        <div className='nums num1'>10</div> <br/>
                        <span>All</span>
                    </div>
                    <div>
                        <div className='nums num2'>6</div> <br/>
                        <span>Available</span>
                    </div>
                    <div>
                        <div className='nums num3'>4</div> <br/>
                        <span>Critical</span>
                    </div>
                </div>
            </div>
            <div className='rectangle'>
                <h3>Servers</h3>
                <div className='rect-stats'>
                    <div>
                        <div className='nums num1'>4</div> <br/>
                        <span>All</span>
                    </div>
                    <div>
                        <div className='nums num2'>2</div> <br/>
                        <span>Active</span>
                    </div>
                    <div>
                        <div className='nums num4'>2</div> <br/>
                        <span>Inactive</span>
                    </div>
                </div>
            </div>
            <div className='rectangle'>
                <h3>Health check counts</h3>
                <div style={{textAlign: "center", margin: "60px 0"}}> 
                <h1 style={{color: "#1b1164"}}>60</h1> <br/> Counts 
                </div>
            </div>
        </div>
        <SelectBar />
        <BasicTable />
    </div>
    </>
  )
}

export default HomeScreen