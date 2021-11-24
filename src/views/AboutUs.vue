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
import AboutSection from '@/components/About/AboutSection.vue';
import TeamSection from '@/components/About/TeamSection.vue';
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
