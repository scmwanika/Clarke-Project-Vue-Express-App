<script setup>
import ReviewForm from "./VisitUs/ReviewForm.vue";
//import ReviewList from "./VisitUs/ReviewList.vue";
</script>

<template>
  <!-- Footer -->
  <div id="app-footer">
    <br />
    <div class="footer">
      <div class="footer-item-left">
        <ReviewForm />
      </div>
      <div class="footer-item-middle">
        <iframe src="/reviews"></iframe>
      </div>
      <div style="color: white" class="footer-item-right">
        <h6>LINKS</h6>
        <a class="nav-footer" href="/">About Us</a><br />
        <a class="nav-footer" href="/visit-us">Visit Us</a><br />
        <a class="nav-footer" href="/buy-coffee">Buy Coffee</a><br />
        <a class="nav-footer" href="/dashboard">Login</a><br /><br />
        <h6>INQUIRES</h6>
        <img src="../assets/phone-24.png" alt="phone icon" /><span
          class="contact"
          >+256 (0)392 201 400</span
        ><br />
        Plot 8244, Bukasa-Muyenga<br />
        Kampala, Uganda<br /><br />
        <h6>ADDRESS</h6>
        Katambale, Kyarusozi<br />
        Kyenjojo District<br />
        Uganda
      </div>
    </div>
    <hr />
    <p class="copyright">© 2022 Clarke Group Limited</p>
  </div>
</template>

<style scoped>
a {
  color: white;
}
</style>
