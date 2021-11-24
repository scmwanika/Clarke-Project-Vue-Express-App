<template>
  <div>
    <head>
      <title>clarke-farm</title>
    </head>
    <!--Navbar-->
    <nav class="navbar navbar-expand-md bg-light navbar-dark">
      <a class="navbar-brand">
        <span style="font-family: Monotype Corsiva"> Clarke Farm </span>
      </a>
      <a class="nav-header" href="/">About Us</a>
      <a class="nav-header" href="/our-activities">Our Activities</a>
      <a class="nav-header" href="/visit-us">Visit Us</a>
      <button
        class="navbar-toggler"
        style="background-color: #068d68"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <!--Telephone Contact-->
        <div class="navbar-nav ml-auto">
          <img src="../assets/phone-24.png" alt="phone icon" />
          +256 (0)392 201 400
        </div>
      </div>
    </nav>

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
                <a class="btn btn-info" href="coffee-production">Book A Trip</a>
                <a class="btn btn-info" href="coffee-production">Buy Coffee</a>
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
