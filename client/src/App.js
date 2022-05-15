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
import Detail from "./pages/Detail";

//Components import
// import Model from "./components/Model";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
// import { Box } from "./components/Box";

//Cake 1
import { TopTierPink, MidTierPink, BtmTierPink } from "./components/Box";

//Cake 2
import { TopTierBlue, MidTierBlue, BtmTierBlue } from "./components/Box";

//Cake 3
import { TopTierPearl, MidTierPearl, BtmTierPearl } from "./components/Box";

//Cake 4
import { TopTierChoc, MidTierChoc, BtmTierChoc } from "./components/Box";

//Cake 5
import {
  TopTierFestive,
  MidTierFestive,
  BtmTierFestive,
} from "./components/Box";

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
    height: "285vh",
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
            <Canvas style={styles.modelPosition} id="modelcontainer">
              <Suspense fallback={<Loader />}>
                <ambientLight intensity={0.05} />
                <pointLight position={[-5, -5, -5]} />
                <spotLight position={[1, 1, 1]} angle={0.15} penumbra={1} />
                {/* <OrbitControls 
                enablePan={true}
                enableZoom={true}
                enableRotate={true} /> */}
                {/* PinkCollection Model */}
                <TopTierPink position={[-80, 70, -240]} scale={[1, 1, 1]} />
                <MidTierPink position={[-80, 55, -240]} scale={[2, 2, 2]} />
                <BtmTierPink position={[-80, 32, -240]} scale={[3, 3, 3]} />

                {/* BlueCollection Model */}
                <TopTierBlue position={[-35, 70, -210]} scale={[1, 1, 1]} />
                <MidTierBlue position={[-35, 55, -210]} scale={[2, 2, 2]} />
                <BtmTierBlue position={[-35, 32, -210]} scale={[3, 3, 3]} />

                {/* Down the Aisle */}
                <TopTierPearl position={[0, 70, -180]} scale={[1, 1, 1]} />
                <MidTierPearl position={[0, 55, -180]} scale={[2, 2, 2]} />
                <BtmTierPearl position={[0, 32, -180]} scale={[3, 3, 3]} />

                {/* EverythingCollection Model */}
                <TopTierChoc position={[35, 70, -210]} scale={[1, 1, 1]} />
                <MidTierChoc position={[35, 55, -210]} scale={[2, 2, 2]} />
                <BtmTierChoc position={[35, 32, -210]} scale={[3, 3, 3]} />

                {/* festive Collection */}
                <TopTierFestive position={[80, 70, -240]} scale={[1, 1, 1]} />
                <MidTierFestive position={[80, 55, -240]} scale={[2, 2, 2]} />
                <BtmTierFestive position={[80, 32, -240]} scale={[3, 3, 3]} />
                {/* <Environment  preset="sunset" background /> */}
                {/* <Box position={[180, -100, -240]} scale={[15,15,15]}/> */}
              </Suspense>
              {/* <color attach="background" args={["#FDF9FF"]} /> */}

              {/* <fog attach="fog" color="#ffccff" near={1} far={400} /> */}
            </Canvas>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products/:id" element={<Detail />} />
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
