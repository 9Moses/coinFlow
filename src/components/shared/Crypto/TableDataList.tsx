import React, { useState, useEffect } from "react";
import { CryptoData, fetchCryptoData } from "./cryptoDataUtils";

const formatNumberToMillions = (num: number) => {
  if (num >= 1_000_000_000) {
    return `${(num / 1_000_000_000).toFixed(2)}B`;
  } else if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(2)}M`;
  } else {
    return num.toLocaleString();
  }
};

export const TableDateList: React.FC = () => {
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
    <div className="w-full bg-white p-8 mt-10">
      <h1 className="text-center text-3xl font-semibold mb-10">
        Exploring Hottest Coin Trends
      </h1>
      <div className="overflow-x-auto rounded-lg shadow-md w-5/6 mx-auto">
        <table className="min-w-full bg-white border ">
          <thead>
            <tr className=" border-b text-xs">
              <th className="px-6 py-4 text-left text-gray-600 font-medium">
                Coin Name
              </th>
              <th className="px-6 py-4 text-left text-gray-600 font-medium">
                Price
              </th>
              <th className="px-6 py-4 text-left text-gray-600 font-medium">
                24H Change
              </th>
              <th className="px-6 py-4 text-left text-gray-600 font-medium">
                24H Volume
              </th>
              <th className="px-6 py-4 text-left text-gray-600 font-medium">
                Market CAP
              </th>
              <th className="px-6 py-4 text-center text-gray-600 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isFetchingData ? (
              <tr>
                <td colSpan={6} className="text-center py-8">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
                </td>
              </tr>
            ) : (
              cryptoData.slice(0, 6).map((crypto) => (
                <tr key={crypto.id} className="border-b ">
                  <td className="px-6 py-4 whitespace-nowrap flex  gap-2">
                    <img
                      src={`https://assets.coingecko.com/coins/images/31126/standard/2023-08-11_13.21.24.png?1697025145`}
                      alt={crypto.name}
                      className="w-10 h-10"
                    />
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-md font-medium">
                        {crypto.name} -{" "}
                      </span>
                      <span className="text-md font-medium text-gray-500">
                        {crypto.symbol}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    ${parseFloat(crypto.price_usd as string).toLocaleString()}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                      parseFloat(crypto.percent_change_24h as string) < 0
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    <span className="mr-1">
                      {parseFloat(crypto.percent_change_24h) < 0 ? "↘" : "↗"}
                    </span>
                    {parseFloat(crypto.percent_change_24h as string).toFixed(2)}
                    %
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    $
                    {formatNumberToMillions(
                      parseFloat(crypto.volume24 as string)
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    $
                    {formatNumberToMillions(
                      parseFloat(crypto.market_cap_usd as string)
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button className="px-4 py-2 border  text-sm font-medium rounded-lg hover:bg-gray-300">
                      Trade
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
