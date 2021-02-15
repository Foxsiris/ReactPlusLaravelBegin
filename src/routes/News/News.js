import React from "react";
import classes from "../../style.module.scss";
import Navbar from "../../modules/Navigation/Navbar";
import Header from "../../modules/Navigation/Header";
import ContexData from "../../context/Data/ContextData";

function News() {
    const {stateData,dispatchData} = React.useContext(ContexData)
    React.useEffect(() => {
        const fecthNews = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/news')
                if (response.status === 200) {
                    const result = response.json().then(data=>{
                        dispatchData({
                            type:"FETCH_NEWS",
                            payload:data
                        })
                    })

                }
            } catch (e) {
                console.log(e)
            }
        }
        fecthNews()
    }, [])
    return (
        <div>
            <div className={classes.main}>
                <div className={classes.main_navigation}>
                    <Navbar/>
                </div>
                <div className={classes.main_content}>
                    <Header/>
                    {
                        stateData.news.map((el,index)=>{
                            return(
                                <div key={index}>
                                    <div>{el.title}</div>
                                    <div>{el.description}</div>
                                    <div>
                                        <img src={el.img} alt=""/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default News