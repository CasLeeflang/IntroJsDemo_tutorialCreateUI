<template>
  <div class="home">
  <CreateTutorial/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTutorial from "@/Modules/Tutorial/Components/CreateTutorial";

export default {
  name: 'Home',
  components: {
    CreateTutorial
  }
}
</script>
