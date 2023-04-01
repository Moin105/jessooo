import React from 'react';
import TextArea from 'antd/es/input/TextArea'


function AddSops() {
  return (
    <React.Fragment>
                 <div className='container-sop'>
            <h3>Add SOP</h3>
            {/* <Sops/> */}
            <div className='sop-container-row'>
                <input type='text' placeholder='Search SOPs'/>
                <input type='text' placeholder='Search SOPs'/>
                {/* <button>Add SOP</button> */}
            </div>
            <div className='sop-container-row'>
                <input type='text' placeholder='Search SOPs'/>
                <TextArea/>
              
            </div>  
            <button>Create SOP</button>
            </div>
    </React.Fragment>
  )
}

export default AddSops