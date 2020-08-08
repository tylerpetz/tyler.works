<script>
export default {
  name: 'BragList'
}
</script>

<template>
  <ul>
    <li class="list-item">
      I'm a
      <em>web developer</em> at
      <a
        href="http://www.booj.com"
        target="_blank"
        class="list-item__link"
        v-html="`booj`"
      /> in Denver, CO. If I weren't a web developer I'd have no business there.
    </li>
    <li class="list-item">
      I worked as a
      <em>web developer</em> at
      <nuxt-link
        to="/work/strive-media"
        class="list-item__link"
        v-html="`Strive Media`"
      />. Call them, they'll tell you.
    </li>
    <li class="list-item">
      I have also worked as a
      <em>web developer</em> for other companies, you can
      <nuxt-link
        to="/cv"
        class="list-item__link"
        v-html="`check my resume`"
      /> if you don't believe me.
    </li>
    <li class="list-item">
      I am currently
      <nuxt-link
        :to="{
          name: 'contact',
          params: {
            goTo: 'job'
          }
        }"
        class="list-item__link"
        v-html="`accepting new clients`"
      /> as a <em>web developer</em>. Seriously, why else would I be doing that?
    </li>
    <li class="list-item">
      I share my
      <em>web development code</em> that I have written on
      <a
        href="https://github.com/tylerpetz"
        target="_blank"
        class="list-item__link"
        v-html="`my github`"
      />. This is like a dead giveaway that I'm a web developer.
    </li>
  </ul>
</template>
