import { useState, useRef } from "react";
import CustomHook from "./CustomHooks";
import "../App.css";

function Contacts() {
  const [listcontacts] = useState([
    {
      title: "Phone Number",
      value: "+91 7093883255",
    },
    {
      title: "Github",
      value: "/mohithchalamala",
    },
    {
      title: "Email",
      value: "mohith_chalamala@srmap.edu.in",
    },
    {
      title:"Linkedin",
      value:'/mohith-srinivas-chalamala-52a26a228/'
    }
  ]);
  const refTab = useRef();
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Contact Coordinates!
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Connect with me and let’s turn ideas into reality.
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listcontacts.map((item, key) => (
          <div key={key}>
            <h3>{item.title}</h3>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contacts;

