
import { useState, useEffect } from "react";



const useFetchNBAData = (date)=> {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const url = `https://www.balldontlie.io/api/v1/games?seasons[]=2023&dates[]=${date}`;
        const response = await fetch(url, {
          method: "GET",
        });

        const { data } = await response.json();

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [date]);

  return { data, loading, error };
};

export default useFetchNBAData;
