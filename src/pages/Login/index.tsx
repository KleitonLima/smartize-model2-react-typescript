import Input from "../../components/Input";
import * as Styled from "./styles";
import logo from "../../assets/imgs/logo-smartize.png";
import Button from "../../components/Button";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export interface LoginProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLogged }: LoginProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      axios
        .post("https://smartize-store-back-m4-production.up.railway.app/auth/login", { email, password })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setLogged(true);
          navigate("/");
          toast.success("Login bem sucedido!");
        })
        .catch(() => {
          toast.error("Email ou senha inválido(s)!");
        });
    } else {
      toast.error("Preencha o email e senha!");
    }

    // Com ternário
    // email !== "" && password !== ""
    //   ? (axios.post("https://smartize-store-back-m4-production.up.railway.app/auth/login",
    //     { email, password }),
    //     setLogged(true),
    //     navigate("/"),
    //     toast.success("Login bem sucedido!"))
    //   : toast.error("Email ou senha inválido(s)!");
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer>
        <div>
          <img src={logo} width="100px" alt="" />
          <h1>
            smartize <br /> store
          </h1>
        </div>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email..." background="secondary" />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha..." background="secondary" />
        <Button text="Login" onClick={handleLogin} />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
