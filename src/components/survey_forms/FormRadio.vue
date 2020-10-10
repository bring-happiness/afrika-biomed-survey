<template>
  <el-form-item :label="label" class="survey-label">

    <div class="radio-values-container">
      <div v-for="value in values" :key="value">
        <el-radio v-model="valueRadio" :label="value">{{ value }}</el-radio>

        <template v-if="freeOtherValue && (value === AUTRE)">
          <el-input v-model="otherValue"
                    :placeholder="AUTRE"
                    @focus="onFocusOtherValueInput"
                    class="other-value-input">

          </el-input>
        </template>
      </div>
    </div>

  </el-form-item>
</template>

<script>
  import FormStore from './../../mixins/FormStore'

  const AUTRE = 'Autre';

  export default {
    name: 'FormRadio',
    mixins: [FormStore],
    props: {
      values: {
        type: Array,
        required: true
      },
      freeOtherValue: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        valueRadio: null,
        otherValue: null,
        AUTRE,
      }
    },
    created() {
      if (this.freeOtherValue && (this.values.indexOf(AUTRE) === -1)) {
        this.values.push(AUTRE)
      }
    },
    methods: {
      onFocusOtherValueInput() {
        this.valueRadio = AUTRE
      },
      updateValueInternal (valueRadio, otherValue) {
        this.valueInternal = valueRadio;

        if (this.freeOtherValue && (valueRadio === AUTRE)) {
          this.valueInternal += ': ' + otherValue
        }
      }
    },
    watch: {
      valueRadio (newValue) {
        this.updateValueInternal(newValue, this.otherValue)
      },
      otherValue (newValue) {
        this.updateValueInternal(this.valueRadio, newValue)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .radio-values-container {
    margin-top: 17px;
  }

  .other-value-input.el-input {
    width: 180px;
    margin-left: 7px;
  }
</style>
