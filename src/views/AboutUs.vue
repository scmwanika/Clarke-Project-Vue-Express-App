<template>
  <div>
    <HeaderSection />
    <AboutSection />
    <TeamSection />
    <FooterSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection.vue';
import AboutSection from '@/components/AboutUs/AboutSection.vue';
import TeamSection from '@/components/AboutUs/TeamSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'AboutPage',
  components: {
    HeaderSection,
    AboutSection,
    TeamSection,
    FooterSection,
  },
};
</script>
