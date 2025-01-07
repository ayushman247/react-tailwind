import React from "react";
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";


export default function HeroSection() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        Instant Chat Links for Seamless Conversations
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        QuickChat makes it effortless to create secure chat links and start
        conversations in seconds.
      </p>
      <Link href="/dashboard">
        <Button size="lg" className="border rounded p-2 bg-blue-400 text-black font-bold hover:bg-blue-500">
          Start Chatting
        </Button>
      </Link>

      <div className="mt-12 w-full max-w-5xl flex justify-center">
        {/* Placeholder for Illustration/Image */}
        <img
          src="https://www.tawk.to/wp-content/uploads/2020/08/Live-chat.png"
          alt="Illustration"
          className="w-96 h-62"
        />
      </div>
    </section>
  );
}
