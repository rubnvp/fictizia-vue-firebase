<template>
  <div class="home">
    <ChatMessages />
  </div>
</template>

<script>
// @ is an alias to /src
import ChatMessages from '@/components/ChatMessages.vue'

export default {
  name: 'Home',
  components: {
    ChatMessages
  }
}
</script>
