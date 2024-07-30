import { useEffect } from "react";
import { useSelector } from "react-redux";

const CustomHooks = (refTab = null, refDivs = null) => {
  const thisTab = refTab;
  const thisDivs = refDivs;
  const activeTab = useSelector((state) => state.activeTab);

  useEffect(() => {
    if (thisTab !== null && thisTab.current && thisTab.current.classList.contains(activeTab)) {
      thisTab.current.scrollIntoView({ behavior: "smooth" });
    }

    if(thisDivs!==null){
        thisDivs.current.forEach((div)=>{
            div.classList.add('animation')
        })
        const handlescroll = () =>{
            const scrollPosition = window.scrollY
            thisDivs.current.forEach((div)=>{
                const offsetTop = div.getBoundingClientRect().top + scrollPosition
                if(scrollPosition >= offsetTop - (window.innerHeight / 4 * 3)){
                    div.classList.add('active')
                }
                else{
                    div.classList.remove('active')

                }
            })
        }
        window.addEventListener('scroll',handlescroll);
    }
  }, [activeTab, thisTab]);
};

export default CustomHooks;