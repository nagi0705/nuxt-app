<template>
    <div>
      <p>Product details for {{ id }}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quas aliquam similique atque sed tempora, cumque eius nihil enim nequam?</p>
    </div>
</template>

<script setup>
  const { id } = useRoute().params

  definePageMeta({
    layout: 'products'
  })
</script>

<style scoped>

</style>