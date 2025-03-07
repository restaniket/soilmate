"use client";
import { useState } from "react";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(
      `Order placed successfully!\nName: ${formData.name}\nAddress: ${formData.address}\nPhone: ${formData.phone}`
    );
    setShowForm(false);
    setFormData({ name: "", address: "", phone: "" });
  };

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
      <div className="bg-gradient-to-r from-brown-700 via-white to-green-700 inline-block px-6 py-2 rounded-lg shadow-md">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brown-700 via-white to-green-700 drop-shadow-lg">
          SOILMATE
        </h1>
      </div>

      {/* What is SoilMate Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">
        <img
          src="/product.png"
          alt="Product"
          className="w-1/2 max-w-lg rounded-lg shadow-xl"
        />
        <div className="md:ml-10 text-3xl text-gray-800 max-w-2xl">
          <h2 className="text-5xl font-bold text-green-700">What is SoilMate?</h2>
          <p className="mt-6 leading-relaxed">
            SoilMate is an advanced AgriTech product designed to monitor soil health, detect water levels, analyze sunlight exposure, and assess soil quality to ensure the best conditions for plant growth.
          </p>
        </div>
      </div>

      {/* Why SoilMate Section */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
        <h2 className="text-5xl font-bold text-green-700 mb-6">Why SoilMate?</h2>
        <div className="flex flex-col md:flex-row items-center max-w-6xl">
          <ul className="text-2xl text-gray-900 text-left space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">✔ {feature}</li>
            ))}
          </ul>
          <img
            src="/why-soilmate.png"
            alt="Why SoilMate"
            className="w-1/3 max-w-md rounded-lg shadow-xl md:ml-10"
          />
        </div>
      </div>

      {/* Components Section */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <h2 className="text-5xl font-bold text-green-700 text-center mb-10">Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <img src="/sensor.png" alt="Sensor" className="w-40 rounded-lg shadow-lg" />
            <p className="mt-4 text-2xl text-gray-700">Advanced Soil Sensor</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/water-monitor.png" alt="Water Monitor" className="w-40 rounded-lg shadow-lg" />
            <p className="mt-4 text-2xl text-gray-700">Water Level Detector</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/sunlight-meter.png" alt="Sunlight Meter" className="w-40 rounded-lg shadow-lg" />
            <p className="mt-4 text-2xl text-gray-700">Sunlight Analyzer</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/pest-control.png" alt="Pest Control" className="w-40 rounded-lg shadow-lg" />
            <p className="mt-4 text-2xl text-gray-700">Pest Detection & Protection</p>
          </div>
        </div>
      </div>

      {/* Order Now Section */}
      <div className="min-h-screen flex flex-col justify-center items-center">
        {!showForm ? (
          <div className="text-center">
            <p className="text-3xl font-semibold text-gray-800 mb-4">
              Improve your soil and crops and be a part of SoilMate at just $99.99!
            </p>
            <p className="text-3xl font-semibold text-gray-800 mb-4">
              Click below to order now!
            </p>
            <button
              className="bg-green-500 text-white px-10 py-4 rounded-xl text-2xl font-semibold hover:bg-green-600 transition"
              onClick={() => setShowForm(true)}
            >
              Order Now
            </button>
            <p className="mt-6 text-xl text-gray-700">
              Contact us for more details: soilmate@example.com | +91-9876543210
            </p>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg mx-auto mt-6">
            <h2 className="text-3xl font-semibold text-green-700">Enter Your Details</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 border rounded-lg text-xl"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-4 border rounded-lg text-xl"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-4 border rounded-lg text-xl"
                required
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white text-2xl font-semibold px-10 py-4 rounded-lg shadow-lg transition w-full"
              >
                Place Order
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
