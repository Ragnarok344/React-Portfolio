import data from '../../data/index.json';

export default function Portfolio() {
    return(
        <section className="portfolio-section"id="portfolio">
            <div className="portfolio-container-box">
                <div className="portfolio-container">
                    <p className="sub-title"></p>
                    <h2 className="section-head">My Portfolio</h2>
                </div>
                <div>
                    <a target="_blank"href="https://github.com/Ragnarok344"><img src="./img/Frame.svg"></img></a>
                    
                
                </div>
            </div>
            <div className="portfolio-section-container">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio-section-card">
                        <div className="portfolio-section-img">
                            <img src={item.src} alt="place"/>
                            
                        </div>
                        <div className="portfolio-section-card-content">
                            <div>
                                <h3 className="portfolio-section-title">
                                    {item.title}
                                </h3>
                                <p className="text-md">
                                    {item.description}
                                </p>
                            </div>
                            <p className="text-sm-link">

                            </p>
                        </div>
                    </div>

                )
                )}
            </div>
        </section>
    )
}