import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header/>
      <Main/>
      <Footer/>
    </main>
  )
}
