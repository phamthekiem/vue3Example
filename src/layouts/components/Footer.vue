<template>
  <div class="h-100 d-flex align-center justify-space-between text-medium-emphasis">
    <!-- 👉 Footer: left content -->
    <div class="d-flex align-center text-base">
      &copy;
      {{ new Date().getFullYear() }},
      Made With
      <VIcon
        icon="ri-heart-fill"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      By <a
        href="https://pixinvent.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >Pixinvent</a>
    </div>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
        href="https://themeforest.net/licenses/standard"
        target="noopener noreferrer"
      >License</a>
      
    </span>
  </div>
</template>
