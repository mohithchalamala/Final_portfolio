import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";

function Nav({ activeTab }) {
  const [navlist] = useState([
    "home",
    "skills",
    "projects",
    "contacts",
  ]);
  const dispatch = useDispatch()
  const changeTab = (item) =>{
    dispatch(changeTabActive(item))
  }

  return (
    <header>
      <div className="logo">
        <span className="mohith">Mohithsrinivas</span>
      </div>
      <nav>
        {navlist.map((item) => {
          return (
            <span className={activeTab === item ? "active" : ""} key={item.id} onClick={()=>changeTab(item)}>
              {item}
            </span>
          );
        })}
      </nav>
    </header>
  );
}
const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});
export default connect(mapStateToProps, { changeTabActive })(Nav);
