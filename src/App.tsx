import { useState } from 'react'
import './App.css'
import DoctorList from './components/doctorList/DoctorList'
import Header from './components/header/Header'
import LpuList from './components/lpuList/LpuList'

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
