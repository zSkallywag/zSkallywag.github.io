export const AnnouncementBar = () => {
  const handleClick = () => {
    window.open("https://cal.com/cybernest/30min", "_blank");
  };

  return (
    <div 
      onClick={handleClick}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-400 via-purple-400 via-yellow-300 via-green-300 to-blue-400 py-3 cursor-pointer hover:opacity-90 transition-opacity"
    >
      <div className="container mx-auto px-6 text-center">
        <span className="text-sm md:text-base font-semibold text-gray-900">
          → Prenota una call di 30 minuti oggi stesso.
        </span>
      </div>
    </div>
  );
};
