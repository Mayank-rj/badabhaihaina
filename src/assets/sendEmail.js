import emailjs from "@emailjs/browser";
import { EnquiryModal } from "../Components/EnquiryModal/EnquiryModal";
export const sendEmail = (data) => {
  console.log(data);
  emailjs
    .sendForm("service_2tuirk8", "template_m0ntm39", data, {
      publicKey: "0BxUCYCAPfCupk8_6",
    })
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};
// EnquiryModal
// contatct.js
// home.jsx
