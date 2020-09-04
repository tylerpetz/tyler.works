<script>
import Buzzword from '~/components/Buzzword'

export default {
  name: 'Resume',
  components: {
    Buzzword
  },
  props: {
    intro: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <section class="resume">
    <h1
      v-if="intro"
      class="section-heading"
      v-html="intro"
    />
    <h2 class="heading">
      Tyler Petz
    </h2>
    <h3 class="subheading">
      <em>Web Developer</em>
    </h3>
    <div class="columns">
      <div class="column is-12-mobile is-12-tablet is-7-desktop">
        <section class="jobs">
          <h1 class="resume__header">
            Real-World Experience
          </h1>
          <div class="job resume__section">
            <h1 class="job__title">
              R&amp;D Developer
              <span class="job__time">Starting March 2019</span>
            </h1>
            <h2 class="job__company">
              Booj
            </h2>
            <p class="job__description resume__content">
              When I figure it out, I'll let you know!
            </p>
            <ul class="job__tools">
              <li class="job__tools--title">
                Favorite Tools
              </li>
              <li class="job__tool tag is-vue">
                VueJS
              </li>
              <li class="job__tool tag is-darkgreen">
                Cypress
              </li>
              <li class="job__tool tag is-danger">
                Laravel
              </li>
            </ul>
          </div>
          <div class="job resume__section">
            <h1 class="job__title">
              Front-End Developer, Project Manager
              <span class="job__time">2015 - 2019</span>
            </h1>
            <h2 class="job__company">
              Strive Media
            </h2>
            <p class="job__description resume__content">
              I developed <Buzzword>high-traffic</Buzzword>
              <Buzzword>high-performance</Buzzword> web sites and
              <Buzzword>landing pages</Buzzword> for awesome brands like Trips
              to Discover, Insider Car News, and Grocery Coupon Cart. I built a
              lot of cool features, like
              <Buzzword>reporting dashboards</Buzzword> and
              <Buzzword>analytics</Buzzword>, email building platforms, and
              <Buzzword>subscription funnels</Buzzword>.
            </p>
            <ul class="job__tools">
              <li class="job__tools--title">
                Favorite Tools
              </li>
              <li class="job__tool tag is-primary">
                Wordpress
              </li>
              <li class="job__tool tag is-danger">
                Laravel
              </li>
              <li class="job__tool tag is-info">
                Vagrant
              </li>
              <li class="job__tool tag is-success">
                CircleCI
              </li>
              <li class="job__tool tag is-orange">
                MJML
              </li>
            </ul>
          </div>
          <div class="job resume__section">
            <h1 class="job__title">
              Freelance Web Developer
              <span class="job__time">2012 - Present</span>
            </h1>
            <h2 class="job__company">
              127.0.0.1
            </h2>
            <p class="job__description resume__content">
              Doing anything (web-related) that the clients ask for, day and
              night. Lots of <Buzzword>UI Design</Buzzword>, e-commerce, server
              setup, website creation, graphic design. A Tyler of all trades.
            </p>
            <ul class="job__tools">
              <li class="job__tools--title">
                Favorite Tools
              </li>
              <li class="job__tool tag is-vue">
                VueJS/NuxtJS
              </li>
              <li class="job__tool tag is-info">
                Webpack
              </li>
              <li class="job__tool tag is-repo">
                Bulma
              </li>
              <li class="job__tool tag is-dark">
                Figma
              </li>
              <li class="job__tool tag is-darkgreen">
                Shopify
              </li>
            </ul>
          </div>
          <div class="job resume__section">
            <h1 class="job__title">
              Remote Front-End Developer
              <span class="job__time">2012 - 2015</span>
            </h1>
            <h2 class="job__company">
              Eleven11 Group
            </h2>
            <p class="job__description resume__content">
              Worked on a small team to quickly develop websites for local
              businesses. I primarily created
              <Buzzword>responsive Wordpress themes</Buzzword> from Photoshop
              design files and wired them up.
            </p>
            <ul class="job__tools">
              <li class="job__tools--title">
                Favorite Tools
              </li>
              <li class="job__tool tag is-primary">
                Wordpress
              </li>
              <li class="job__tool tag is-info">
                Foundation
              </li>
              <li class="job__tool tag is-primary">
                Adobe Photoshop
              </li>
            </ul>
          </div>
          <div class="job resume__section">
            <h1 class="job__title">
              Front End Web Developer <span class="job__time">2014</span>
            </h1>
            <h2 class="job__company">
              Grand Incentives
            </h2>
            <p class="job__description resume__content">
              Worked with a marketing team to create websites for booking and
              purchasing cruise tickets.
              <Buzzword>Highly secure</Buzzword> websites that generated lots of
              revenue.
            </p>
            <ul class="job__tools">
              <li class="job__tools--title">
                Favorite Tools
              </li>
              <li class="job__tool tag is-info">
                Foundation
              </li>
              <li class="job__tool tag is-warning">
                Adobe Illustrator
              </li>
            </ul>
          </div>
          <div class="job resume__section">
            <h1 class="job__title">
              Art Director <span class="job__time">2009 - 2012</span>
            </h1>
            <h2 class="job__company">
              Display Products International
            </h2>
            <p class="job__description resume__content">
              I created and managed brand assets, marketing materials,
              packaging, and product design for an e-commerce company that
              produces large scale printed graphics, signs, and cut-outs.
            </p>
            <ul class="job__tools">
              <li class="job__tools--title">
                Favorite Tools
              </li>
              <li class="job__tool tag is-primary">
                Adobe Photoshop
              </li>
              <li class="job__tool tag is-warning">
                Adobe Illustrator
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="column is-12-mobile is-12-tablet is-5-desktop">
        <section class="skills">
          <h1 class="resume__header">
            Languages &amp; Tools
          </h1>
          <div class="resume__section content">
            <ul class="skills__list">
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>PHP7</li>
              <li>CSS3</li>
              <li>Markdown</li>
              <li>ES6</li>
              <li>Wordpress</li>
              <li>SASS</li>
              <li>Webpack</li>
              <li>Yarn</li>
              <li>VueJS/NuxtJS</li>
              <li>Cypress</li>
              <li>Laravel</li>
              <li>NodeJS</li>
              <li>Gulp</li>
              <li>Google Tag Manager</li>
              <li>Google Analytics</li>
              <li>Mailchimp</li>
              <li>Amazon Web Services (EC2, S3, Lightsail)</li>
            </ul>
          </div>
        </section>
        <section class="hobbies">
          <h1 class="resume__header">
            Hobbies
          </h1>
          <div class="resume__section content">
            <ul class="hobbies__list">
              <li>Collecting Records</li>
              <li>Live Concerts</li>
              <li>Woodworking</li>
              <li>Gaming</li>
            </ul>
          </div>
        </section>
        <section class="hobbies">
          <h1 class="resume__header">
            Contact Info
          </h1>
          <div class="resume__section content">
            <p>
              Email:
              <a href="mailto:tylerpetz@gmail.com">tylerpetz@gmail.com</a>
            </p>
            <p>Location: Sarasota, FL, USA</p>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// .resume {
//   &__header {
//     color: $blue;
//     font-size: $size-2;
//     font-weight: bold;
//     margin-bottom: $gap / 4;

//     @include until($tablet) {
//       font-size: $size-3;
//     }
//   }

//   &__section {
//     background: $white;
//     margin-bottom: $gap / 2;
//     padding: $gap / 2;
//     border: 1px solid #ddd;
//     transition: box-shadow 250ms ease;
//     box-shadow: 0 10px 35px -10px rgba(51, 51, 51, 0.3),
//       0 25px 50px 0 rgba(51, 51, 51, 0.15);

//     &:hover {
//       box-shadow: 0 20px 70px -10px rgba(51, 51, 51, 0.3),
//         0 25px 50px 0 rgba(51, 51, 51, 0.15);
//     }

//     @include until($tablet) {
//       box-shadow: none !important;
//       padding: 0;
//       padding-bottom: $gap / 2;
//       border-left: none;
//       border-right: none;
//       border-top: none;
//       border-bottom: 1px solid #ddd;
//     }
//   }

//   &__content {
//     font-size: $size-5;
//     margin-top: $gap / 4;
//   }
// }

// .objective,
// .jobs {
//   padding-bottom: $gap;

//   @include until($tablet) {
//     padding: 0;
//   }
// }

// .objective {
//   @include until($tablet) {
//     padding: 0;
//     padding-bottom: $gap / 2;
//     border-bottom: 1px solid #ddd;
//     margin-bottom: $gap / 2;
//   }
// }

// .job {
//   &__title {
//     color: $blue;
//     font-size: $size-4;
//     font-style: italic;
//   }

//   &__company {
//     color: $green;
//     font-size: $size-5;
//     text-transform: uppercase;
//   }

//   &__time {
//     font-size: $size-6;
//     font-style: normal;
//     font-weight: normal;
//     padding-left: $gap / 4;
//     text-transform: uppercase;

//     @include until($tablet) {
//       display: block;
//       padding: 0;
//     }
//   }

//   &__tools {
//     align-items: center;
//     color: $blue;
//     display: flex;
//     flex-wrap: wrap;
//     margin-top: $gap / 2;

//     @include until($tablet) {
//       justify-content: center;
//     }

//     &--title {
//       font-size: $size-6;
//       margin-right: $gap / 3;
//       white-space: nowrap;
//       color: $dark;

//       @include until($tablet) {
//         flex-basis: 100%;
//         margin-bottom: $gap / 6;
//         text-align: center;
//         margin-right: 0;
//       }
//     }
//   }

//   &__tool {
//     margin-right: $gap / 6;

//     @include until($tablet) {
//       margin-bottom: $gap / 6;
//       margin-right: 4px;
//       margin-left: 4px;
//     }
//   }
// }

// .skills {
//   &__list {
//     margin-top: 0;
//   }
// }
</style>
