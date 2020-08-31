<script>
export default {
  name: "BragList",
};
</script>

<template>
  <ul>
    <li class="text-lg mb-6 flex flex-row items-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="mr-4 hover:text-theme-link transition-colors duration-75 flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
      </svg>
      <p>
        I'm a front-end chapter lead at
        <a
          href="http://www.booj.com"
          target="_blank"
          class="text-theme-link underline hover:text-theme-link-hover hover:no-underline"
        >booj</a> in Denver, CO. If I weren't a
        <em>web developer</em> I'd have no business there.
      </p>
    </li>
    <li class="text-lg mb-6 flex flex-row items-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="mr-4 hover:text-theme-link transition-colors duration-75 flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 14H11V16H13V14Z" fill="currentColor" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 7C8 5.89543 8.89543 5 10 5H14C15.1046 5 16 5.89543 16 7V17C16 18.1046 15.1046 19 14 19H10C8.89543 19 8 18.1046 8 17V7ZM10 7H14V17H10V7Z"
          fill="currentColor"
        />
        <path d="M18 9H20V15H18V9Z" fill="currentColor" />
        <path d="M0 14H2V10H0V14Z" fill="currentColor" />
        <path d="M6 15H4V9H6V15Z" fill="currentColor" />
        <path d="M24 10H22V14H24V10Z" fill="currentColor" />
      </svg>
      <p>
        I worked as a
        <em>web developer</em> at
        <a
          href="https://www.strivemedia.com"
          target="_blank"
          class="text-theme-link underline hover:text-theme-link-hover hover:no-underline"
        >Strive Media</a>. Call them, they'll tell you.
      </p>
    </li>
    <li class="text-lg mb-6 flex flex-row items-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="mr-4 hover:text-theme-link transition-colors duration-75 flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 18H17V16H7V18Z" fill="currentColor" />
        <path d="M17 14H7V12H17V14Z" fill="currentColor" />
        <path d="M7 10H11V8H7V10Z" fill="currentColor" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
          fill="currentColor"
        />
      </svg>
      <p>
        I have also worked as a
        <em>web developer</em> for some other folks, you can
        <nuxt-link
          to="/cv"
          class="text-theme-link underline hover:text-theme-link-hover hover:no-underline"
        >check my resume</nuxt-link>, it's all legit.
      </p>
    </li>
    <li class="text-lg mb-6 flex flex-row items-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="mr-4 hover:text-theme-link transition-colors duration-75 flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 19V22H13V19H14C16.2091 19 18 17.2091 18 15C18 12.7909 16.2091 11 14 11H13V7H15V9H17V5H13V2H11V5H10C7.79086 5 6 6.79086 6 9C6 11.2091 7.79086 13 10 13H11V17H9V15H7V19H11ZM13 17H14C15.1046 17 16 16.1046 16 15C16 13.8954 15.1046 13 14 13H13V17ZM11 11V7H10C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11H11Z"
          fill="currentColor"
        />
      </svg>
      <p>
        I am currently
        <nuxt-link
          :to="{
            name: 'contact',
            params: {
              goTo: 'job'
            }
          }"
          class="text-theme-link underline hover:text-theme-link-hover hover:no-underline"
        >accepting new clients</nuxt-link>as a
        <em>web developer</em>. Seriously, why else would I be doing that?
      </p>
    </li>
    <li class="text-lg mb-6 flex flex-row items-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="mr-4 hover:text-theme-link transition-colors duration-75 flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 3C7.89543 3 7 3.89543 7 5C7 5.74028 7.4022 6.38663 8 6.73244V17.2676C7.4022 17.6134 7 18.2597 7 19C7 20.1046 7.89543 21 9 21C9.74028 21 10.3866 20.5978 10.7324 20H11.9585C14.1676 20 15.9585 18.2091 15.9585 16V14.7324C16.5563 14.3866 16.9585 13.7403 16.9585 13C16.9585 11.8954 16.0631 11 14.9585 11C13.8539 11 12.9585 11.8954 12.9585 13C12.9585 13.7403 13.3607 14.3866 13.9585 14.7324V16C13.9585 17.1046 13.0631 18 11.9585 18H10.7324C10.5568 17.6964 10.3036 17.4432 10 17.2676V6.73244C10.5978 6.38663 11 5.74028 11 5C11 3.89543 10.1046 3 9 3Z"
          fill="currentColor"
        />
      </svg>
      <p>
        I share my
        <em>web development code</em> that I have written on
        <a
          href="https://github.com/tylerpetz"
          target="_blank"
          class="text-theme-link underline hover:text-theme-link-hover hover:no-underline"
        >my github account</a>. This is like a dead giveaway that I'm a web developer.
      </p>
    </li>
  </ul>
</template>
