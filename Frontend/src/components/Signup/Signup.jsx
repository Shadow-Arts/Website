import AuthForm from '../Auth/AuthForm';

const Signup = ({ onSignup }) => {
  return (
    <AuthForm mode="signup" onSignup={onSignup} />
  );
};

export default Signup;
