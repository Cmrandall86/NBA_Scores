
import { useState, useEffect } from "react";



const useFetchNBAData = (date)=> {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const url = `https://api.balldontlie.io/v1/games?seasons[]=2023&dates[]=${date}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {Authorization: "36ca5646-b610-45e8-9329-1005a9b04a53"},
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
