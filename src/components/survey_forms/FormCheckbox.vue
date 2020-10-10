<template>
  <el-form-item :label="label" class="survey-label">

    <el-checkbox-group v-model="valueCheckbox" class="checkbox-values-container">
      <el-row justify="center">

        <el-col :span="6" v-for="value in values" :key="value">
          <el-checkbox :label="value">

            <template v-if="freeOtherValue && (value === AUTRE)">
              {{ value }}
              <el-input v-model="otherValue"
                        :placeholder="AUTRE"
                        @focus="onFocusOtherValueInput"
                        class="other-value-input">

              </el-input>
            </template>

          </el-checkbox>
        </el-col>


      </el-row>
    </el-checkbox-group>

  </el-form-item>
</template>

<script>
  import FormStore from './../../mixins/FormStore'

  const AUTRE = 'Autre';

  export default {
    name: 'FormCheckbox',
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
        valueCheckbox: [],
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
        if (this.valueCheckbox.indexOf(AUTRE) === -1) {
          this.valueCheckbox.push(AUTRE)
        }
      },
      updateValueInternal(valueCheckbox, otherValue) {
        this.valueInternal = valueCheckbox.slice(0);
        let otherIndex = this.valueInternal.indexOf(AUTRE);

        if (this.freeOtherValue && (otherIndex > -1)) {
          this.valueInternal[otherIndex] += ': ' + otherValue
        }
      }
    },
    watch: {
      valueCheckbox(newValue) {
        this.updateValueInternal(newValue, this.otherValue)
      },
      otherValue(newValue) {
        this.updateValueInternal(this.valueCheckbox, newValue)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .checkbox-values-container {
    margin: 37px 0;
  }

  .other-value-input.el-input {
    width: 180px;
    margin-left: 7px;
  }
</style>
