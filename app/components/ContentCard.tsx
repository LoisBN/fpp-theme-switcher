interface ContentCardProps {
  title: string;
  description: string;
}

// TODO: Make this component theme-aware by using the Zustand store
// TODO: Change background and text colors based on theme

export default function ContentCard({ title, description }: ContentCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}