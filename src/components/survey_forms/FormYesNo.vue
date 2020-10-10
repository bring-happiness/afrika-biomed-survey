<template>
    <el-form-item :label="label"  class="survey-label">
        <div class="form-yes-no-main-container">
            <el-switch
                    v-model="valueInternal"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
            </el-switch>

            <div>
                <span v-show="valueInternal">Oui</span>
                <span v-show="!valueInternal">Non</span>
            </div>


            <div v-show="showFileUpload">
                 {{ labelFile }}
                <form-upload></form-upload>
            </div>

        </div>

        <div v-show="showOtherQuestion">
            <question-form v-for="question in otherQuestions"
                           :options="question"
                           :key="question.name">
            </question-form>
        </div>
    </el-form-item>
</template>

<script>
  import FormUpload from './FormUpload'
  import FormStore from './../../mixins/FormStore'

  export default {
    name: 'FormYesNo',
    mixins: [FormStore],
    components: {
      'form-upload': FormUpload,
    },
    props: {
      hasFileProp: {
        type: Object
      }
    },
    computed: {
      hasFile() {
        return typeof this.hasFileProp !== 'undefined'
      },
      valueToShowFile() {
        return this.hasFile ? this.hasFileProp.value : 'none'
      },
      showFileUpload() {
        return (this.valueToShowFile === 'yes' && this.valueInternal === true) ||
          (this.valueToShowFile === 'no' && this.valueInternal === false) ||
          this.valueToShowFile === 'all'
      },
      labelFile() {
        return this.hasFile ? this.hasFileProp.label : ''
      }
    },
    methods: {
      defaultValue() {
        return false;
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .form-yes-no-main-container {
        margin-bottom: 17px;
    }
</style>
