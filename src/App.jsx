import Nav from './components/Nav'
import BannerMain from './components/BannerMain';
import AboutMe from './components/AboutMe';
import BannerProjects from './components/BannerProjects';
import BannerForm from './components/BannerForm';

function App() {
  return (
    <>
      <Nav />
      <section>
        <article>
          <BannerMain />
          <AboutMe />
          <BannerProjects />
          <BannerForm />
        </article>
      </section>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    </>
  );
}

export default App;
