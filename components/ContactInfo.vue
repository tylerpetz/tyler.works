<script>
export default {
  name: 'ContactInfo'
}
</script>

<template>
  <section class="max-w-xl rounded bg-theme-bg-d text-center mx-auto mb-16 px-6 py-10">
    <h1 class="text-theme-text-l text-lg md:text-2xl mb-6">
      <slot name="header">Hopefully now I have you convinced.</slot>
    </h1>
    <p class="text-theme-text-l md:text-lg mb-8">
      <slot name="body">Here are some of my links so you can check out some more of my work or hit me up about a project. See ya!</slot>
    </p>
    <ul class="flex items-center justify-center space-x-8">
      <li>
        <a aria-label="Tyler's Twitter" href="https://twitter.com/tylerpetz">
          <svg-icon class="h-6 w-6 text-theme-link hover:text-theme-link-hover transition-colors duration-75 flex-shrink-0" name="twitter" />
        </a>
      </li>
      <li>
        <a aria-label="Tyler's Github" href="https://github.com/tylerpetz">
          <svg-icon class="h-6 w-6 text-theme-link hover:text-theme-link-hover transition-colors duration-75 flex-shrink-0" name="github" />
        </a>
      </li>
      <li>
        <a aria-label="Email Tyler" href="mailto:tylerpetz@gmail.com">
          <svg-icon class="h-6 w-6 text-theme-link hover:text-theme-link-hover transition-colors duration-75 flex-shrink-0" name="email" />
        </a>
      </li>
      <li>
        <a aria-label="Tyler's LinkedIn" href="https://www.linkedin.com/in/tyler-petz-11734818/">
          <svg-icon class="h-6 w-6 text-theme-link hover:text-theme-link-hover transition-colors duration-75 flex-shrink-0" name="linkedin" />
        </a>
      </li>
    </ul>
  </section>
</template>
