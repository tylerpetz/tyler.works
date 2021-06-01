<script>
export default {
  name: 'for-people',
  data() {
    return {
      jobs: [
        {
          title: 'Front End Chapter Lead',
          company: 'booj / RE-MAX',
          companyUrl: 'https://booj.com',
          time: 'June 2020 - Current',
          description: 'Vue Stuff',
          tools: ['Vue', 'Nuxt', 'TailwindCSS', 'Jest', 'Cypress']
        },
        {
          title: 'Freelance Web Developer',
          company: 'Tyler Works',
          time: 'July 2012 - Current',
          description: 'Doing anything (web-related) that the clients ask for, day and night. Lots of UI Design, e-commerce, server setup, website creation, graphic design. A Tyler of all trades.',
          tools: ['Nuxt', 'Netlify', 'Shopify', 'AWS Lambda', 'Express', 'Mongoose']
        },
        {
          title: 'R&D Developer',
          company: 'booj',
          companyUrl: 'https://booj.com',
          time: 'March 2019 - June 2020',
          description: 'Vue Stuff',
          tools: ['Vue', 'Nuxt', 'TailwindCSS', 'Jest', 'Cypress']
        },
        {
          title: 'Front End Developer',
          company: 'Strive Media',
          companyUrl: 'https://strivemedia.com',
          time: 'July 2015 - March 2019',
          description: 'I developed high-traffic high-performance web sites and landing pages for awesome brands like Trips to Discover, Insider Car News, and Grocery Coupon Cart. I built a lot of cool features, like reporting dashboards and analytics, email building platforms, and subscription funnels.',
          tools: ['Wordpress', 'Laravel', 'Vagrant', 'CircleCI', 'MJML']
        },
        {
          title: 'Front End Developer',
          company: 'Eleven11 Group',
          companyUrl: 'https://e11group.com/',
          time: 'August 2015 - July 2015',
          description: 'Worked on a small team to quickly develop websites for local businesses. I primarily created responsive Wordpress themes from Photoshop design files and wired them up.',
          tools: ['Vue', 'Nuxt', 'TailwindCSS', 'Jest', 'Cypress']
        },
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
        <section>
          <section
            v-for="job in jobs"
            :key="job.title"
            class="prose border-b-2 pb-4 mb-8 border-theme-border"
          >
            <h2>
              {{ job.title }} -
              <template v-if="job.companyUrl">
                <a
                  :href="job.companyUrl"
                  target="_blank"
                >{{ job.company }}</a>
              </template>
              <span v-else>{{ job.company }}</span>
            </h2>
            <p>{{ job.description }}</p>
            <dl class="flex flex-row items-center space-x-4 list-none">
              <dd
                v-for="tool in job.tools"
                :key="tool"
              >
                {{ tool }}
              </dd>
            </dl>
          </section>
        </section>
      </div>
      <div class="w-full lg:w-1/3 flex flex-col space-y-6">
        <section class="bg-theme-bg-d p-6 pb-5 rounded prose prose-theme-text prose-sm">
          <h3>
            Code Skills
          </h3>
          <ul>
            <li>VueJS/NuxtJS*</li>
            <li>Javascript/ES6+*</li>
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
            <li>Cypress*</li>
            <li>NPM/Yarn</li>
            <li>Wordpress</li>
            <li>Google Tag Manager</li>
            <li>Google Analytics</li>
            <li>Mailchimp</li>
            <li>AWS (EC2, S3, Lambda, Lightsail)</li>
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
