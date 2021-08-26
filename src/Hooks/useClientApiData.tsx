import { useState, useEffect } from "react";

import { getSelectedClientConfig } from "../Config/Config";
import { supportedWidgets } from "../Util/Types";

export function useClientApiData(apiUrl: string, type: supportedWidgets) {
  const { clientApiDataFormater } = getSelectedClientConfig();
  const apiFormaterFunc = clientApiDataFormater[type];

  const [data, setData] = useState<any>();
  const [isLoading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    async function fetchData() {
      return await fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // use the client data formatter which currently either
          // returns a number or an array
          setData(apiFormaterFunc(data));
          setLoading(false);
        });
    }

    fetchData();
  }, [apiFormaterFunc, apiUrl]);

  return [data, isLoading];
}
