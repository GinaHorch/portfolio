import React from "react";

const Acknowledgement = () => {
    return (
        <section className="acknowledgment">
            <h2>Acknowledgment</h2>
            <p>As a non-Aboriginal woman of German heritage I wish to acknowledge and pay respects to the Traditional Custodians of the lands, 
                waters and skies throughout Australia and recognise their continuing connection to culture and communities. 
                I respectfully acknowledge the Whadjuk and Mooro people of the Noongar nation upon whose unceded land I live and where created this website. 
                I pay my respect to all Elders both past and present and emerging leaders.
            </p>
            <div className="flags">
                <img    
                    className="aboriginal-flag"
                    src="/image/aboriginal-flag.webp" 
                    alt="Aboriginal flag" 
                    width="60px"
                    loading="lazy"
                    />
                <img
                    className="torres-strait-islander-flag"
                    src="/image/torres-strait-islander-flag.webp"
                    alt="Torres Strait Islander flag"
                    width="60px"
                    loading="lazy"
                    />
            </div>
        </section>
    )
}

export default Acknowledgement;