<script>
export default {
  name: 'for-people',
  data() {
    return {
      jobs: [
        {
          title: 'R&D Developer',
          company: 'booj',
          time: 'March 2019 - June 2020',
          description: 'Vue Stuff',
          tools: ['VueJS', 'TailwindCSS', 'Jest']
        }
      ]
    }
  }
}
</script>

<template>
  <section>
    <h1 class="text-2xl text-theme-text">
      Tyler Petz
    </h1>
    <h2 class="text-lg text-theme-text-d">
      <em>Web Developer</em>
    </h2>
    <div class="mt-6 flex flex-col lg:flex-row space-x-6">
      <div class="w-full lg:w-2/3">
        <section class="prose prose-theme-text prose-sm">
          <h3>
            Real-World Experience
          </h3>
          <!-- <section
            v-for="job in jobs"
            :key="job.title"
          >
            {{ job.title }}
          </section> -->
          <div class="border-b-2 pb-4 mb-8 border-theme-border">
            <h4>
              R&amp;D Developer
              <span>Starting March 2019</span>
            </h4>
            <h5>
              Booj
            </h5>
            <p>
              When I figure it out, I'll let you know!
            </p>
            <dt class="flex flex-row items-center space-x-4 list-none">
              <li>
                Favorite Tools
              </li>
              <li>
                VueJS
              </li>
              <li>
                Cypress
              </li>
              <li>
                Laravel
              </li>
            </dt>
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
              I developed high-traffic
              high-performance web sites and
              landing pages for awesome brands like Trips
              to Discover, Insider Car News, and Grocery Coupon Cart. I built a
              lot of cool features, like
              reporting dashboards and
              analytics, email building platforms, and
              subscription funnels.
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
              night. Lots of UI Design, e-commerce, server
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
              responsive Wordpress themes from Photoshop
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
              Highly secure websites that generated lots of
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
      <div class="w-full lg:w-1/3 flex flex-col space-y-6">
        <section class="bg-theme-bg-d p-6 pb-5 rounded prose prose-theme-text prose-sm">
          <h3>
            Code Skills
          </h3>
          <ul>
            <li>VueJS/NuxtJS*</li>
            <li>Javascript/ES6*</li>
            <li>TailwindCSS*</li>
            <li>NodeJS*</li>
            <li>Webpack</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>PHP7</li>
            <li>Markdown</li>
            <li>SASS/LESS</li>
            <li>Gulp</li>
            <li>Laravel</li>
          </ul>
        </section>
        <section class="bg-theme-bg-d p-6 pb-5 rounded prose prose-theme-text prose-sm">
          <h3>
            Applications/Platforms
          </h3>
          <ul>
            <li>Apollo GraphQL*</li>
            <li>Shopify*</li>
            <li>Cypress</li>
            <li>NPM/Yarn</li>
            <li>Wordpress</li>
            <li>Google Tag Manager</li>
            <li>Google Analytics</li>
            <li>Mailchimp</li>
            <li>Amazon Web Services (EC2, S3, Lightsail)</li>
          </ul>
        </section>
        <section class="bg-theme-bg-d p-6 pb-5 rounded prose prose-theme-text prose-sm">
          <h3>
            Hobbies
          </h3>
          <ul>
            <li>Collecting Records</li>
            <li>Building Mechanical Keyboards</li>
            <li>Live Concerts</li>
            <li>Woodworking</li>
            <li>PC Gaming</li>
          </ul>
        </section>
        <section class="bg-theme-bg-d p-6 pb-5 rounded prose prose-theme-text prose-sm">
          <h3>
            Contact Info
          </h3>
          <p>
            Email:
            <a href="mailto:tylerpetz@gmail.com">tylerpetz@gmail.com</a> <br>
            Location: Denver, CO, USA
          </p>
        </section>
        <span>* - I really like this.</span>
      </div>
    </div>
  </section>
</template>
