import './App.css';
import Dog from './Images/Dog.png'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';


const LoginForm = () => {
  return (
    <div className='login-form'>
      <h1>WALK A DOG</h1>
      <img src={Dog} alt='' />
      <form>
        <InputText placeholder='E-mail' />
        <Password placeholder='Password' />
      </form>
      <div className='buttons'>
        <Button label='Sign Up' className='pi-button-warning'/>
        <Button label='Sign In' className='pi-button-warning'/>
      </div>
    </div>
  );
}

export default LoginForm;
