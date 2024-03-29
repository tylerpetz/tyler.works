<script>
export default {
  name: 'cv',
  data() {
    return {
      editing: this.$route.query.editing,
      summary: `With over 10 years work in web development, I bring a comprehensive front end skill set and years of hands-on experience.
        My expertise lies in HTML, CSS, JavaScript, and ${this.$route.query.alt ? 'TypeScript' : 'Vue.js'}, allowing me to build responsive web applications and implement pixel-perfect designs that delight users.
        I have a proven track record of collaborating with cross-functional teams and stakeholders, ensuring the delivery of high-quality software.
        With experience in RESTful APIs, TypeScript, GraphQL, ${this.$route.query.alt ? 'and various frontend Javascript frameworks, ' : 'and git, '} I am well-equipped to develop and scale web applications.
        I thrive in fast-paced environments, and I maintain a high level of quality and attention to detail in my work.`,
      jobs: [
        {
          company: 'RE/MAX',
          location: 'Denver, CO',
          timespan: '5 years',
          tools: ['React/Next.js', 'Vue/Nuxt.js', 'Angular', 'Typescript', 'TailwindCSS', 'Jest', 'Cypress', 'Laravel'],
          roles: [
            {
              title: 'Senior Frontend Developer',
              place: 'Remote',
              time: '2022 - 2024',
              bullets: [
                'Worked with my team of 3 to develop a high performance web application using Vue and Nuxt for RE/MAX, resulting in 70% faster page loads on key pages.', // 3.5s to 1s
                'Contributed to the map page integration, leveraging Google Maps API to provide users with an interactive map for searching real estate listings.',
                'Translated Figma and InVision designs into reusable components in a design system using Storybook to maintain a consistent UI and a small CSS footprint.',
                'Established and maintained an integration test suite using Cypress, resulting in a 60% decrease in visual and functional regression issues in our application.', // 110 issues to 45 issues
                'Implemented Sentry to effectively track and address issues, bugs, and performance.',
                'Aided in the development of an updated RE/MAX website with React, Next.js, and TypeScript to bring various applications under one codebase.',
              ],
              bullets2: [
                'Developed a high performance web applications using Vue/Nuxt.js and React/Next.js with TypeScript, resulting in 70% faster page loads on key pages.', // 3.5s to 1s
                'Contributed to the map page integration, leveraging Google Maps API to provide users with an interactive map for searching real estate listings.',
                'Translated Figma and InVision designs into reusable components in a design system using Storybook to maintain a consistent UI and a small CSS footprint.',
                'Established and maintained an integration test suite using Cypress, resulting in a 60% decrease in visual and functional regression issues in our application.', // 110 issues to 45 issues
                'Implemented Sentry to effectively track and address issues, bugs, and performance.',
              ]
            },
            {
              title: 'Lead Frontend Developer',
              place: 'Remote',
              time: '2020 - 2022',
              bullets: [
                'Led a team of 11 Vue.js developers, aiding with collaboration and delivering high-quality frontend solutions across 5 different product teams.',
                'Conducted resume reviews and interviews for frontend and backend developers, presented candidates to upper management.',
                'Performed daily code reviews to ensure adherence to industry best practices and coding standards, reviewing over 300 changes yearly.',
                'Mentored and guided 2 junior developers, facilitating their professional growth and the team\'s skill enhancement.',
                'Revamped and helped maintain our CI/CD deployment process, resulting in a 65% reduction in deployment time, and enabling us to deploy changes daily.', // 25 mins to 9 mins
                'Proactively optimized site speed and performance, resulting in a notable reduction in page load times and enhanced user experience.',
              ],
              bullets2: [
                'Led a team of 11 frontend developers, aiding with collaboration and delivering high-quality Javascript and Typescript applications across 5 different product teams.',
                'Conducted resume reviews and interviews for frontend and backend developers, presented candidates to upper management.',
                'Performed daily code reviews to ensure adherence to industry best practices and coding standards, reviewing over 300 changes yearly.',
                'Mentored and guided 2 junior developers, facilitating their professional growth and the team\'s skill enhancement.',
                'Revamped and helped maintain our CI/CD deployment process, resulting in a 65% reduction in deployment time, and enabling us to deploy changes daily.', // 25 mins to 9 mins
                'Proactively optimized site speed and performance, resulting in a notable reduction in page load times and enhanced user experience.',
              ]
            },
            {
              title: 'R&D Developer',
              place: 'On-site',
              time: '2019 - 2020',
              bullets: [
                'Contributed to the development of a comprehensive suite for RE/MAX agents using Vue.js and Typescript, allowing them to manage leads, track active deals, and build their online presence. This led to a 67% increase in lead conversion rates for agents.', // 15% to 25%
                'Worked with API developers to build data-intensive workflows, including front and backend validation, sorting, filtering, pagination, and searching.',
                'Engineered a customizable website builder integrated with a robust CMS using Vue and Nuxt, giving agents the ability to personalize the display of their listings and services, resulting in over 12,000 personalized web pages built for our agents.',
                'Implemented a centralized system for managing contacts, calendars, and reminders, fostering better organization and timely follow-ups for real estate agents.',
                'Collaborated with cross-functional teams to gather requirements and continuously enhanced the tooling suite.',
              ],
              bullets2: [
                'Contributed to the development of a comprehensive suite for RE/MAX agents using various Javascript frameworks, allowing them to manage leads, track active deals, and build their online presence. This led to a 67% increase in lead conversion rates for agents.', // 15% to 25%
                'Worked with API developers to build data-intensive workflows, including front and backend validation, sorting, filtering, pagination, and searching.',
                'Engineered a customizable website builder integrated with a robust CMS, giving agents the ability to personalize the display of their listings and services, resulting in over 12,000 personalized web pages built for our agents.',
                'Implemented a centralized system for managing contacts, calendars, and reminders, fostering better organization and timely follow-ups for real estate agents.',
                'Collaborated with cross-functional teams to gather requirements and continuously enhanced the tooling suite.',
              ]
            },
          ]
        },
        {
          title: 'Freelance Web Developer',
          location: 'Sarasota, FL + Denver, CO',
          place: 'Remote',
          timespan: '12 years',
          company: 'Tyler Works',
          time: '2012 - Current',
          bullets: [
            'Designed and built end-to-end website solutions for various clients.',
            'Worked with Vue.js and Nuxt.js to craft dynamic and responsive user interfaces, ensuring an engaging and seamless user experience across various projects.',
            'Utilized Shopify to create e-commerce solutions, integrating custom features to meet client-specific requirements.',
            'Managed hosting some websites on AWS, helped moved clients off of pricy hosting services and dedicated servers, saving my clients an average of 83%.', // 120/mo to 20/mo
            'Deployed websites using Netlify, optimizing the CI/CD pipeline for quick and easy project delivery.',
            'Took care of domain management, including registration, configuration, and DNS setup.',
          ],
          bullets2: [
            'Designed and built end-to-end website solutions for various clients.',
            'Worked with various Javascript frameworks to craft dynamic and responsive user interfaces, ensuring an engaging and seamless user experience across various projects.',
            'Utilized Shopify to create e-commerce solutions, integrating custom features to meet client-specific requirements.',
            'Managed hosting some websites on AWS, helped moved clients off of pricy hosting services and dedicated servers, saving my clients an average of 83%.', // 120/mo to 20/mo
            'Deployed websites using Netlify, optimizing the CI/CD pipeline for quick and easy project delivery.',
            'Took care of domain management, including registration, configuration, and DNS setup.',
          ],
          tools: ['Vue/Nuxt', 'React', 'Svelte', 'Angular', 'Netlify', 'Prisma', 'Shopify', 'Express']
        },
        {
          title: 'Frontend Developer',
          location: 'Sarasota, FL',
          place: 'On-site',
          timespan: '3.5 years',
          company: 'Strive Media',
          companyUrl: 'https://strivemedia.com',
          time: '2015 - 2019',
          bullets: [
            'Developed frontends for a high-traffic web publisher covering travel, couponing, and automotive news, serving over 15 million annual visitors.',
            'Worked with designers to create visually appealing and user-friendly websites.',
            'Engineered custom ad integrations and workflows for travel deals to build revenue.',
            'Leveraged Google Analytics to collect data, allowing the team to refine content strategy.',
            'Built personalized email campaigns with MailChimp for continued communication with over 1.2 million subscribers.',
          ],
          bullets2: [
            'Developed frontends for a high-traffic web publisher covering travel, couponing, and automotive news, serving over 15 million annual visitors.',
            'Worked with designers to create visually appealing and user-friendly websites.',
            'Engineered custom ad integrations and workflows for travel deals to build revenue.',
            'Leveraged Google Analytics to collect data, allowing the team to refine content strategy.',
            'Built personalized email campaigns with MailChimp for continued communication with over 1.2 million subscribers.',
          ],
          tools: ['Wordpress', 'Laravel', 'Vagrant', 'SCSS', 'Vue', 'Bootstrap', 'Material UI']
        },
        {
          title: 'Frontend Developer',
          company: 'Eleven11 Group',
          location: 'Tampa, FL',
          place: 'Remote',
          timespan: '3 years',
          companyUrl: 'https://e11group.com/',
          time: '2012 - 2015',
          bullets: [
            'Translated Photoshop layouts into themes for WordPress for over 25 businesses, optimizing them for various screen sizes and devices.',
            'Ensured the maintainability of themes and plugins, facilitating easy content updates and future modifications for clients.',
            'Maintained a client-focused approach, making iterative improvements to meet the evolving needs of each business.',
            'Contributed to the growth of local businesses by providing them with an online presence that effectively showcased their products and services.'
          ],
          bullets2: [
            'Translated Photoshop layouts into themes for WordPress for over 25 businesses, optimizing them for various screen sizes and devices.',
            'Ensured the maintainability of themes and plugins, facilitating easy content updates and future modifications for clients.',
            'Maintained a client-focused approach, making iterative improvements to meet the evolving needs of each business.',
            'Contributed to the growth of local businesses by providing them with an online presence that effectively showcased their products and services.'
          ],
          tools: ['Photoshop', 'Wordpress', 'jQuery', 'Bootstrap']
        },
      ],
      sections: [
        {
          title: 'My Strongest Skills',
          items: ['Vue', 'Nuxt.js', 'Next.js', 'TailwindCSS', 'Prisma', 'Cypress']
        },
        {
          title: 'Hobbies',
          items: ['Collecting Vinyl', 'Building Mechanical Keyboards', 'Coffee', 'Live Concerts', 'PC Gaming', 'Traveling']
        },
        // {
        //   title: 'Professional References',
        //   hidden: true,
        //   items: ['Sean O\'Toole - 12344325 - Homie']
        // }
      ]
    }
  }
}
</script>

<template>
  <section class="mb-24 flex flex-col lg:flex-row lg:space-x-6 print:mb-0 print:text-black">
    <div class="w-full lg:w-2/3 print:w-full">
      <h1 class="text-2xl text-theme-text print:text-black font-semibold print:-mb-1">
        Tyler Petz
      </h1>
      <h2 class="text-lg print:text-base text-theme-text-d print:text-black mb-8 print:mb-4">
        <em class="hidden print:inline">Denver, Colorado</em>
        <em class="hidden print:block text-sm">tylerpetz@gmail.com - <a
          href="https://tyler.works"
          target="_blank"
          class="underline"
        >tyler.works</a> - <a
          href="https://www.linkedin.com/in/tyler-petz/"
          target="_blank"
          class="underline"
        >linkedin.com/in/tyler-petz/</a></em>
      </h2>
      <template v-if="$route.query.qual">
        <h1 class="font-semibold mb-4">
          Summary of Qualifications
        </h1>
        <textarea
          v-if="editing"
          v-model="summary"
          class="print:hidden w-full bg-theme-bg text-theme-text border-theme-border"
          rows="10"
        />
        <p class="mb-6 text-sm">
          {{ summary }}
        </p>
      </template>
      <h1 class="font-semibold hidden print:block mb-0">
        Professional Experience
      </h1>
      <section
        v-for="job in jobs"
        :key="job.title"
        class="border-t-2 pt-8 mb-8 border-theme-border print:border-none print:mb-2 print:pt-3"
      >
        <template v-if="job.roles">
          <h2 class="text-xl lg:text-2xl print:text-base mb-4 flex flex-row justify-between print:mb-2">
            {{ job.company }} <span class="text-lg print:text-base">{{ job.location }} - {{ job.timespan }}</span>
          </h2>
          <section
            v-for="role in job.roles"
            :key="role.title"
            class="mb-2 print:mb-2"
          >
            <h3
              class="text-lg lg:text-xl print:text-base print:inline"
            >
              {{ role.title }} - {{ role.place }} <span class="print:inline hidden">-</span>
            </h3>
            <h4
              class="mb-4 italic print:inline print:text-base"
            >
              {{ role.time }}
            </h4>
            <ul
              class="list-disc mb-6 pl-6 print:mb-0"
            >
              <li
                v-for="(bullet, index) in $route.query.alt ? role.bullets2 : role.bullets"
                :key="index"
                class="print:text-sm"
              >
                {{ bullet }}
              </li>
            </ul>
          </section>
          <dl
            :key="job.title"
            class="flex flex-row items-center space-x-2 print:space-x-1 list-none flex-wrap mb-4"
          >
            <dd class="pt-1 text-sm print:mr-2 print:text-xs">
              Technology Used
            </dd>
            <dd
              v-for="tool in job.tools"
              :key="tool"
              class="px-1 pt-1 bg-accent-cap text-accent-legend rounded leading-none text-sm print:text-xs"
            >
              {{ tool }}
            </dd>
          </dl>
        </template>

        <template v-else>
          <h2
            class="text-xl lg:text-2xl mb-1 print:text-base print:mb-0"
          >
            <template v-if="job.companyUrl">
              <a
                :href="job.companyUrl"
                target="_blank"
              >{{ job.company }}</a>
            </template>
            <span v-else>{{ job.company }}</span>
            <span class="float-right text-lg print:text-base">{{ job.location }} - {{ job.timespan }}</span>
          </h2>
          <h3
            class="text-lg lg:text-xl print:text-base print:inline"
          >
            {{ job.title }} - {{ job.place }} <span class="print:inline hidden">-</span>
          </h3>
          <h4 class="mb-4 italic print:inline print:text-base">
            {{ job.time }}
          </h4>
          <ul class="list-disc mb-6 pl-6 print:mb-2">
            <li
              v-for="(bullet, index) in $route.query.alt ? job.bullets2 : job.bullets"
              :key="index"
              class="print:text-sm"
            >
              {{ bullet }}
            </li>
          </ul>
          <dl
            class="flex flex-row items-center space-x-2 list-none flex-wrap"
          >
            <dd class="pt-1 text-sm print:mr-2 print:text-xs">
              Technology Used
            </dd>
            <dd
              v-for="tool in job.tools"
              :key="tool"
              class="px-1 pt-1 bg-accent-cap text-accent-legend rounded leading-none text-sm print:text-xs"
            >
              {{ tool }}
            </dd>
          </dl>
        </template>
      </section>
    </div>

    <div class="w-full lg:w-1/3 flex flex-col space-y-8 print:mt-4 print:space-y-4">
      <section
        v-for="section in sections"
        :key="section.title"
        class="bg-theme-bg-d p-6 pb-5 rounded prose prose-theme-text prose-sm print:p-0 print:text-black"
        :class="section.hidden ? 'hidden print:block' : ''"
      >
        <h3 class="print:text-black">
          {{ section.title }}
        </h3>
        <ul>
          <li
            v-for="(item, index) in section.items"
            :key="index"
            class="print:pl-0 print:ml-0 pl-0 ml-0"
            :class="section.hidden ? 'print:block' : 'print:inline'"
          >
            {{ item }}
          </li>
        </ul>
      </section>
      <section class="bg-theme-bg-d p-6 pb-5 rounded prose prose-theme-text prose-sm print:hidden">
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
