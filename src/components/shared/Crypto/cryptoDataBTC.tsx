import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { fetchCryptoData, CryptoData } from "./cryptoDataUtils";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const CryptoDataBTC: React.FC = () => {
  const [cryptoData, updateCryptoData] = useState<CryptoData[]>([]);
  const [isFetchingData, updateIsFetchingData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      updateIsFetchingData(true);
      const data = await fetchCryptoData();
      updateCryptoData(data);
      updateIsFetchingData(false);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      <div className="p-4 rounded-lg bg-white shadow-md  md:w-[250px] w-full">
        {isFetchingData ? (
          <div className="flex justify-center items-center w-full h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          cryptoData.slice(0, 1).map((crypto) => (
            <div key={crypto.id}>
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <img
                      src={`https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png`}
                      alt={crypto.name}
                      className="w-10 h-10 mr-2"
                    />
                    <div className="flex flex-col justify-start">
                      <span className="text-lg font-semibold">
                        {crypto.name}
                      </span>
                      <p className="text-gray-500 text-sm">{crypto.symbol}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-medium mt-6">
                    ${parseFloat(crypto.price_usd).toLocaleString()}
                  </div>
                  <div
                    className={`rounded-md w-2/3 mt-1 flex items-center justify-center ${
                      parseFloat(crypto.percent_change_24h) < 0
                        ? "text-red-500 bg-red-400/20"
                        : "text-green-500 bg-green-400/20"
                    }`}
                  >
                    <span className="mr-1">
                      {parseFloat(crypto.percent_change_24h) < 0 ? "↘" : "↗"}
                    </span>
                    <span className="text-sm">
                      {crypto.percent_change_24h}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 w-full h-[100px] p-4">
                <Line
                  data={{
                    labels:
                      crypto.historical_data?.map((data) => data.date) ?? [],
                    datasets: [
                      {
                        label: "Price (USD)",
                        data:
                          crypto.historical_data?.map((data) => data.price) ??
                          [],
                        borderColor:
                          parseFloat(crypto.percent_change_24h) < 0
                            ? "#ff0000"
                            : "#00ff00",
                        borderWidth: 1,
                        fill: "origin",
                        backgroundColor:
                          parseFloat(crypto.percent_change_24h) < 0
                            ? "rgba(255, 0, 0, 0.2)"
                            : "rgba(0, 255, 0, 0.2)",
                        pointRadius: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      x: {
                        display: false,
                      },
                      y: {
                        display: false,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
