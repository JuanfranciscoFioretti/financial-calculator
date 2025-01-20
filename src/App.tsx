import React, { Suspense, useState } from 'react';
import Sidenav from './components/layout/Sidenav/Sidenav';
import CalculatorSkeleton from './components/common/CalculatorSkeleton/CalculatorSkeleton';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes/routes.config';
import './styles/base/main.css';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidenav = () => setIsOpen(!isOpen);

  return (
    <BrowserRouter>
      <div>
        <Sidenav isOpen={isOpen} toggleSidenav={toggleSidenav}/>
        <main className="main-content">
          <Suspense fallback={<CalculatorSkeleton />}>
            <Routes>
              <Route path="/" element={<Navigate to="/compound-interest" replace />} />
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;