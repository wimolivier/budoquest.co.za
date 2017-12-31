const { HashRouter } = ReactRouterDOM;
const { Header, Main } = window.BudoQuest;

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'));
