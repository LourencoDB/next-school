export default function Banner(){
    return(
        <div className="banner md:grid grid-cols-2 items-center">
    <div className="banner-image">
      <img src="img/banner.svg" alt="img-banner" />
    </div>
    <div className="banner-content text-center text-white">
      <h3>UTFPR</h3>
      <h4>A MELHOR ESCOLA DE INFORMATICA</h4>
      <button className="btnInfor px-4 py-2 bg-green-400 rounded-md text-white hover:bg-black duration-500">
        INFORMAÇÕES
      </button>
    </div>
  </div>
    )
}