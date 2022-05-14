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
// import { Environment } from "@react-three/drei";

// Pages import
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

//Components import
// import Model from "./components/Model";
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
  uri: "http://localhost:3001/graphql",
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
  modelPosition: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1,
    height: "145vh",
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
            <Canvas 
            style={styles.modelPosition} id="modelcontainer"
            >
              <Suspense fallback={<Loader />}>
                <ambientLight intensity={0.05} />
                <pointLight position={[-5, -5, -5]} />
                <spotLight position={[1, 1, 1]} angle={0.15} penumbra={1} />
                {/* <OrbitControls 
                enablePan={true}
                enableZoom={true}
                enableRotate={true} /> */}
              
                <Box position={[100, 5, -200]} />
                <Box position={[100, 25, -100]} />
                <Box position={[-70, -5, -100]} />
                <Box rotation={[0, 10, 0]} position={[0, 0, -40]} />
                {/* <Environment  preset="sunset" background /> */}
              </Suspense>
              {/* <color attach="background" args={["#FDF9FF"]} /> */}

              <fog attach="fog" color="#ffccff" near={1} far={400} />
            </Canvas>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
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
