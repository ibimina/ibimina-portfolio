import { useEffect, useState } from "react";

export const useFetch= () =>{
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("./data.json", { signal: abortConst.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setData(data);
        setError(null);
        setIsLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Abort error");
        }
        setError(error.message);
      }
    };

    fetchData();

    return () => abortConst.abort;
  }, []);

  return { data, isLoading, error };
}


