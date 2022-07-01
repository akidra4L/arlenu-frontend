import React, { Fragment } from "react";
import Faq from "react-faq-component";

import data from "./data";

const FAQ = () => {
    return (
        <div className="faq-block"> 
            <Fragment>
                <Faq 
                    data={data}
                    styles={{
                        bgColor: "white",
                        rowTitleColor: "black",
                        rowTitleTextSize: "30px",
                        rowContentColor: "black",
                        rowContentTextSize: "16px",
                        rowContentPaddingTop: "10px",
                        rowContentPaddingBottom: "10px",
                        rowContentPaddingLeft: "50px",
                        rowContentPaddingRight: "150px",
                        arrowColor: "black"
                    }}
                    config={{
                        animate: true
                    }}
                />
            </Fragment>
        </div>
    )
}

export default FAQ;