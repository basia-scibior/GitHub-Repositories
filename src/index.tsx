import * as ReactDOM from "react-dom";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { SearchPage } from "./page/SearchPage/SearchPage";
import { DetailsPage } from "./page/DetailsPage/DetailsPage";
import { Layout } from "./component/Layout/Layout";

const queryClient = new QueryClient();

const Main = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/details/:ownerName/:repoName" component={DetailsPage} />
          <Route path="/" component={SearchPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

ReactDOM.render(<Main />, document.getElementById("root"));
