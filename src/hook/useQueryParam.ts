import { useHistory, useLocation } from "react-router";
import qs from "qs";
import { useMemo } from "react";

export const useQueryParam = (paramName: string, initialValue: string) => {
  const history = useHistory();
  const location = useLocation();
  const params = useMemo(
    () => qs.parse(location.search, { ignoreQueryPrefix: true }),
    [location.search]
  );
  const param = String(params[paramName]) || initialValue;
  const setParam = (nextParam: string) => {
    history.replace({
      search: qs.stringify({
        ...params,
        [paramName]: nextParam,
      }),
    });
  };

  return [param, setParam] as const;
};
