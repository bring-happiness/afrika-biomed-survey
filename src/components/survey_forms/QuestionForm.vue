<template>
  <div>
    <form-yes-no
            v-if="isFormYesNo"
            :form-name="options.name"
            :parent-form-name="parentFormName"
            :child-key="childKey"
            :label="options.label"
            :has-file-prop="options.hasFile"
            :has-other-question-prop="options.otherQuestion">

    </form-yes-no>


    <form-text-input v-if="isFormText || isFormTextArea"
                     :form-name="options.name"
                     :parent-form-name="parentFormName"
                     :child-key="childKey"
                     :label-size="options.labelSize"
                     :is-text-area="isFormTextArea"
                     :has-other-question-prop="options.otherQuestion"
                     :label="options.label">
    </form-text-input>

    <form-radio v-if="isFormRadio"
                :form-name="options.name"
                :label="options.label"
                :values="options.values"
                :free-other-value="options.freeOtherValueAllowed"
                >

    </form-radio>

    <form-checkbox v-if="isFormCheckbox"
                :form-name="options.name"
                :label="options.label"
                :values="options.values"
                :free-other-value="options.freeOtherValueAllowed"
    >

    </form-checkbox>

    <form-multiple-infinite v-if="isFormMultipleInfinite"
                            :form-name="options.name"
                            :values="options.values"
                            :label-each-value="options.labelEachValue"
                            :label="options.label">
    </form-multiple-infinite>

    <form-rate v-if="isFormRate"
               :form-name="options.name"
               :label="options.label">
    </form-rate>

    <template v-if="isFormUpload">
      <el-form-item :label="options.label" class="survey-label form-upload">
        <form-upload></form-upload>
      </el-form-item>
    </template>


    <form-none v-if="isFormNone"
               :form-name="options.name"
               :has-other-question-prop="options.otherQuestion"
               :label="options.label">
    </form-none>
  </div>
</template>

<script>
  import FormYesNo from './FormYesNo'
  import FormTextInput from './FormTextInput'
  import FormRadio from './FormRadio'
  import FormCheckbox from './FormCheckbox'
  import FormMultipleInfinite from './FormMultipleInfinite'
  import FormRate from './FormRate'
  import FormNone from './FormNone'
  import FormUpload from './FormUpload'

  import store from './../../store'

  export default {
    name: 'QuestionForm',
    props: {
      options: {
        type: Object,
        required: true
      },
      parentFormName: {
        type: String,
        default: ''
      },
      childKey: {
        type: String,
        default: ''
      }
    },
    components: {
      'form-yes-no': FormYesNo,
      'form-text-input': FormTextInput,
      'form-radio': FormRadio,
      'form-checkbox': FormCheckbox,
      'form-multiple-infinite': FormMultipleInfinite,
      'form-rate': FormRate,
      'form-none': FormNone,
      'form-upload': FormUpload,
    },
    data() {
      return {
        store: store,
      }
    },
    computed: {
      isFormYesNo() {
        return this.options.type === 'yes-no'
      },
      isFormText() {
        return this.options.type === 'text'
      },
      isFormTextArea() {
        return this.options.type === 'textarea'
      },
      isFormRadio() {
        return this.options.type === 'radio'
      },
      isFormCheckbox() {
        return this.options.type === 'checkbox'
      },
      isFormMultipleInfinite() {
        return this.options.type === 'multiple-infinite'
      },
      isFormRate() {
        return this.options.type === 'rate'
      },
      isFormNone() {
        return this.options.type === 'none'
      },
      isFormUpload() {
        return this.options.type === 'upload'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-form-item__label {
    float: none;
  }

  label {
    font-size: 20px !important;
  }

  .el-form-item.survey-label {
    text-align: center;
    margin-top: 7px;
  }

  .el-form-item.survey-label.form-upload .form-upload-container {
    margin-top: 27px;
  }
</style>
