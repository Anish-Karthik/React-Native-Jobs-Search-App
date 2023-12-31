import axios from "axios";
import { useCallback, useEffect, useState } from "react";

// const rapidApiKey = "155178efa1mshb5683c4a6dcb398p1ff5ecjsna6a1f83873a4";

interface Query {
  query?: string;
  page?: string;
  num_pages?: string;
}

const useFetch = ({
  endpoint,
  query,
}: {
  endpoint: string;
  query: Query | Object;
}) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  console.log(query, endpoint);
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      'X-RapidAPI-Key': '155178efa1mshb5683c4a6dcb398p1ff5ecjsna6a1f83873a4',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = 
    async () => {
      setLoading(true);
      try {
        const res = await axios.request(options);
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  }

  return { data, error, loading, refetch };
}
export default useFetch;