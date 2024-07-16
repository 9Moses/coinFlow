import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
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

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  price_usd: string;
  percent_change_24h: string;
  historical_data?: Array<{ date: string; price: number }>;
}

const CryptoCurrencyInfo: React.FC = () => {
  const [cryptoData, updateCryptoData] = useState<CryptoData[]>([]);
  const [isFetchingData, updateIsFetchingData] = useState(false);

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const fetchCryptoData = async () => {
    updateIsFetchingData(true);
    try {
      const response = await axios.get("https://api.coinlore.net/api/tickers/");
      const dataWithHistory = await Promise.all(
        response.data.data.map(async (crypto: CryptoData) => {
          const historicalResponse = await axios.get(
            `https://api.coinlore.net/api/coin/markets/?id=${crypto.id}`
          );
          const historicalData = historicalResponse.data.map((entry: any) => ({
            date: new Date(entry.timestamp * 1000).toLocaleDateString(),
            price: parseFloat(entry.price_usd),
          }));
          return { ...crypto, historical_data: historicalData };
        })
      );
      updateCryptoData(dataWithHistory);
    } catch (error) {
      console.log(error);
    } finally {
      updateIsFetchingData(false);
    }
  };

  return (
    <div className="flex flex-wrap mt-32 justify-center gap-6">
      {isFetchingData ? (
        <div className="flex justify-center items-center w-full h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        cryptoData.slice(0, 1).map((crypto) => (
          <div
            key={crypto.id}
            className="p-4 rounded-lg bg-white shadow-md md:w-[400px] w-full"
          >
            <div className="flex justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <img
                    src={`https://assets.coingecko.com/coins/images/31126/standard/2023-08-11_13.21.24.png?1697025145`}
                    alt={crypto.name}
                    className="w-10 h-10 mr-2"
                  />
                  <div className="flex flex-col justify-start">
                    <span className="text-lg font-semibold">{crypto.name}</span>
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
                  <span className="text-sm">{crypto.percent_change_24h}%</span>
                </div>
              </div>
              <div className="mt-8 w-[150px] h-[100px]  p-4 ">
                {" "}
                {/* Adjusted the height for better view */}
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
                        fill: false,
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
          </div>
        ))
      )}
    </div>
  );
};

export default CryptoCurrencyInfo;
