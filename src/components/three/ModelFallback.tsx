
const ModelFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-white/50 rounded-lg">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-academy-orange border-t-academy-red rounded-full animate-spin"></div>
      <p className="mt-4 text-academy-dark text-sm">Loading 3D scene...</p>
    </div>
  </div>
);

export default ModelFallback;
