import React from 'react';
import { useForm } from 'react-hook-form';
import InteractiveMap from './InteractiveMap';
import axios from 'axios';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/inquiries', formData);
      console.log(response.data.message);
      // Clear the form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    }
  };
  const { register, handleSubmit1, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace with your form submission logic
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input name="name" ref={register({ required: true })} />
        {errors.name && <span>This field is required</span>}

        <label>Email</label>
        <input name="email" type="email" ref={register({ required: true })} />
        {errors.email && <span>This field is required</span>}

        <label>Message</label>
        <textarea name="message" ref={register({ required: true })} />
        {errors.message && <span>This field is required</span>}

        <button type="submit">Submit</button>
        <InteractiveMap/>
      </form>
    </div>
  );
};

export default ContactUsPage;
