export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="sub-title">
                <p className="sub-title"></p>
                <h2>Contact Me</h2>
                <p className="text-lg">Have a question? Want to propose a job? Feel free to contact me </p>
            </div>
            <form className="contact-form-container" action="https://formsubmit.co/ad12911f5e92bd7eecf1849862d35b2e" method="POST">
                <div className="container">
                  <label htmlFor="First-Name" className="contact-label">
                    <span className="text-md">FirstName</span>
                    <input type="text" className="contact-input text-md" name="first-name" id="first-name" required />
            </label>
                  <label htmlFor="last-name" className="contact-label">
                    <span className="text-md">Last Name</span>
                    <input type="text" className="contact-input text-md" name="last-name" id="last-name" required />
            </label>
            <label htmlFor="email" className="contact-label">
                    <span className="text-md">Email</span>
                    <input type="email" className="contact-input text-md" name="Email" id="Email" required />
            </label>
            
                  
                </div>
               
                <label htmlFor="choose-topic" className="contact-label">
                    <span className="text-md">Choose Topic</span>
                    <select name="choose-topic" className="contact-input text-md">
                        <option>Select One...</option>
                        <option>Question</option>
                        <option>Front End</option>
                        <option>Back End</option>
                        <option>FullStack</option>
                        <option>Other</option>
                    </select>
            </label>
            <label htmlFor="message" className="contact-label">
          <span className="text-md">Message</span>
          <textarea className="contact--input text-md"id="message"rows="8"placeholder="Type your message..."/>
        </label>
       
        <div>
            <button className="btn btn-primary contact-form-btn">Submit</button>
        </div>
            </form>
        </section>
    );

}