<template>
  <el-form-item :label="label"
                class="survey-label">

    <div v-show="showOtherQuestion" class="form-text-input-other-question">
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
    name: 'FormNone',
    mixins: [FormStore]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
