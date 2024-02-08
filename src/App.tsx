import { useState } from 'react'
import './App.css'
import DoctorList from './components/DoctorList'
import Header from './components/Header'
import LpuList from './components/LpuList'

function App() {
  const [selectedLpuId, setSelectedLpuId] = useState<string>('');

  const handleLpuSelect = (selectedLpu: {id: string}) => {
    setSelectedLpuId(selectedLpu.id);
  };

  return (
    <>
      <Header/>
      <LpuList 
        onLpuSelect={handleLpuSelect}/>
      <DoctorList 
        selectedLpuId={selectedLpuId}  
        />
    </>
  )
}

export default App;
