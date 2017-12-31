const Home = () => (
  <div>
    <br />
    <img className="img-responsive center-block" src={"static/img/logo.jpg"} alt="BudoQuest logo" width="236" height="236" />
    <div className="container">
      <div className="starter-template">
        <h1>Real Ninja training in Pretoria East</h1>
        <h4>900 years of history - battlefield proven - realistic, practical self defense</h4>
        <hr />
        <br />
        <br />
        <div className="row">
          <div className="col-md-4">
            <h2>What is Ninjutsu or To-Shin Do?</h2>
            <p className="text-left">Nin-po Taijutsu (Ninjutsu) is that art of fighting by using both your mind and natural body movement to defeat your opponent.</p>
            <p>Ninja's were real, and this is their martial art that they were famous for.</p>
            <h5>We teach the following skills:</h5>
            <ul>
              <li className="text-left">Unarmed combat</li>
              <li className="text-left">Defenses against knife, stick and other weapons</li>
              <li className="text-left">Gun disarms</li>
              <li className="text-left">Ground defenses</li>
              <li className="text-left">Battlefield proven sword skills</li>
              <li className="text-left">Understanding traditional weapons, and how they apply to today</li>
              <li className="text-left">Turning your attacker's attack against himself</li>
              <li className="text-left">To be able to pick up any object and defend yourself with it</li>
              <li className="text-left">How to be confident in yourself and who you are</li>
              <li className="text-left">Body strengthening and flexibility training</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>News</h2>
            <br />
            <ul>
              <li>The dojo will be open on Saturdays from 09:00 - 11:00 for students that would like to train or prepare for demos. All belts welcome. Plan for Saturdays with other students during the week.</li>
              <li>The dojo is closed for the holidays. 1st lesson for 2018 is on Tuesday, 16 January.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBudo-Quest-South-Africa-186864078007662%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId" width="400" height="600" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowtransparency="true"></iframe>
          </div>
        </div>

      </div>

    </div>
  </div>
);

window.BudoQuest.Home = Home;
