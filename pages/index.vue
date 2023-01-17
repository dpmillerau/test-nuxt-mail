<template>
  <div class="blah">
  </div>
</template>

<script setup lang="ts">
import { useMail } from "#imports"

const mail = useMail()

try {
  mail.send({
    from: 'confit@person.id',
    subject: ` upload error`,
    text: `Upload error for file  blag error message `
  })
} catch (e) {
  console.log('sending mail failed ' + e)
}
</script>

<style scoped>

</style>
