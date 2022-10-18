import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./routes/home/home_component";
import Navigation from "./routes/navigation/navigation_component";
import Authentication from "./routes/authentication/authentication_component";
import Shop from "./routes/shop/shop_component";
import Checkout from "./routes/checkout/checkout_component";
import {useEffect} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "./utils/firebase/firebase_utils";
import { setCurrentUser } from "./store/user/userAction";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop/*' element={<Shop />} />
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
        </Routes>
    );
};

export default App;
