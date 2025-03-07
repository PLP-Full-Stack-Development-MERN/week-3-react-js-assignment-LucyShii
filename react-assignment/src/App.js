import React, { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com'
  });

  const updateUserName = (newName) => {
    setUser({
      ...user,
      name: newName
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="React Fundamentals Assignment" />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Profile user={user} onUpdateName={updateUserName} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Counter initialCount={0} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;