import React, { useRef } from 'react';

const CustomFileInputTest = ({ onChange, isOn }) => {
    const ref = useRef(null);
  
    const handleClick = () => {
      ref.current?.click();
    };
  
    return (
      <div className={isOn ? 'custom-file-input-selected' :'custom-file-input'} onClick={handleClick}>
        <input ref={ref} type='file' accept='.csv' onChange={onChange} style={{ display: 'none' }} />
       {isOn ? 'File Selected' : 'Select CSV File'}
      </div>
    );
  };

  export default CustomFileInputTest