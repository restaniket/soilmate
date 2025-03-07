export default function Hero() {
  const features = [
    "Real-time soil health monitoring",
    "Automated water level detection",
    "Sunlight exposure analysis",
    "Soil quality assessment",
    "Pest detection and protection",
  ];

  return (
    <div className="bg-gradient-to-b from-brown-300 via-white to-green-300 min-h-screen text-center p-10">
      {/* Title Section */}
      <h1 className="text-6xl font-bold bg-gradient-to-r from-brown-600 to-green-500 text-transparent bg-clip-text">
        SOILMATE
      </h1>
      
      {/* What is SoilMate Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center">
        <img src="/product.png" alt="Product" className="w-80 rounded-lg shadow-lg" />
        <div className="md:ml-10 text-lg text-gray-700 max-w-lg">
          <h2 className="text-3xl font-bold text-green-700">What is SoilMate?</h2>
          <p className="mt-4">
            SoilMate is an advanced AgriTech product designed to monitor soil health, detect water levels, analyze sunlight exposure, and assess soil quality to ensure the best conditions for plant growth.
          </p>
        </div>
      </div>

      {/* Why SoilMate Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-green-700">Why SoilMate?</h2>
        <ul className="text-lg mt-4 text-gray-800 max-w-lg mx-auto text-left">
          {features.map((feature, index) => (
            <li key={index} className="mb-2">• {feature}</li>
          ))}
        </ul>
      </div>

      {/* Components Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-green-700 text-center">Components</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <img src="/sensor.png" alt="Sensor" className="w-40 rounded-lg shadow-lg" />
            <p className="mt-2 text-lg text-gray-700">Advanced Soil Sensor</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/water-monitor.png" alt="Water Monitor" className="w-40 rounded-lg shadow-lg" />
            <p className="mt-2 text-lg text-gray-700">Water Level Detector</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/sunlight-meter.png" alt="Sunlight Meter" className="w-40 rounded-lg shadow-lg" />
            <p className="mt-2 text-lg text-gray-700">Sunlight Analyzer</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/pest-control.png" alt="Pest Control" className="w-40 rounded-lg shadow-lg" />
            <p className="mt-2 text-lg text-gray-700">Pest Detection & Protection</p>
          </div>
        </div>
      </div>

      {/* Order Now Section */}
      <div className="mt-16 text-center">
        <button className="bg-green-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-600 transition">
          Order Now
        </button>
      </div>
    </div>
  );
}
