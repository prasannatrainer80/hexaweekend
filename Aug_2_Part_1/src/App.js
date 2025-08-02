import logo from './logo.svg';
import './App.css';
import AccountShow from './components/accountsShow/accountsShow';
import AccountSearch from './components/accountSearch/accountSearch';
import CreateAccount from './components/createAccount/createAccount';
import DepositAccount from './components/depositAccount/depositAccount';
import WithdrawAccount from './components/withdrawAccount/withdrawAccount';

function App() {
  return (
    <div className="App">
      <AccountShow /> <hr/>
      <AccountSearch /> <hr/>
      <CreateAccount /> <hr/>
      <DepositAccount /> <hr/>
      <WithdrawAccount />
    </div>
  );
}

export default App;
