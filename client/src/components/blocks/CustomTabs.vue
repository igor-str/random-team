<template>
  <!--TODO: set dynamic values-->
  <div class="custom-tabs">
    <ul class="tab-bar reset-list">
      <li class="js-tab-btn custom-tabs__bar-item active" data-tab-index="0">
        Administrator
      </li>
      <li class="js-tab-btn custom-tabs__bar-item" data-tab-index="1">
        Player
      </li>
    </ul>
    <section class="js-tab-item custom-tabs__item active" data-tab-index="0">
      <div>Administrator Content</div>
    </section>
    <section class="js-tab-item custom-tabs__item" data-tab-index="1">
      <div>Player Content</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CustomTabs',
  methods: {
    tabSwitcher() {
      const TAB_BTN = document.querySelectorAll('.js-tab-btn');
      const TAB_CONTENT = document.querySelectorAll('.js-tab-item');

      function displayContent(e) {
        e.preventDefault();
        const tabIndex = this.dataset.tabIndex;

        for (let i = 0; i < TAB_CONTENT.length; i++) {
          if (TAB_CONTENT[i].dataset.tabIndex === tabIndex) {
            TAB_CONTENT[i].classList.add('active');
          } else {
            TAB_CONTENT[i].classList.remove('active');
          }
        }

        for (let j = 0; j < TAB_BTN.length; j++) {
          if (this !== TAB_BTN[j]) {
            TAB_BTN[j].classList.remove('active');
          } else {
            TAB_BTN[j].classList.add('active');
          }
        }
      }

      TAB_BTN.forEach(item => item.addEventListener('click', displayContent));
    },
  },
  mounted() {
    this.tabSwitcher();
  },
}
</script>

<style scoped>

</style>
