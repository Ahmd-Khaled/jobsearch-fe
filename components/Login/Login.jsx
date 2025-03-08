"use client";
import useLogin from "@/hooks/auth/useLogin";
import GoogleBtn from "../utils/GoogleBtn/GoogleBtn";
import InputRHF from "../utils/InputRHF/InputRHF";
import styles from "./styles.module.scss";
import Alert from "../utils/Alert/Alert";
import useGoogleLogin from "@/hooks/auth/useGoogleLogin";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [register, control, onSubmit, handleSubmit, errors, message, status] =
    useLogin();
  const [handleGoogleLogin, googleMsg, googleStatus] = useGoogleLogin();
  return (
    <section className={styles.login}>
      {status && (
        <Alert message={message} type={status ? "success" : "error"} />
      )}
      {googleMsg && (
        <Alert message={googleMsg} type={googleStatus ? "success" : "error"} />
      )}
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Sign In</h2>
          <div className={styles.gBtn}>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => console.log("Login Failed")}
            />
          </div>
          <div className={styles.or}>
            <span />
            <span>or</span>
            <span />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className={styles.form}
          >
            <InputRHF
              isRequired={true}
              label="Email Address"
              placeholder="Enter your email address"
              type="email"
              id="email"
              register={{ ...register("email") }}
              error={errors.email?.message}
            />
            <InputRHF
              isRequired={true}
              label="Password"
              placeholder="Enter your password"
              type="password"
              id="password"
              register={{ ...register("password") }}
              error={errors.password?.message}
            />
            <button type="submit" className={styles.loginBtn}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
