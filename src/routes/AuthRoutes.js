import React from "react";
import { Route } from "react-router-dom";
import AuthGuard from "../guards/AuthGuards";
import Home from "../pages/Home";

const AuthRoutes = [
    <Route key="Home" path="/" element={<AuthGuard component={<Home />} />} />,
    // <Route key="" path="/" element={<Home />} />,
    //       <Route path="/about" element={<About />} />,
    //       <Route path="/products" element={<Products />} />,
    //       <Route path="/contact" element={<Contact />} />,
    //       <Route path="/posts" element={<Posts />}>
    //         <Route path=":slug" element={<Post />} />
    //       </Route>
]

export default AuthRoutes;