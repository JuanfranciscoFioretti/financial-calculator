import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../../common/Icons/Icons';
import './Sidenav.css';

const calculators = [
  { path: '/compound-interest', name: 'Compound Interest', icon: Icons.Trending },
  { path: '/savings', name: 'Savings Calculator', icon: Icons.Piggy },
  { path: '/currency', name: 'Currency Converter', icon: Icons.Exchange },
  { path: '/percentage', name: 'Percentage Calculator', icon: Icons.Percent },
  { path: '/loan', name: 'Loan Calculator', icon: Icons.Calculator },
  { path: '/investment', name: 'Investment Planner', icon: Icons.Target },
  { path: '/time-value', name: 'Time Value Calculator', icon: Icons.Time },
  { path: '/ratio', name: 'Ratio Calculator', icon: Icons.Scale },
  { path: '/yield', name: 'Yield Calculator', icon: Icons.Dollar }
];

interface SidenavProps {
  isOpen: boolean; 
  toggleSidenav: () => void;
}

const Sidenav: React.FC<SidenavProps> = ({ isOpen, toggleSidenav }) => {
  const [isCollapsible, setIsCollapsible] = useState(false);

  // Detecta si el menú es plegable o fijo según el ancho de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsible(window.innerWidth < 1024);
    };

    handleResize(); // Llama al cargar
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Overlay y botón de menú */}
      {!isOpen && isCollapsible && (
        <div className="overlay" onClick={toggleSidenav}>
          <button 
            className="sidebar-toggle" 
            onClick={toggleSidenav}
            style={{ transition: 'opacity 1s ease-in-out', opacity: isOpen ? 0 : 1 }}
          >
            ☰ Menu
          </button>
        </div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-title">Finance Tools</h1>
          <p className="sidebar-subtitle">Your financial calculator suite</p>
        </div>
        <nav>
          <ul className="nav-list">
            {calculators.map(({ path, name, icon: Icon }) => (
              <li key={path} className="nav-item">
                <NavLink
                  to={path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={toggleSidenav}
                >
                  <span className="nav-icon">
                    <Icon />
                  </span>
                  <span className="nav-text">{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Contenido borroso */}
      {/* <div
        className={`main-content ${isOpen && isCollapsible ? 'blur-sm' : ''}`}
        style={{
          transition: 'filter 0.3s ease',
          filter: isOpen && isCollapsible ? 'blur(5px)' : 'none'
        }}
      > */}
        {/* El contenido principal */}
        {/* <main>
          <h1>Welcome to the Calculator Suite</h1>
          <p>Select a tool from the menu to get started.</p>
        </main>
      </div> */}
    </>
  );
};

export default Sidenav;
