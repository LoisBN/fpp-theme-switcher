import ContentCard from '~/components/ContentCard';
import { useThemeStore } from '~/stores/useThemeStore';

export default function Settings() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Settings</h2>

      <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4">Theme Settings</h3>
        
        <div className="flex items-center gap-4">
          <span className="text-lg">Current theme:</span>
          <span className={`text-xl font-bold ${isDark ? 'text-blue-600' : 'text-blue-400'}`}>
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </span>
        </div>

        <div className="mt-6">
          <button
            onClick={toggleTheme}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
          >
            Toggle Theme
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContentCard 
          title="Customization" 
          description="Your theme preference is saved using Zustand global state"
        />
        <ContentCard 
          title="Persistence" 
          description="Add localStorage to make the theme persist across sessions"
        />
      </div>
    </div>
  );
}