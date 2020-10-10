<template>
  <div class="form-multiple-infinite">
    <el-form-item :label="label" class="survey-label"></el-form-item>

    <el-row type="flex" justify="center">
      <el-col :span="12">
        <div v-for="(form, index) in multipleForms" class="each-form-container">

          <el-card>
            <div slot="header">
              <span class="label-each-value-title">
                {{ labelEachValue }} n°{{(index+1) }}
              </span>

              <el-button v-show="(index+1) === multipleForms.length"
                         @click="removeFormIndex(index)"
                         icon="el-icon-delete"
                         style="float: right; padding: 3px 0"
                         type="text">
                Supprimer cet élément
              </el-button>
            </div>

            <question-form v-for="question in values"
                           :options="question"
                           :parent-form-name="formName"
                           :child-key="labelEachValueLowerCase + (index+1)"
                           :key="question.name">
            </question-form>
          </el-card>

        </div>
      </el-col>
    </el-row>

    <el-button @click="addOneMoreForm"
               id="multiple-form-btn-add"
               type="success"
               class="btn-add-one-more"
               icon="el-icon-plus">
      Ajouter un(e) autre {{ labelEachValue }}
    </el-button>
  </div>
</template>

<script>
  import FormStore from './../../mixins/FormStore'

  export default {
    name: 'FormMultipleInfinite',
    mixins: [FormStore],
    props: {
      labelEachValue: {
        type: String,
        required: true
      },
      values: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        multipleForms: [1]
      }
    },
    computed: {
      labelEachValueLowerCase() {
        return this.labelEachValue.toLowerCase()
      }
    },
    methods: {
      defaultValue() {
        return {};
      },
      addOneMoreForm() {
        this.multipleForms.push(1)
        setTimeout(() => {
          document.getElementById('multiple-form-btn-add').scrollIntoView({ block: 'start',  behavior: 'smooth' })
        }, 10)
      },
      removeFormIndex(index) {
        this.multipleForms.splice(index, 1)

        let childKey = this.labelEachValueLowerCase + (index+1)
        delete this.store.form[this.formName][childKey]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-multiple-infinite {
    margin-bottom: 37px;
    text-align: center;
  }

  .label-each-value-title {
    color: #555;
    font-weight: 600;
  }

  .each-form-container {
    margin-bottom: 17px;
  }
</style>
