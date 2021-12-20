<template>
  <div>
    <head>
      <title>Clarke Farm</title>
    </head>
    <!--Navbar-->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="light">
        <b-navbar-brand
          ><p style="font-family: Monotype Corsiva">Clarke Farm</p>
          <div>
            <img src="../assets/phone-24.png" alt="phone icon" />
            <span class="contact">+256 (0)392 201 400</span>
          </div></b-navbar-brand
        >

        <b-navbar-toggle
          target="nav-collapse"
          style="background-color: #068d68"
        ></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <!-- Routes -->
              <b-nav-item href="/"><div class="link">About Us</div></b-nav-item>
              <b-nav-item href="/our-activities"
                ><div class="link">Our Activities</div></b-nav-item
              >
              <b-nav-item href="/visit-us"
                ><div class="link">Visit Us</div></b-nav-item
              >
            </b-navbar-nav>
            <!-- Logout -->
            <b-button v-on:click="logout" variant="danger">Logout</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <body>
      <div id="app-body">
        <!-- BANNER -->
        <div class="content">
          <div class="content-left">
            <img src="../../backend/uploads/farm.jpg" alt="farm" />
          </div>
          <div class="content-middle hero">
            <br />
            <h2>
              An eco-friendly coffee estate specializing<br />
              in high quality washed Robusta Coffee.
            </h2>
            <br />
            <h5>
              Visit Clarke Farm and experience the amazing hilltop views,
              explore the river and forest walks, try the activities such as
              bouldering and mountain biking, walk or jog on the farm trails or
              have an exciting guided tour of the farm by Jeep. Round off your
              stay by roasting some Clarke Farm coffee and enjoying the fresh
              locally prepared dishes.
            </h5>
            <div>
              <br />
              <!--Links-->
              <div>
                <a class="btn btn-outline-info" href="/bookings/create"
                  >Book A Trip</a
                >
                <a class="btn btn-outline-info" href="/reviews/create"
                  >Buy Coffee</a
                >
              </div>
            </div>
          </div>
          <div class="content-right">
            <img
              src="../../backend/uploads/packaged-coffee.png"
              alt="packaged coffee"
            />
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<style scoped>
p {
  font-size: 24pt;
  color: #068d68;
  text-align: center;
}

.contact,
.link {
  color: green;
}
</style>
