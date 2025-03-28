import NavigationBar from "../NavigationBar";
import ContactUsHeading from "../headings/ContactUs";
import ContactUsData from "./ContactUsData";

function ContactUs() {
  return (
    <>
      <NavigationBar />
      <ContactUsHeading contactUsHeading={"Contact Us"} />
      <ContactUsData
        mobileNumber={"Cellphone: 0935-913-8967"}
        facebookProfile={"https://www.facebook.com/elizabeth.fontanilla.345364"}
      />
    </>
  );
}

export default ContactUs;
