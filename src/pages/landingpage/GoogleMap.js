/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable arrow-body-style */
const GoogleMap = () => {
  return (
    <div id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1348.857131164401!2d60.6316891800902!3d41.56130560036421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfcf4132abe27d%3A0xacf4d4f5681a5b42!2sKhorezmskiy%20Filial%20Respublikanskogo%20Tsentra%20Onkologii%20I%20Radiologii!5e1!3m2!1sen!2s!4v1648021797069!5m2!1sen!2s"
        width="100%"
        height="550"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
    </div>
  );
};

export default GoogleMap;
