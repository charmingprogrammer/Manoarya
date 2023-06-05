// get the footer container
const footer_Container = document.querySelector("footer");

// function that helps  to pull the data inside the footer container

function footer_Content() {
    footer_Container.insertAdjacentHTML("afterbegin", `
    <div id="footer_items">
    <a href="index.html" class="footer_box">
      <img src="./Main_Logo.png" alt="Manoarya logo" />
      <h3>We Are India's Most Loved Tech Community. Join Us!</h3>
    </a>
    <div class="footer_box">
      <h3>HELPFUL LINKS</h3>
      <a href="./Topics/index.html">Courses</a>
      <a href="Pages/Privacy_policy.html">Privacy policy</a>
      <a href="Pages/RefunPolicy.html">Refund & Cancellation Policy</a>
      <a href="Pages/Terms_and_condition.html">Terms & Condition</a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScFuSx8QisX9-lKX7Xf_l_IMptzNa0pGsBsLL3VOwx80HvX8A/viewform">Refer
        & Earn</a>
    </div>
    <div class="footer_box">
      <h3>GET IN TOUCH</h3>
      <a href="mailto:manoaryaforyou@gmail.com">manoaryaforyou@manoarya.com</a>
    </div>
    <div class="footer_box">
      <h3>CONNECT WITH US</h3>
      <a href="https://www.facebook.com/manohar.anamd">Facebook</a>
      <a href="#">Twitter</a>
      <a href="https://youtu.be/Q1-4Zzfvglk">YouTube</a>
      <a href="#">Instagram</a>
      <a href="https://www.linkedin.com/in/manohar-anand-4177701b6">Linkedin</a>
    </div>
    <p>Copyright © 2023 All Right Reserved By Manoarya.</p>
  </div>
  <!-- Call to action btn -->
  <div id="cta_Container">
    <a href="#">Themes</a>
    <a href="#">Hire Me</a>
    <a href="#">Courses</a>
  </div>
    `);
}
// call the function
footer_Content();

