import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//React three fiber - canvas and environment scene
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import Model from "./components/Model";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import { Box } from "./components/Box";

//model loader
import { Html, useProgress } from "@react-three/drei";
import { StoreProvider } from "./utils/GlobalState";

// The hook returns much more than just the progress so there is a lot you can do there to give the user more information about the loading status of the application. 
const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
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

// const styles = {
//   flexWrapper: {
//     display: "flex",
//     minHeight: "100vh",
//     flexDirection: "column",
//     justifyContent: "space-between",
//   },
// };
// console.log(Home, "hometime bitches");
function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
      <Router>
        <div
        // style={styles.flexWrapper}
        // className="flex-column justify-flex-start min-100-vh"
        >
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <Home />
          </div>
          <Canvas style={{ position: "relative", background: "pink" }}>
            <Suspense fallback={<Loader />}>
              <Model />
              <Environment preset="sunset" background />
            </Suspense>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-5, -5, -5]} />
            <Box rotation={[0, 10, 0]} position={[0, 0, -40]} />
          </Canvas>
          <Footer />
        </div>
      </Router>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
