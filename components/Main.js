const { Route, Switch } = ReactRouterDOM;
const { Classes,
  CodeOfConduct,
  Contact,
  Home,
  Instructors,
  StudentCreed,
  TrainingPrograms,
  TrainingVideos
} = window.App;

const Main = () => (
  <main>
    <Switch>
      <Route exact activeClassName="active" path='/' component={Home} />
      <Route activeClassName="active" path='/classes' component={Classes} />
      <Route activeClassName="active" path='/instructors' component={Instructors} />
      <Route activeClassName="active" path='/studentcreed' component={StudentCreed} />
      <Route activeClassName="active" path='/14pointcode' component={CodeOfConduct} />
      <Route activeClassName="active" path='/trainingprograms' component={TrainingPrograms} />
      <Route activeClassName="active" path='/trainingvideos' component={TrainingVideos} />
      <Route activeClassName="active" path='/contact' component={Contact} />
    </Switch>
  </main>
);

window.App.Main = Main;
