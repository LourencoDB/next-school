export default function Header(){
    return(
        <header className="px-10 py-8 bg-[#3d3d3d] text-white text-center md:flex justify-between ">
    <h1 className="mb-4 font-bold text-4xl">Escola de Informática</h1>
    <nav className="space-x-2">
      <a href="#">Home</a>
      <a href="#">Curso de HTML</a>
      <a href="#">Curso CSS</a>
      <a href="#">Contato</a>
    </nav>
  </header>
    )
}