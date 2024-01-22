<script>
export default {
  name: 'cv',
  data() {
    return {
      jobs: [
        {
          company: 'RE/MAX',
          tools: ['React/Next.js', 'Vue/Nuxt.js', 'TailwindCSS', 'Jest', 'Cypress', 'Laravel', 'TypeScript'],
          roles: [
            {
              title: 'Senior Frontend Developer',
              time: 'June \'22 - January \'24',
              bullets: [
                'Worked with my team to develop a high performance web application using Vue and Nuxt for RE/MAX, a leading real estate franchise.',
                'Contributed to the map page integration, leveraging Google Maps API to provide users with an interactive map for searching real estate listings.',
                'Translated Figma and InVision designs into reusable components, used Tailwind CSS to maintain a consistent UI and a small CSS footprint.',
                'Established and maintained an integration test suite using Cypress, reducing visual and functional regression in our applications.',
                'Implemented Sentry to effectively track and address issues, bugs, and performance.',
                'Aided in the development of an updated RE/MAX website with React, Next.js, and TypeScript to bring various applications under one codebase.',
              ],
            },
            {
              title: 'Frontend Chapter Lead',
              time: 'June \'20 - June \'22',
              bullets: [
                'Led a team of 11 Vue.js developers, aiding with collaboration and delivering high-quality frontend solutions across 5 different product teams.',
                'Conducted resume reviews and interviews for frontend and backend developers, presented candidates to upper management.',
                'Conducted code reviews to ensure adherence to industry best practices and coding standards.',
                'Mentored and guided junior developers, facilitating their professional growth and the team\'s skill enhancement.',
                'Updated and helped maintain our CI/CD deployment process, ensuring painless and timely delivery of software updates and features.',
                'Proactively optimized site speed and performance, resulting in a notable reduction in page load times and enhanced user experience.',
              ],
            },
            {
              title: 'R&D Developer',
              time: 'March \'19 - June \'20',
              bullets: [
                'Contributed to the development of a comprehensive suite for RE/MAX agents using Vue.js, allowing them to manage leads, track active deals, and build their online presence.',
                'Worked with API developers to build data-intensive workflows, including front and backend validation, sorting, filtering, pagination, and searching.',
                'Engineered a customizable website builder integrated with a robust CMS using Vue and Nuxt, giving agents the ability to personalize the display of their listings and services.',
                'Implemented a centralized system for managing contacts, calendars, and reminders, fostering better organization and timely follow-ups for real estate agents.',
                'Collaborated with cross-functional teams to gather requirements and continuously enhanced the tooling suite.',
              ],
            },
          ]
        },
        {
          title: 'Freelance Web Developer',
          company: 'Tyler Works',
          time: 'July \'12 - Current',
          bullets: [
            'Designed and built end-to-end website solutions for various clients.',
            'Worked with Vue.js and Nuxt.js to craft dynamic and responsive user interfaces, ensuring an engaging and seamless user experience across various projects.',
            'Utilized Shopify to create e-commerce solutions, integrating custom features to meet client-specific requirements.',
            'Managed hosting some websites on AWS, helped moved clients off of pricy hosting services and dedicated servers.',
            'Deployed websites using Netlify, optimizing the CI/CD pipeline for quick and easy project delivery.',
            'Took care of domain management, including registration, configuration, and DNS setup',
          ],
          tools: ['Vue/Nuxt', 'Netlify', 'Prisma', 'Shopify', 'AWS Lambda', 'Express', 'Mongoose']
        },
        {
          title: 'Frontend Developer',
          company: 'Strive Media',
          companyUrl: 'https://strivemedia.com',
          time: 'July \'15 - March \'19',
          bullets: [
            'Developed frontends for a high-traffic web publisher covering travel, couponing, and automotive news.',
            'Worked with designers to create visually appealing and user-friendly websites.',
            'Engineered custom ad integrations and workflows for travel deals to build revenue.',
            'Leveraged Google Analytics to collect data, allowing the team to refine content strategy.',
            'Built personalized email campaigns with MailChimp for continued communication with subscribers.',
          ],
          tools: ['Wordpress', 'Laravel', 'Vagrant', 'SCSS']
        },
        {
          title: 'Frontend Developer',
          company: 'Eleven11 Group',
          companyUrl: 'https://e11group.com/',
          time: 'August \'12 - July \'15',
          bullets: [
            'Translated Photoshop layouts into themes for WordPress, optimizing them for various screen sizes and devices.',
            'Ensured the maintainability of themes and plugins, facilitating easy content updates and future modifications for clients.',
            'Maintained a client-focused approach, making iterative improvements to meet the evolving needs of each business.',
            'Contributed to the growth of local businesses by providing them with an online presence that effectively showcased their products and services.'
          ],
          tools: ['Photoshop', 'Wordpress', 'jQuery', 'Bootstrap']
        },
      ],
      sections: [
        {
          title: 'Favorite Tools',
          items: ['Vue', 'Nuxt.js', 'Next.js', 'TailwindCSS', 'Prisma', 'Cypress']
        },
        {
          title: 'Hobbies',
          items: ['Collecting Vinyl', 'Building Mechanical Keyboards', 'Lots of Coffee', 'Live Concerts', 'PC Gaming', 'Traveling']
        }
      ]
    }
  }
}
</script>

<template>
  <section class="mb-24 flex flex-col lg:flex-row lg:space-x-6 print:mb-0 print:text-black">
    <div class="w-full lg:w-2/3 print:w-full">
      <h1 class="text-2xl print:text-xl text-theme-text print:text-black">
        Tyler Petz
      </h1>
      <h2 class="text-lg print:text-base text-theme-text-d print:text-black mb-8 print:mb-4">
        <em>Web Developer</em>
        <em class="hidden print:block">tylerpetz@gmail.com - 941.518.9050 - Denver, Colorado</em>
      </h2>
      <section
        v-for="job in jobs"
        :key="job.title"
        class="border-t-2 pt-8 mb-8 border-theme-border print:border-none print:mb-2 print:pt-3"
      >
        <template v-if="job.roles">
          <h2 class="text-xl lg:text-2xl print:text-base mb-2">
            {{ job.company }}
          </h2>
          <section
            v-for="role in job.roles"
            :key="role.title"
            class="mb-2 print:mb-6"
          >
            <h3
              class="text-lg lg:text-xl print:text-base print:inline"
            >
              {{ role.title }}
            </h3>
            <h4
              class="mb-4 italic print:inline"
            >
              {{ role.time }}
            </h4>
            <ul
              class="list-disc mb-6 pl-6 print:mb-2"
            >
              <li
                v-for="(bullet, index) in role.bullets"
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
            class="text-xl lg:text-2xl mb-1 print:text-base print:mb-0 print:inline"
          >
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
          <ul class="list-disc mb-6 pl-6 print:mb-2">
            <li
              v-for="(bullet, index) in job.bullets"
              :key="index"
              class="print:text-sm"
            >
              {{ bullet }}
            </li>
          </ul>
          <dl class="flex flex-row items-center space-x-2 list-none flex-wrap">
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
      >
        <h3 class="print:text-black">
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
