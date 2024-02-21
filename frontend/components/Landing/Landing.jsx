import React from 'react';

function Landing() {
  return (
    <>
    <div className="bg-gradient-to-br from-purple-800 via-purple-600 to-blue-500 min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight">Welcome, Traveler!</h1>
        </div>
      </header>
      <section className="hero bg-cover bg-center py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl text-white font-bold mb-4">Embark on an Epic Adventure</h2>
          <p className="text-xl text-white mb-8">Prepare yourself for a journey beyond imagination!</p>
          <a href="/login" className="btn bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded">Begin Quest</a>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Epic Website</p>
        </div>
      </footer>
    </div>
    </>
  );
}

export default Landing;