import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

interface CryptoData {
  name: string;
  symbol: string;
  price: number;
  change: number;
}

const CryptoData: React.FC = () => {
  const [data, setData] = useState<CryptoData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    const url = import.meta.env.VITE_CRYPTOCURRENCY;
    try {
      const response = await axios.get<CryptoData[]>(url);
      setData(response.data[0]);
      setLoading(false);
    } catch (e: any) {
      if (axios.isAxiosError(e)) {
        setError(e.message);
      } else {
        setError("An unknown error occurred.");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>
        {data.name} ({data.symbol})
      </h2>
      <p>Price: ${data.price ? data.price.toLocaleString() : "N/A"}</p>
      <p>Change: {data.change}%</p>
    </div>
  );
};

export default CryptoData;
