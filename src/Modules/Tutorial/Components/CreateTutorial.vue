<template>
  <div>
    <h1>Create a new Tutorial</h1>

    <div>
      <form id="myForm" v-on:submit.prevent="addSteps">

        <div class="form-group">
          <label>Title</label>
          <input type="text" id="title" v-model="form.title">
        </div>

        <div class="form-group">
          <label>Category</label>
          <input type="text" id="permission" v-model="form.category">
        </div>

        <div class="form-group">
          <button class="btn btn-primary">Add</button>
        </div>

      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: "CreateTutorial",
  methods: function () {

  }
}
</script>

<style scoped>

</style>