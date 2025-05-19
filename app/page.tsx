import Banner from "./components/Banner"
import Courses from "./components/Courses"
import Footer from "./components/Footer"
import Header from "./components/Header"
import TitleCourse from "./components/TitleCourse"

function TeuBotao(){
  return(
    <button className="bg-blue-100">botao aqui</button>
  )
}

export default function Home(){
  return(
    <div>
      <Header/>
      <Banner/>
      <TitleCourse/>
      <Courses/>
      <Footer/>
    </div>
  )
}