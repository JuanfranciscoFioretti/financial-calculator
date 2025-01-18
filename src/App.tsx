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
      <div className="app-container">
        <Sidenav isOpen={isOpen} toggleSidenav={toggleSidenav}/>
        <main 
        // className="main-content"
        className={`main-content ${isOpen ? 'blurred' : ''} h-full w-full flex items-center justify-center`}
        
        >
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

// import { Suspense, LazyExoticComponent } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Sidebar from './components/layout/Sidebar/Sidebar';
// import CalculatorSkeleton from './components/common/CalculatorSkeleton/CalculatorSkeleton';
// import { routes } from './routes/routes.config';
// import './styles/base/main.css';

// export interface AppRoute {
//   path: string;
//   component: LazyExoticComponent<() => JSX.Element>;
//   exact?: boolean;
//   redirectTo?: string;
// }

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Sidebar />
//       <Suspense fallback={<CalculatorSkeleton />}>
//         <Routes>
//           {routes.map((route, index) => (
//             route.redirectTo ? (
//               <Route key={index} path={route.path} element={<Navigate to={route.redirectTo} />} />
//             ) : (
//               <Route key={index} path={route.path} element={<route.component />} />
//             )
//           ))}
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// };

// export default App;