import Head from "next/head";
import Link from "next/link";

import Layout from "../../layout/layout";
import styles from "../../styles/Form.module.css";

function Login() {
  return (
    <Layout>
      <Head>
        <title>Login Page</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">Lorem blabla</p>
        </div>

        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
          </div>

          <div className={styles.input_group}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.input_text}
            />
          </div>

          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>

          <div className="input-button">
            <button type="submit">Sign In with Google</button>
          </div>

          <div className="input-button">
            <button type="submit">Sign In with Github</button>
          </div>
        </form>
        <p className="text-center text-gray-400">
          Don't have an account yet?
          <Link href={"/register"} className="text-blue-700">
            Sign up
          </Link>
        </p>
      </section>
    </Layout>
  );
}

export default Login;
