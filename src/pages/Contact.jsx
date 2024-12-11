import { React, useState } from 'react';
import '../css/Contact.css';


const Contact = () => {
    const [subject, updateSubject] = useState("");
    const [body, updateBody] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = `mailto:me@peterolsen.org?subject=${subject}&body=${body}`;
        link.click();
    }

    return (
        <div className="flex-center">
            <h1>Contact Me</h1>
            <p>Feel free to reach out to me here, and I should be able to get back to you within a few business days.</p>
            <br />
            <form>
                <div className="input-container">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="Subject" required onInput={(e) => updateSubject(e.target.value)}/>
                </div>
                <div className="input-container">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required rows={4} onInput={(e) => updateBody(e.target.value)}></textarea>
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <br /><br />
            <small>*This form should open your mail client to send me what you've written out. 
                If it doesn't, feel free to email me
                directly at <a style={{textDecoration: 'underline'}} href="mailto:me@peterolsen.org">me@peterolsen.org</a>
            </small>
        </div>
    );
};

export default Contact;