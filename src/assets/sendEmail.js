import emailjs from '@emailjs/browser';
import { EnquiryModal } from '../Components/EnquiryModal/EnquiryModal';
export const sendEmail = (data) => {
    console.log(data);
    emailjs
    .sendForm('service_ze691is', 'template_jz4i0fy', data, {
      publicKey: 's77962P56QvjtWbYa',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
}
// EnquiryModal
// contatct.js
// home.jsx



