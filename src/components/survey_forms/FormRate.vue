<template>
  <el-form-item :label="label" class="survey-label">

    <el-rate v-model="valueInternal"
             class="form-rate-stars"
             :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>

    <h4 class="form-rate-stars-description">{{ rateDescription }}</h4>

  </el-form-item>
</template>

<script>
  import FormStore from './../../mixins/FormStore'

  export default {
    name: 'FormRate',
    mixins: [FormStore],
    computed: {
      rateDescription() {
        return (this.valueInternal === 1) ? 'Médiocre' :
            (this.valueInternal === 2) ? 'Passable' :
              (this.valueInternal === 3) ? 'Correct(e)' :
                (this.valueInternal === 4) ? 'Bon(ne)' :
                  (this.valueInternal === 5) ? 'Excellent(e)' : 'Choisissez une note'
      }
    },
    methods: {
      defaultValue() {
        return null;
      },
      transformNewValue(newValue) {
        if(newValue){
          return newValue.toString() + '/5 ' + this.rateDescription
        }
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-rate-stars {
    margin-top: 23px;
  }

  .form-rate-stars-description {
    color: #555;
    font-weight: 600;
  }
</style>
