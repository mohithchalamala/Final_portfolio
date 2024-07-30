import { useRef } from 'react'
import CustomHooks from './CustomHooks'
import cv from '../assets/CV.pdf'
import avatar from '../assets/avatar.png'
function Home() {
  const refTab = useRef();
  CustomHooks(refTab)
  return (
    <section className="home" ref={refTab}>
      <div className="content">
        <div className="name">
          HOLA THIS IS <span>MOHITH</span>
        </div>
        <div className="des">
          Im a full-stack developer rocking the MERN stack and a certified cloud enthusiast. Lately, I've been diving into blockchain and machine learning <span>because why not complicate things?😎</span>
          <p>Curious? Check out my tech adventures!</p>
        </div>
        <a href={cv} target='_blank'>View My Resume</a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src={avatar}></img>
          {/* <div className="info">
            <div>Developer</div>
            <div>Indian</div>
            <div>07/23</div>
            <div>Male</div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Home
