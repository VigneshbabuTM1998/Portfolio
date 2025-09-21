<template>
  <div class="p-5 border rounded bg-white">
    <h3 class="font-semibold text-lg">{{ title }}</h3>
    <p class="text-sm mt-2">{{ desc }}</p>
    <div class="mt-3">
      <a :href="link" class="text-sm">View repo</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title','desc','link']
}
</script>
