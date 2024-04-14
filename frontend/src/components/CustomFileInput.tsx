import React, { useRef } from 'react';
import { customInputProps } from '../types';

const CustomFileInput: React.FC<customInputProps> = ({ onChange, isOn }) => {
    const ref = useRef<HTMLInputElement>(null);
  
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

  export default CustomFileInput