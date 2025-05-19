export default function(){
    return(
          <main className="courses md:grid grid-cols-2 gap-4 m-4">
    <div className="course bg-[#4d4d4d] rounded-lg">
      <a href="/pages/html.html">
        <div className="course-image">
          <img src="img/html.svg" alt="" />
        </div>
        <div className="course-content text-center text-white">
          <h3>Curso de HTML</h3>
          <p>conheça o curso de HTML...</p>
        </div>
      </a>
    </div>
    <div className="course bg-[#4d4d4d] rounded-lg">
      <a href="/pages/css.html">
        <div className="course-image">
          <img src="img/css.svg" alt="" />
        </div>
        <div className="course-content text-center text-white">
          <h3>Curso de CSS</h3>
          <p>conheça o curso de CSS...</p>
        </div>
      </a>
    </div>
    <div className="course bg-[#4d4d4d] rounded-lg">
      <a href="/pages/js.html">
        <div className="course-image">
          <img src="img/js.svg" alt="" />
        </div>
        <div className="course-content text-center text-white">
          <h3>Curso de JS</h3>
          <p>conheça o curso de JS...</p>
        </div>
      </a>
    </div>
    <div className="course bg-[#4d4d4d] rounded-lg">
      <a href="/pages/games.html">
        <div className="course-image">
          <img src="img/games.svg" alt="" />
        </div>
        <div className="course-content text-center text-white">
          <h3>Curso de games</h3>
          <p>conheça o curso de games...</p>
        </div>
      </a>
    </div>
    <div className="course bg-[#4d4d4d] rounded-lg">
      <a href="/pages/robotica.html">
        <div className="course-image">
          <img src="img/robot.svg" alt="" />
        </div>
        <div className="course-content text-center text-white">
          <h3>Curso de robotica</h3>
          <p>conheça o curso de robotica...</p>
        </div>
      </a>
    </div>
    <div className="course bg-[#4d4d4d] rounded-lg">
      <a href="/pages/design.html">
        <div className="course-image">
          <img src="img/design.svg" alt="" />
        </div>
        <div className="course-content text-center text-white">
          <h3>Curso de design</h3>
          <p>conheça o curso de design...</p>
        </div>
      </a>
    </div>
  </main>
    )
}