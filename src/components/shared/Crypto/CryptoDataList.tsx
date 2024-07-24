import React, { useState, useEffect } from "react";
import { CryptoData, fetchCryptoData } from "./cryptoDataUtils";

export const CryptoCurrencyInfoList: React.FC = () => {
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
      <div className="flex flex-col gap-4 p-4 rounded-lg bg-white shadow-md md:w-[250px] w-full">
        {isFetchingData ? (
          <div className="flex justify-center items-center w-full h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          cryptoData.slice(0, 4).map((crypto, index) => (
            <div
              key={crypto.id}
              className={`py-2 ${
                index < cryptoData.slice(0, 4).length - 1 ? "border-b-2" : ""
              }`}
            >
              <div className="flex">
                <div className="flex flex-row items-center w-full justify-between">
                  <div className="flex items-center mb-2">
                    <img
                      src={`https://assets.coingecko.com/coins/images/31126/standard/2023-08-11_13.21.24.png?1697025145`}
                      alt={crypto.name}
                      className="w-10 h-10 mr-2"
                    />
                    <div className="flex flex-col justify-start">
                      <span className="text-md font-semibold">
                        {crypto.name}
                      </span>
                      <p className="text-gray-500 text-sm">{crypto.symbol}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div
                      className={`rounded-md w-2/3 p-1 mt-1 flex items-center justify-center ${
                        parseFloat(crypto.percent_change_24h) < 0
                          ? "text-red-500 "
                          : "text-green-500 "
                      }`}
                    >
                      <span className="text-sm">
                        {crypto.percent_change_24h}%
                      </span>
                    </div>
                    <div className="text-sm font-medium ">
                      ${parseFloat(crypto.price_usd).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
