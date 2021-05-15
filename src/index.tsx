import * as ReactDOM from "react-dom";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HelloPage } from "./page/HelloPage/HelloPage";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const Main = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HelloPage} />
      </Switch>
    </BrowserRouter>
  </QueryClientProvider>
);

ReactDOM.render(<Main />, document.getElementById("root"));
