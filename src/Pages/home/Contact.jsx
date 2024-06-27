export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="sub-title">
                <p className="sub-title">Get in Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum id qui nisi quas eveniet minus cum nam et nobis aspernatur neque voluptate veritatis, debitis a, fugit magnam ipsa corporis?</p>
            </div>
            <form className="contact-form-container">
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
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                    </select>
            </label>
            <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
            <button className="btn btn-primary contact-form-btn">Submit</button>
        </div>
            </form>
        </section>
    );

}