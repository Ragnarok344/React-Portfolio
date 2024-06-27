export default function Resume() {
    return(
        <section className="resume-section" id="resume">
            <div className="resume-container">
                <p className="resume-title"></p>
                <h2 className="resume-section-head">My Resume</h2>
            </div>
            <div className="resume-section-container">
                <div className="resume-section-item">
                    <div className="resume-section-item-content">
                        <h3 className="resume-section-title">
                            
                        </h3>
                        <p className="resume-section-desc">
                            My resume is available for download.
                        </p>
                        <a href="./img/Resume.pdf" download>
                            <button className="btn btn-primary">Download</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}