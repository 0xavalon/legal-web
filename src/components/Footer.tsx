export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>For questions, contact us at</p>
          <a
            href="mailto:compliance@pipes.tech"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            compliance@pipes.tech
          </a>
        </div>
      </div>
    </footer>
  );
}
