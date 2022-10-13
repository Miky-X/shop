import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import {UserContext} from "./contexts/user_context";

import Home from "./routes/home/home_component";
import Navigation from "./routes/navigation/navigation_component";
import Authentication from "./routes/authentication/authentication_component";
import Shop from "./routes/shop/shop_component";

const App = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route
                    path="auth"
                    element={
                    currentUser ? <Navigate to="/" replace /> : <Authentication />
                    }
                />
            </Route>
        </Routes>
    );
};

export default App;
