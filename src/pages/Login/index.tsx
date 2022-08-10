import Input from "../../components/Input";
import * as Styled from "./styles";
import logo from "../../assets/imgs/logo-smartize.png";
import Button from "../../components/Button";

const Login = () => {
  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer>
        <div>
          <img src={logo} width="100px" alt="" />
          <h1>
            smartize <br /> store
          </h1>
        </div>
        <Input placeholder="Digite seu email..." background="secondary" />
        <Input placeholder="Digite sua senha..." background="secondary" />
        <Button text="Login" />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
