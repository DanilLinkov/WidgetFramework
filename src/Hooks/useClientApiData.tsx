import { useState, useEffect } from "react";

import { getSelectedClientConfig } from "../Config/config";
import { supportedWidgets } from "../Util/Types";

/**
 * Custom hook used to fetching data based on the type of the widget
 *
 * It uses a data formater function set in the clientConfig.ts which
 * allows for devs to easily change which properties returned by
 * an api to use and how to format them for a specific type
 */
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
          // returns a number or an array of strings
          setData(apiFormaterFunc(data));
          setLoading(false);
        });
    }

    fetchData();
  }, [apiFormaterFunc, apiUrl]);

  return { data, isLoading };
}
