<script>
export default {
  name: 'cv-job-entry',
  props: {
    job: {
      type: Object,
      default: () => {}
    },
  }
}
</script>

<template>
  <section>
    <h2 class="text-xl lg:text-2xl print:text-base mb-2">
      {{ job.company }}
    </h2>
    <template v-if="job.roles">
      <div
        v-for="role in job.roles"
        :key="role.title"
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
      </div>
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
    </template>
    <dl
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
  </section>
</template>