import emailjs from "@emailjs/browser";

export const sendEmail = (data, formType) => {
  // console.log(data, formType);
  emailjs
    .sendForm(
      "service_2tuirk8",
      formType === "contactForm" ? "template_m0ntm39" : "template_901umik",
      data,
      {
        publicKey: "0BxUCYCAPfCupk8_6",
      }
    )
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
// template_qye5i3l
//home
