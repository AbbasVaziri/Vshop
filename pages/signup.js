import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux"; // Assuming you are using Redux for state management
import Cookies from "js-cookie"; // Make sure to import the correct library for cookies
import { useRouter } from "next/router"; // Assuming you are using Next.js for routing
import { setToken } from "@/Redux/features/user/UsersSlice"; // Replace with your actual Redux action for setting the token
import styles from "./Login.module.css";
import LoginSignupErrorMessage from "@/Components/messageComponents/LoginSignupErrorMessage";
import { POST } from "@/repository/AxiosRepository";

const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    username: Yup.string().required("شماره موبایل خود را وارد نمایید"),
    // password: Yup.string().required("رمز عبور را وارد نمایید"),
  });

  const formFields = {
    username: "",
    // password: "",
  };

  const submitHandler = (values) => {
    POST("/users/register", values).then((response) => {
      Cookies.set("token", response.data.token, { expires: 7, path: "/admin" });
      router.push("/welcome");
    });
  };

  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles["login-signup-container"]}>
        <div className={styles["logo-wrapper"]}>
          <img
            src="https://www.digikala.com/statics/img/svg/logo.svg"
            alt="Logo"
            className={styles["brand-logo"]}
          />
        </div>
        <div className={styles["authentication-content"]}>
          <h3 className={styles["auth-title"]}>ورود | ثبت‌ نام</h3>
          <span className={styles["greeting-text"]}>سلام!</span>
          <br />
          <span className={styles["instruction-text"]}>
            لطفا شماره موبایل یا ایمیل خود را وارد کنید
          </span>
          <Formik
            onSubmit={submitHandler}
            initialValues={formFields}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
          >
            <Form className={styles["auth-form"]}>
              <Field
                className={styles["user-input"]}
                type="text"
                name="username"
                placeholder="شماره موبایل یا ایمیل"
              />
              <ErrorMessage
                name="username"
                component={LoginSignupErrorMessage}
              />
              <button type="submit" className={styles["login-btn"]}>
                ورود
              </button>
            </Form>
          </Formik>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Signup;
