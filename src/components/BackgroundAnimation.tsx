
import React from "react";

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden mesh-background">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyberpurple/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyberblue/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(66,66,111,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(66,66,111,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </div>
  );
};

export default BackgroundAnimation;
