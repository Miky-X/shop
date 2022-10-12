import SignUpForm from "../../components/sign_up_form/signUpForm_component";
import SignInForm from "../../components/sign_in_form/signInForm_component";

import "./authentication_styles.scss";

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;
