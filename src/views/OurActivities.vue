<template>
  <div>
    <HeaderSection />
    <CoffeeProduction />
    <FooterSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue';
import CoffeeProduction from '@/components/OurActivities/CoffeeProduction.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'CoffeePage',
  components: {
    HeaderSection,
    CoffeeProduction,
    FooterSection,
  },
};
</script>
