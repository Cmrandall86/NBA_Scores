
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
          headers: {
            Authorization: "36ca5646-b610-45e8-9329-1005a9b04a53",
            'Access-Control-Allow-Origin': '*'
          },
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
