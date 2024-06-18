import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import Chart from 'chart.js/auto';

const BarChart = () => {
  const [exchangeRates, setExchangeRates] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          "https://v6.exchangerate-api.com/v6/b42680ce27a2451f284ac741/latest/USD"
        );
        if (response.status === 200) {
          setExchangeRates(response.data.conversion_rates);
        } else {
          throw new Error("Failed to fetch exchange rates");
        }
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };
    fetchExchangeRates();
  }, []);

  if (!exchangeRates) {
    return <p>Cargando datos...</p>;
  }

  const data = {
    labels: ["USD to MXN", "MXN to USD"],
    datasets: [
      {
        label: "Paridad de Peso y Dólar",
        data: [
          exchangeRates.MXN,
          1 / exchangeRates.MXN, 
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          fontSize: 25,
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} height={400} options={options} />
    </div>
  );
};

export default BarChart;
