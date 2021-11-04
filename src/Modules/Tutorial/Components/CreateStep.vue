<template>
  <div>
    <h1>New tour name: {{ this.$route.params.title }}</h1>
    <h1>New tour category:{{ this.$route.params.category }}</h1>


    <div>

      <form id="myForm" v-on:submit.prevent="add">
        <div class="d-md-inline-flex flex-column" style="width: 40%">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Title</span>
            <input type="text" id="title" class="form-control" aria-label="Username"
                   aria-describedby="basic-addon1" v-model="form.title">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">Element</span>
            <input type="text" id="element" class="form-control" aria-label="Username"
                   aria-describedby="basic-addon1" v-model="form.element">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">Intro</span>
            <input type="text" id="intro" class="form-control lg" aria-label="Username"
                   aria-describedby="basic-addon1" v-model="form.intro">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon4">Permission</span>
            <input type="text" id="permission" class="form-control" aria-label="Username"
                   aria-describedby="basic-addon1" v-model="form.permission">
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-outline-success btn-lg p-1" style="width: 10%">Add steps</button>
        </div>

      </form>
    </div>

    <div class="d-md-inline-flex flex-column">
      <div class="row">
        <div class="p-5">
          <carousel style="width:100%;">
            <tr v-for="(step, index) in newSteps" :key="index">
              <slide>
                <h3>Step {{index + 1 }}</h3>
                <div class="card m-2"  style="width: 18rem;">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-5">
                        Title
                      </div>
                      <div class="col-5">
                        {{ step.title }}
                      </div>
                      <div class="col-5">
                        Element
                      </div>
                      <div class="col-5">
                        {{ step.element }}
                      </div>
                      <div class="col-5">
                        Intro
                      </div>
                      <div class="col-5">
                        {{ step.intro }}
                      </div>
                      <div class="col-5">
                        Permission
                      </div>
                      <div class="col-5">
                        {{ step.permission }}
                      </div>
                    </div>
                  </div>
                </div>
              </slide>
            </tr>

          </carousel>
        </div>
      </div>
    </div>

    <div class="p-5">
      <button class="btn btn-outline-success btn-lg p-1" style="width: 10%" v-on:click="save">Save tour</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {Carousel, Slide} from 'vue-carousel';

export default {
  name: "CreateTutorial",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      form: {},
      newSteps: [],
      tutorial: {
        title: this.$route.params.title,
        steps: null,
        category: this.$route.params.category
      },
      existingTutorials: [],

    }
  },
  created() {
    axios.get("http://localhost:9090/api/tutorial/getTut")
        .then(response => this.existingTutorials = response.data);
  },

  methods: {
    add: function () {
      let newStep = {
        title: this.form.title,
        element: this.form.element,
        intro: this.form.intro,
        permission: this.form.permission
      }
      this.newSteps.push(newStep);
      this.form.title = '';
      this.form.element = '';
      this.form.intro = '';
      this.form.permission = '';

    },

    save: function () {
      this.tutorial.steps = this.newSteps;
      axios.post("http://localhost:9090/api/tutorial/new", this.tutorial)
          .then(this.$router.push({name: 'Tutorial'}))

    }
  }
}
</script>

<style scoped>

</style>