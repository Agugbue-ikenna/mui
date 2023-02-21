import React from "react";
import { MyAppBar } from './components/MyAppBar';
import { MuiCard } from './components/MuiCard';
import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';
import { MuiImageList } from './components/MuiImageList';
import { MuiTextField } from './components/MuiTextField';
import { MuiTransition } from './components/MuiTransition';
import { MuiBottomNav } from './components/MuiBottomNav';
import './App.css';

function App() {
  return (
    <div className='App'>
      <MyAppBar />
      <MuiTypography />
      <MuiButton />          .
      <MuiCard />
      <MuiImageList />
      <MuiTextField />
      <MuiTransition />
      <MuiBottomNav />


    </div>
  );
}

export default App;
