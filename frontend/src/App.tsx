import React, { useState, useEffect } from 'react';
import ButtonComponent from './components/ButtonComponent';
import UserCardComponent from './components/UserCardComponent';
import useLoadData from './hooks/useLoadData';
import CustomFileInput from './components/CustomFileInput';
import { UserData } from './types';
import axios from 'axios';
import './App.css';

function App() {
  const {getDataApi, dataApi} = useLoadData()
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [searchedWord, setSearchedWord] = useState<string>('');
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=> {
      setSearchedWord(e.target.value);
      getDataApi(e.target.value)
    }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target?.files? e.target?.files[0] : null;
      setSelectedFile(file);
    };

  const handleUpload = async() => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);
    try{
      const response = await axios.post('http://localhost:3000/api/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
      getDataApi(null);
      setSelectedFile(null);
    } catch (error) {
      console.error('Upload failed:', error);
      if(error instanceof Error) alert(error.message)
    }
  };

  useEffect(()=>{
   getDataApi(null)
  },[])

  return (
    <>
      <div>
        <div className='panel'>
          <img className='logo' src='/iconSnP.svg' alt='SnP logo'/>
          <div className='buttonContainer'>
            <CustomFileInput onChange={handleFileChange} isOn={selectedFile !== null}/>
            <ButtonComponent handleClick={handleUpload} isOn={selectedFile !== null} label='Upload file'/>
          </div>
          <input
           type="text"
           name='SearchInput'
           placeholder='Search...'
           value={searchedWord}
           onChange={handleSearch}
           className='searchInput'
          />
        </div>
        <div className='cardsContainer'>
          {
            dataApi?.map((user:UserData)=>(
              <div key={user.id}>
                <UserCardComponent
                  name={user.name}
                  city={user?.city}
                  country={user?.country}
                  favorite_sport={user?.favorite_sport}
                />
              </div>
            ))
            }
        </div>
      </div>
    </>
  )
}

export default App
