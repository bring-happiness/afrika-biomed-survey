<template>
  <el-form-item :label="label"
                class="survey-label"
                :class="labelMustBeSize ? 'label-must-be-size label-' + labelSize : 'survey-normal-label'">

    <el-input v-model="valueInternal"
              :type="inputType"
              :autosize="autosizeRows"
              class="form-text-input">
    </el-input>

    <div v-show="showOtherQuestion"  class="form-text-input-other-question">
      <question-form v-for="question in otherQuestions"
                     :options="question"
                     :key="question.name">
      </question-form>
    </div>
  </el-form-item>

</template>

<script>
  import FormStore from './../../mixins/FormStore'

  export default {
    name: 'FormTextInput',
    mixins: [FormStore],
    props: {
      labelSize: {
        type: String,
        default: ''
      },
      isTextArea: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      labelMustBeSize() {
        return this.labelSize !== ''
      },
      inputType() {
        return (this.isTextArea === true) ? 'textarea' : 'text'
      },
      autosizeRows() {
        return (this.inputType === 'textarea') ? {minRows: 3, maxRows: 20} : false
      }
    },
    methods: {
      defaultValue() {
        return '';
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .survey-normal-label {
    margin-bottom: 47px !important;
  }

  .survey-normal-label .form-text-input {
    margin-top: 17px;
  }

  .label-must-be-size, .label-must-be-size .el-form-item__label, .label-must-be-size .el-form-item__content {
    display: inline-block;
    text-align: center;
  }

  .label-must-be-size.label-xs .el-form-item__label {
    width: 300px;
  }

  .form-text-input-other-question {
    margin-top: 27px;
  }
</style>
