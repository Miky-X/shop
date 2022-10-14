import SignUpForm from "../../components/sign_up_form/signUpForm_component";
import SignInForm from "../../components/sign_in_form/signInForm_component";

import { AuthenticationContainer } from "./authentication_styles";

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
};

export default Authentication;
