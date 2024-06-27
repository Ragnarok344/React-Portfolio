import data from '../../data/index.json';


export default function Skills() {
    return(
        <section className="skills-section" id="skills">
            <div className="portfolio-container">
                <p className="portfolio-title"></p>
                <h2 className="skills-section-head">My Abilities</h2>
            </div>
            <div className="skills-section-container">
                {data?.skills.map((item,index) => (
                    
                        <div key={index} className="skills-section-item">
                            <div className="skills-section-img">
                                <img src={item.src} alt={item.title}/>
                            </div>
                            <div className="skills-section-item-content">
                                <h3 className="skills-section-title">
                                    {item.title}
                                </h3>
                                <p className="skills-section-desc">
                                    {item.description}
                                </p>

                            </div>
                        </div>
                
                ))}
            </div>
        </section>
    )
}