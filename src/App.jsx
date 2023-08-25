import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TextPurple from './components/Texts/TextPurple';
import SectionOne from './Sections/SectionOne';
import SectionTwo from './Sections/SectionTwo';
import SectionTree from './Sections/SectionTree';

export default function App() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionTree />
      <Footer />
    </>
  )
}