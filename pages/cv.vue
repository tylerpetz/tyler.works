<script>
export default {
  name: 'cv',
  data() {
    return {
      jobs: [
        {
          title: 'Senior Frontend Developer',
          company: 'RE/MAX',
          companyUrl: 'https://remax.com',
          time: 'June \'22 - January \'24',
          description: 'I helped enhance lead generation through a listings search website, remax.com. I played a crucial role in supporting and sunsetting legacy software, showcasing adaptability and migration skills, while also contributing to rebuilding pieces of our application on more suitable tech stacks.',
          tools: ['React/Next.js', 'Vue/Nuxt', 'Wordpress', 'TailwindCSS', 'Jest', 'Cypress', 'GitHub Actions']
        },
        {
          title: 'Frontend Chapter Lead',
          company: 'RE/MAX',
          companyUrl: 'https://remax.com',
          time: 'June \'20 - June \'22',
          description: 'As chapter lead I continue to develop the software suite for RE/MAX, as well as set the standards for the frontend team, onboard new team members, champion best practices and testing, and keep the entire team on the cutting edge of frontend technology.',
          tools: ['Vue/Nuxt', 'React/Next.js', 'TailwindCSS', 'Jest', 'Cypress', 'GitHub Actions']
        },
        {
          title: 'R&D Developer',
          company: 'booj (acquired by RE/MAX)',
          companyUrl: 'https://booj.com',
          time: 'March \'19 - June \'20',
          description: 'Developed a suite of applications for RE/MAX\'s real estate agents. This included a CRM, email campaign builder, and a CMS that powers remax.com, thousands of agent websites, and individual property websites.',
          tools: ['Vue/Nuxt', 'TailwindCSS', 'Jest', 'Cypress', 'Laravel']
        },
        {
          title: 'Freelance Web Developer',
          company: 'Tyler Works',
          time: 'July \'12 - Current',
          description: 'Doing anything (web-related) that the clients ask for, day and night. Lots of UI Design, e-commerce, server setup, website creation, graphic design. A Tyler of all trades.',
          tools: ['Vue/Nuxt', 'Netlify', 'Prisma', 'Shopify', 'AWS Lambda', 'Express', 'Mongoose']
        },
        {
          title: 'Frontend Developer',
          company: 'Strive Media',
          companyUrl: 'https://strivemedia.com',
          time: 'July \'15 - March \'19',
          description: 'I developed high-traffic high-performance web sites and landing pages for awesome brands like Trips to Discover, Insider Car News, and Grocery Coupon Cart. I built a lot of cool features, like reporting dashboards and analytics, email building platforms, and subscription funnels.',
          tools: ['Wordpress', 'Laravel', 'Vagrant', 'CircleCI', 'MJML']
        },
        {
          title: 'Frontend Developer',
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
          items: ['Vue', 'Nuxt.js', 'React', 'Next.js', 'Javascript/ES6+', 'TailwindCSS', 'Node.js', 'Prisma', 'Cypress']
        },
        {
          title: 'Favorite Platforms',
          items: ['Netlify', 'Prisma', 'Shopify', 'Cypress.io', 'Wordpress', 'Supabase', 'AWS (EC2, S3, Lambda, Lightsail)']
        },
        {
          title: 'Hobbies',
          items: ['Collecting Records', 'Stand-up Comedy', 'Building Mechanical Keyboards', 'Lots of Coffee', 'Live Concerts', 'PC Gaming', 'Painting', 'Traveling']
        }
      ]
    }
  }
}
</script>

<template>
  <section class="mb-24 flex flex-col lg:flex-row lg:space-x-6 print:mb-0">
    <div class="w-full lg:w-2/3 print:w-full">
      <h1 class="text-2xl print:text-xl text-theme-text">
        Tyler Petz
      </h1>
      <h2 class="text-lg print:text-base text-theme-text-d mb-8 print:mb-4">
        <em class="print:hidden">Web Developer</em>
        <em class="hidden print:inline">tylerpetz@gmail.com - 941.518.9050</em>
      </h2>
      <section
        v-for="job in jobs"
        :key="job.title"
        class="border-t-2 pt-8 mb-8 border-theme-border print:border-none print:mb-2 print:pt-3"
      >
        <h2 class="text-xl lg:text-2xl mb-1 print:text-lg print:mb-0 print:inline">
          {{ job.title }} -
          <template v-if="job.companyUrl">
            <a
              :href="job.companyUrl"
              target="_blank"
            >{{ job.company }}</a>
          </template>
          <span v-else>{{ job.company }}</span>
        </h2>
        <h3 class="mb-4 italic print:inline">
          {{ job.time }}
        </h3>
        <p class="mb-4 print:mb-0 print:text-sm">
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
    <div class="w-full lg:w-1/3 flex flex-col space-y-8 print:mt-4 print:space-y-4">
      <section
        v-for="section in sections"
        :key="section.title"
        class="bg-theme-bg-d p-6 pb-5 rounded prose prose-theme-text prose-sm print:p-0"
        :class="{ 'print:hidden': section.title === 'Hobbies' }"
      >
        <h3>
          {{ section.title }}
        </h3>
        <ul>
          <li
            v-for="(item, index) in section.items"
            :key="index"
            class="print:inline print:pl-0 print:ml-0 pl-0 ml-0"
          >
            {{ item }}
          </li>
        </ul>
      </section>
      <section class="bg-theme-bg-d p-6 pb-5 rounded prose prose-theme-text prose-sm print:p-0">
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
