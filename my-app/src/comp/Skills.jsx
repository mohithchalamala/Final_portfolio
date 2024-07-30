// import { useState } from "react"
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faReact, faHtml5, faCss3, faJs, faNodeJs} from '@fortawesome/free-brands-svg-icons'
// import {faServer, faDatabase} from '@fortawesome/free-solid-svg-icons'
// import '../App.css'
// function Skills() {
//   const [listskills] = useState([
//     {
//       name:'HTML',
//       des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate, blanditiis error pariatur totam dolore fugit architecto? Laboriosam magnam, quae debitis at vero ab fuga ut unde veniam temporibus vitae?',
//       icon:faHtml5
//     },
//     {
//       name:'CSS',
//       des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate, blanditiis error pariatur totam dolore fugit architecto? Laboriosam magnam, quae debitis at vero ab fuga ut unde veniam temporibus vitae?',
//       icon:faCss3
//     },
//     {
//       name:'JavaScript',
//       des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate, blanditiis error pariatur totam dolore fugit architecto? Laboriosam magnam, quae debitis at vero ab fuga ut unde veniam temporibus vitae',
//       icon:faJs
//     },
//     {
//       name:'ReactJs',
//       des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate, blanditiis error pariatur totam dolore fugit architecto? Laboriosam magnam, quae debitis at vero ab fuga ut unde veniam temporibus vitae?',
//       icon:faReact
//     },
//     {
//       name:'NodeJs',
//       des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate, blanditiis error pariatur totam dolore fugit architecto? Laboriosam magnam, quae debitis at vero ab fuga ut unde veniam temporibus vitae?',
//       icon:faNodeJs
//     },
//     {
//       name:'ExpressJs',
//       des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate, blanditiis error pariatur totam dolore fugit architecto? Laboriosam magnam, quae debitis at vero ab fuga ut unde veniam temporibus vitae?',
//       icon:faServer
//     },
//     {
//       name:'MongoDB',
//       des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate, blanditiis error pariatur totam dolore fugit architecto? Laboriosam magnam, quae debitis at vero ab fuga ut unde veniam temporibus vitae?',
//       icon:faDatabase
//     }
//   ])
//   return (
//     <section className="skills">
//       <div className="title">
//         This is my Skills
//       </div>
//         <div className="des">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate, blanditiis error pariatur totam dolore fugit architecto? Laboriosam magnam, quae debitis at vero ab fuga ut unde veniam temporibus vitae?
//         </div>
//         <div className="list">
//           {
//             listskills.map((item, key)=>(
//               <div key={key} className="item">
//                 <FontAwesomeIcon icon={item.icon}/>
//                 <h3>{item.name}</h3>
//                 <div className="des">{item.des}</div>
//               </div>
//             ))
//           }
//         </div>
//     </section>
//   )
// }

// export default Skills
import { useState, useRef } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact, faHtml5, faCss3, faJs, faNodeJs, faPython} from '@fortawesome/free-brands-svg-icons'
import {faServer, faDatabase, faCode} from '@fortawesome/free-solid-svg-icons'
import CustomHooks from "./CustomHooks"
import '../App.css'
function Skills() {
  const [listskills] = useState([
    {
      icon:faHtml5,
      name:'HTML'
    },
    {
      icon:faCss3,
      name:'CSS'
    },
    {
      icon:faJs,
      name:'JavaScript'
    },
    {
      icon:faReact,
      name:'ReactJs'
    },
    {
      icon:faNodeJs,
      name:'NodeJs'
    },
    {
      icon:faServer,
      name:'ExpressJs'
    },
    {
      icon:faDatabase,
      name:'MongoDB'
    },
    {
      icon:faCode,
      name:'C++'
    },
    {
      icon:faPython,
      name:'Python'
    }
  ])
  const refTab = useRef()
  const refDivs = useRef([])
  CustomHooks(refTab, refDivs)
  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el)=> el && refDivs.current.push(el)}>
        Skills
      </div>
        <div className="des" ref={(el)=> el && refDivs.current.push(el)}>
        I’ve battled bugs and conquered coding chaos. Now, I’m a master in the skills listed below. Get ready to be impressed!
        </div>
        <div className="list">
          {
            listskills.map((item, key)=>(
              <div key={key} className="item" ref={(el)=> el && refDivs.current.push(el)}>
                <FontAwesomeIcon icon={item.icon}/>
                <span>{item.name}</span>
                {/* <div className="des">{item.des}</div> */}
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default Skills
