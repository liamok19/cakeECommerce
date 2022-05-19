import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Marquee from "react-fast-marquee";

// Pages import
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Success from "./pages/Success";

//Components import
// import Model from "./components/Model";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import About from "./components/About/aboutMe";
import MarqueeC from "./components/Marquee/marquee";

//model loader
import { StoreProvider } from "./utils/GlobalState";
import Playground from "./pages/Playground";

// The hook returns much more than just the progress so there is a lot you can do there to give the user more information about the loading status of the application.

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri:
    window.location.hostname.indexOf("localhost") > -1
      ? "http://localhost:3001/graphql"
      : "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const styles = {
  categoryPosition: {
    position: "relative",
  },
};
// console.log(Home, "hometime bitches");

function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header style={styles.categoryPosition} />
            <About />
            <Marquee>
              <MarqueeC />
            </Marquee>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products/:id" element={<Detail />} />
                {/* <Route path="/playground" element={<Playground />} /> */}
                <Route path="/success" element={<Success />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </Router>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
