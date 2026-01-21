export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl w-full mx-auto px-6 py-12 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="mb-8">
            <svg
              className="mx-auto h-16 w-16 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Task Manager
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            A modern task management application built with Next.js, TypeScript, and PostgreSQL.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg text-left">
              <h2 className="font-semibold text-blue-900 mb-2">🚀 Getting Started</h2>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Set up your PostgreSQL database</li>
                <li>Update the <code className="bg-blue-100 px-1 rounded">.env.local</code> file with your database credentials</li>
                <li>Run the database schema: <code className="bg-blue-100 px-1 rounded">psql $DATABASE_URL -f database/schema.sql</code></li>
                <li>Implement authentication endpoints in <code className="bg-blue-100 px-1 rounded">app/api/auth</code></li>
                <li>Build your task management features!</li>
              </ol>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">✨ Features</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• JWT Authentication</li>
                  <li>• Task Lists</li>
                  <li>• PostgreSQL Database</li>
                  <li>• Modern UI</li>
                </ul>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🛠️ Tech Stack</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Next.js 14+</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
