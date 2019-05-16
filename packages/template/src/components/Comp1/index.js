import React from 'react';
import './index.less'
import testImg from '@/assets/image/test.jpeg';
const Comp1 = ()=> {
    return (
        <div className="comp1-container">
          <div className="part1">
            comp1-part1
          </div>
          <img src={testImg} style={{width: '100px', height: '100px'}}/>
        </div>
    )
}

export default Comp1;
