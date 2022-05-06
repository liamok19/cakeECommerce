// import React from "react";

// const styles = {
//   card1:{
//     fontSize: 30,
//   },
//   card2:{
//     fontSize: 20,
//   },
//   imgStyle: {
//     width: 450,
//     height: 300
//   },
//   containerStyle: {
//     flexDirection: 'column',
//     display: 'flex',
//     alignItems: 'center',
//     // color: '#3A7759',
//     backgroundColor: '#8CAB9B',
//     paddingRight: 75,
//     paddingLeft: 75,
//     paddingBottom: 270
//     }, 
// }

// export default function Home() {
//     return (
//       <div style={styles.containerStyle}>
//         <h1>Cake</h1>
//         <p style={styles.card1}>
//           Cakes Galore to choose from
//         </p> 
//         <p style={styles.card2}>Yum Yum for your tum tum</p>
//             </div>
//     );
//   }

import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;