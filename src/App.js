import React from "react";
import { Route, Routes } from "react-router-dom";
//import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { OrderSummary } from "./Components/OrderSummary";
import { NoMatch } from "./Components/NoMatch";
import { Products } from "./Components/Products";
import { FeaturedProducts } from "./Components/FeaturedProducts";
import { NewProducts } from "./Components/NewProducts";
import { Employees } from "./Components/Employees";
import { Users } from "./Components/Users";
import { UserDetails } from "./Components/UserDetails";
import { AdminDetails } from "./Components/AdminDetails";
const LazyAbout = React.lazy(() => import("./Components/About"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="about"
          element={
            <React.Suspense fallback="loading ...">
              <LazyAbout />
            </React.Suspense>
          }
        ></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />}></Route>
          <Route path="featured" element={<FeaturedProducts />}></Route>
          <Route path="new" element={<NewProducts />}></Route>
        </Route>
        <Route path="employees" element={<Employees />}></Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<AdminDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
