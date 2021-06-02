<script>
export default {
  name: 'for-people',
  data() {
    return {
      jobs: [
        {
          title: 'Front End Chapter Lead',
          company: 'booj (RE/MAX)',
          companyUrl: 'https://booj.com',
          time: 'June \'20 - Current',
          description: 'As chapter lead I continued to develop the software suite for RE/MAX, as well as set the standards for the front end team, onboarded new team members, championed best practices and testing, keeping the entire team on the cutting edge of front end technology.',
          tools: ['Vue', 'Nuxt', 'TailwindCSS', 'Jest', 'Cypress']
        },
        {
          title: 'R&D Developer',
          company: 'booj',
          companyUrl: 'https://booj.com',
          time: 'March \'19 - June \'20',
          description: 'Developed a suite of applications for RE/MAX\'s real estate agents. This included a CRM, email campaign builder, and a CMS that powers remax.com, thousands of agent websites, and individual property websites.',
          tools: ['Vue', 'Nuxt', 'TailwindCSS', 'Jest', 'Cypress']
        },
        {
          title: 'Freelance Web Developer',
          company: 'Tyler Works',
          time: 'July \'12 - Current',
          description: 'Doing anything (web-related) that the clients ask for, day and night. Lots of UI Design, e-commerce, server setup, website creation, graphic design. A Tyler of all trades.',
          tools: ['Nuxt', 'Netlify', 'Shopify', 'AWS Lambda', 'Express', 'Mongoose']
        },
        {
          title: 'Front End Developer',
          company: 'Strive Media',
          companyUrl: 'https://strivemedia.com',
          time: 'July \'15 - March \'19',
          description: 'I developed high-traffic high-performance web sites and landing pages for awesome brands like Trips to Discover, Insider Car News, and Grocery Coupon Cart. I built a lot of cool features, like reporting dashboards and analytics, email building platforms, and subscription funnels.',
          tools: ['Wordpress', 'Laravel', 'Vagrant', 'CircleCI', 'MJML']
        },
        {
          title: 'Front End Developer',
          company: 'Eleven11 Group',
          companyUrl: 'https://e11group.com/',
          time: 'August \'12 - July \'15',
          description: 'Worked on a small team to quickly develop websites for local businesses. I primarily created responsive Wordpress themes from Photoshop design files and wired them up.',
          tools: ['Photoshop', 'Wordpress', 'jQuery', 'ZURB Foundation', 'Bootstrap']
        },
      ],
      sections: [
        {
          title: 'Favorite Tools',
          items: ['Vue.js', 'Nuxt.js', 'Javascript/ES6+', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB', 'Webpack', 'HTML5', 'CSS3', 'Laravel', 'Markdown']
        },
        {
          title: 'Favorite Platforms',
          items: ['Netlify', 'Apollo GraphQL', 'Shopify', 'Cypress', 'Wordpress', 'Google Tag Manager', 'Google Analytics', 'Mailchimp', 'Sendgrid', 'AWS (EC2, S3, Lambda, Lightsail)']
        },
        {
          title: 'Hobbies',
          items: ['Collecting Records', 'Building Mechanical Keyboards', 'Live Concerts', 'Woodworking', 'PC Gaming']
        }
      ]
    }
  }
}
</script>

<template>
  <section class="mb-24 flex flex-col lg:flex-row lg:space-x-6 print:flex-row">
    <div class="w-full lg:w-2/3 print:w-2/3">
      <h1 class="text-2xl text-theme-text">
        Tyler Petz
      </h1>
      <h2 class="text-lg text-theme-text-d mb-8">
        <em>Web Developer</em>
      </h2>
      <section
        v-for="job in jobs"
        :key="job.title"
        class="border-t-2 pt-8 mb-8 border-theme-border print:border-none"
      >
        <h2 class="text-xl lg:text-2xl mb-1">
          {{ job.title }} -
          <template v-if="job.companyUrl">
            <a
              :href="job.companyUrl"
              target="_blank"
            >{{ job.company }}</a>
          </template>
          <span v-else>{{ job.company }}</span>
        </h2>
        <h3 class="mb-4 italic">
          {{ job.time }}
        </h3>
        <p class="mb-4">
          {{ job.description }}
        </p>
        <dl class="flex flex-row items-center space-x-2 list-none flex-wrap">
          <dd class="pt-1 text-sm">
            Favorite Tech
          </dd>
          <dd
            v-for="tool in job.tools"
            :key="tool"
            class="px-1 pt-1 bg-accent-cap text-accent-legend rounded leading-none text-sm"
          >
            {{ tool }}
          </dd>
        </dl>
      </section>
    </div>
    <div class="w-full lg:w-1/3 flex flex-col space-y-8 print:w-1/3">
      <section
        v-for="section in sections"
        :key="section.title"
        class="bg-theme-bg-d p-6 pb-5 rounded prose prose-theme-text prose-sm"
      >
        <h3>
          {{ section.title }}
        </h3>
        <ul>
          <li
            v-for="(item, index) in section.items"
            :key="index"
          >
            {{ item }}
          </li>
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
    </div>
  </section>
</template>
