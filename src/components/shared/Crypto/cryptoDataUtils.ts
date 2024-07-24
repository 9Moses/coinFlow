import axios from "axios";

export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  price_usd: string;
  percent_change_24h: string;
  historical_data?: Array<{ date: string; price: number }>;
}

export const fetchCryptoData = async (): Promise<CryptoData[]> => {
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
    return dataWithHistory;
  } catch (error) {
    console.log(error);
    return [];
  }
};
