import React,{useState} from "react";
import '../App.css';
import Swal from 'sweetalert2';
import { sendEmail } from '../utils/emailService';

const Contact = ()=>{


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile:'',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});

      };

        // Regular expression patterns
       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       const mobilePattern = /^[6-9]\d{9}$/;

    
       const validateForm = () => {
        const { name, email, mobile, message } = formData;
    
        if (!name || !email || !mobile || !message) {
          Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Please fill in all the fields before submitting!',
            showConfirmButton: false,
            timer: 3000,
          });
          return false; // Validation failed
        }
    
        if (!emailPattern.test(email) || !mobilePattern.test(mobile)) {
          Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Please enter a valid email and Mobile Number!',
            showConfirmButton: false,
            timer: 3000,
          });
          return false; // Validation failed
        }
    
        return true; // Validation successful
      };


      const handleSubmit = async (e) => {
        e.preventDefault();

        if(validateForm()){

            try {
                await sendEmail(formData);
                Swal.fire({
                  title: 'Success!',
                  text: 'Your message has been sent.',
                  icon: 'success'
                });
                setFormData({ name: '', email: '',mobile:'',subject:'', message: '' });
              } catch (error) {
                Swal.fire({
                  title: 'Error!',
                  text: 'There was a problem sending your message.',
                  icon: 'error'
                });
              }
        }
        
      };

    return (
        <>
    <section className="contact" id="contactUs">
      <h2 className="heading">Contact<span>Us</span></h2>
      <form onSubmit={handleSubmit} >
        <div className="input-box">
          
          <input type="text" id="name" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          <input type="email" id="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
        </div>

        <div className="input-box">
        <input type="number" id="mobile" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
        <input type="text" id="subject" name="subject" placeholder="Email subject" value={formData.subject} onChange={handleChange} />

        </div>
        <textarea id="message" name="message" cols="30" rows="10" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
        <input type="submit" value="Send Message" class="btn" />

      </form>
    </section>
        
        </>
    );
}

export default Contact;