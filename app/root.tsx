import { Outlet, NavLink } from 'react-router';
import './app.css';
import { useThemeStore } from '~/stores/useThemeStore';

export default function Root() {
  // TODO: Wire up Zustand theme store
  const isDark = false; // TODO: Get from store
  // TODO: Create toggle function from store

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>
        <nav className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} border-b border-gray-300 dark:border-gray-700 p-6`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Theme Switcher</h1>
            <div className="flex gap-4 items-center">
              <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-blue-600' : ''}>
                Home
              </NavLink>
              <NavLink to="/settings" className={({ isActive }) => isActive ? 'font-bold text-blue-600' : ''}>
                Settings
              </NavLink>
              {/* TODO: Add theme toggle button here */}
              <button className={`px-4 py-2 rounded ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`}>
                {isDark ? '🌙' : '☀️'}
              </button>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto p-6 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}