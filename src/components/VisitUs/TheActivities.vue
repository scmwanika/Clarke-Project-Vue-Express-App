<template>
  <!-- Activities -->
  <div class="activities-section">
    <div class="headline">
      <div>
        <p style="font-size: 35pt">90% of our guests</p>
        <p>Enjoyed These Activities The Most.</p>
      </div>
    </div>
    <div class="activity">
      <div v-for="activity in activityList" :key="activity.id">
        <div>
          <img
            :src="('../../../backend/uploads/' + activity.fileName + '.jpg')"
            alt="card image"
          />
          <p style="font-size: 12pt">{{ activity.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
import axios from 'axios';
import api from '../../api';

export default {
  name: 'Popular Activities',
  data() {
    return {
      activityList: [],
    };
  },
  created() {
    axios
      .get(`${api}/activities`)
      .then((res) => {
        this.activityList = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.headline {
  width: 40%;
  margin: 0 auto;
  color: white;
  background-color: #068d68;
  font-size: 14pt;
  font-style: italic;
  font-family: "Times New Roman", Times, serif;
}

.activity {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 35px;
  row-gap: 20px;
  width: auto;
}

img {
  width: 75%;
  margin-top: 25px;
  border-radius: 50%;
  border-color: #068d68;
  border-bottom-style: solid;
}

p {
  text-align: center;
}
</style>
