import * as Styled from "./styles";
import logo from "../../assets/imgs/logo-smartize.png";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage, StyledInput } from "../../assets/styles/globalStyles";
import { api } from "../../services";

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().email("Formato de e-mail inválido!").required("E-mail é obrigatório!"),
  password: yup
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres!")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "A senha deve conter pelo menos, uma letra maiúscula, uma letra minúscula, um número e um desses caracteres especiais: $*&@#"
    )
    .required("Senha é obrigatória"),
});

const Login = () => {
  const { login } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = ({ email, password }: LoginData) => {
    api
      .post("/auth/login", { email, password })
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        toast.error("Email ou senha inválido(s)!");
      });
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer onSubmit={handleSubmit(handleLogin)}>
        <div>
          <img src={logo} width="100px" alt="" />
          <h1>
            smartize <br /> store
          </h1>
        </div>
        <StyledInput type="email" {...register("email")} placeholder="Digite seu email..." background="secondary" />
        <StyledInput type="password" {...register("password")} placeholder="Digite sua senha..." background="secondary" />
        <ErrorMessage>{errors.email?.message || errors.password?.message}</ErrorMessage>
        <Button text="Login" type="submit" />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
