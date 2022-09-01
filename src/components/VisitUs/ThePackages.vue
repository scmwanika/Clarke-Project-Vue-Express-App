<template>
  <!-- Packages -->
  <div class="our-packages">
    <p>
        We have arrangements for
        corporate events, tourists looking for adventure, and individuals
        looking to training programs in best agricultural practices.
    </p>
    <div class="card-data">
      <div
        v-for="teamData in teamDataList"
        :key="teamData.id"
        class="team-data"
      >
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">{{ teamData.title }}</h6>
            <p>
              <ul>
              <li>{{ teamData.itemOne }}</li>
              <li>{{ teamData.itemTwo }}</li>
              <li>{{ teamData.itemThree }}</li>
              <li>{{ teamData.itemFour }}</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
export default {
  data() {
    return {
      teamDataList: [
        {
          id: 1,
          title: 'Corporate Events',
          itemOne: 'Venue',
          itemTwo: 'Games and sports',
          itemThree: 'Special requests',
        },
        {
          id: 2,
          title: 'Tourist',
          itemOne: 'Accommodation',
          itemTwo: 'Meals',
          itemThree: 'Internet / Wi-Fi',
          itemFour: 'Non-priced activities',
        },
        {
          id: 3,
          title: 'Training',
          itemOne: 'Coffee',
          itemTwo: 'Irish Potatoes',
          itemThree: 'Chickens',
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-data {
  margin-left: 5%;
  margin-right: 5%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 35px;
  row-gap: 20px;
  width: auto;
}

.card-title {
  color: white;
  background-color: #068d68;
}

li {
  text-align: justify;
  font-size: 11pt;
}
</style>
