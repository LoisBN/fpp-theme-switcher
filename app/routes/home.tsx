import ContentCard from '~/components/ContentCard';

export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Welcome to Theme Switcher</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContentCard 
          title="Light Theme" 
          description="Experience clean and bright interface perfect for daytime use"
        />
        <ContentCard 
          title="Dark Theme" 
          description="Easy on the eyes with dark mode for comfortable nighttime reading"
        />
        <ContentCard 
          title="Responsive Design" 
          description="The theme seamlessly adapts to your preferred appearance"
        />
        <ContentCard 
          title="Global State" 
          description="Theme preference is managed globally using Zustand"
        />
      </div>

      <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">Your Challenge</h3>
        <ul className="text-blue-800 dark:text-blue-200 space-y-2 list-disc list-inside">
          <li>Wire up the useThemeStore in the root component</li>
          <li>Add the toggle function to the theme button</li>
          <li>Update components to respond to theme changes</li>
          <li>Make sure the ContentCard component uses theme-aware styling</li>
        </ul>
      </div>
    </div>
  );
}