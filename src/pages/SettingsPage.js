import React from 'react';
import Sidebar from '../components/Sidebar';

const SettingsPage = () => {
  return (
    <div className='SettingsPage'>
        <Sidebar></Sidebar>
        <main>
            <h2>
              Settings
            </h2>
        </main>
    </div>
  )
}

export default SettingsPage