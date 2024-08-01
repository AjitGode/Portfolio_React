import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
  const templateParams = {
    name: formData.name,
    email: formData.email,
    mobile:formData.mobile,
    message: formData.message
  };

  return emailjs.send('service_7obmzqg', 'template_sdjh1u7', templateParams, '8Eup-X-nZHCrR5RGg');
};