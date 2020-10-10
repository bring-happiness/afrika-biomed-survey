<script>
  import store from './../store'

  export default {
    name: 'FormStore',
    props: {
      formName: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      parentFormName: {
        type: String,
        default: ''
      },
      childKey: {
        type: String,
        default: ''
      },
      hasOtherQuestionProp: {
        type: Object
      }
    },
    data() {
      return {
        valueInternal: null,
        store: store
      }
    },
    created() {
      this.valueInternal = this.setStore(this.defaultValue())
    },
    computed: {
      hasOtherQuestion() {
        return typeof this.hasOtherQuestionProp !== 'undefined'
      },
      valueToShowOtherQuestion() {
        return this.hasOtherQuestion ? this.hasOtherQuestionProp.value : 'none'
      },
      showOtherQuestion() {
        return (this.valueToShowOtherQuestion === 'yes' && this.valueInternal === true) ||
          (this.valueToShowOtherQuestion === 'no' && this.valueInternal === false) ||
          this.valueToShowOtherQuestion === 'all'
      },
      otherQuestions() {
        return this.hasOtherQuestion ? this.hasOtherQuestionProp.questions : ''
      }
    },
    methods: {
      defaultValue() { // MUST BE OVERRIDEN !!
      },

      setStore(newValue) {
        if(typeof this.transformNewValue === 'function') {
          newValue = this.transformNewValue(newValue)
        }

        if (this.parentFormName !== '' && this.childKey !== '') {
          this.setStoreForParentForm(newValue)
        } else {
          this.setStoreForNormalForm(newValue)
        }

        return newValue
      },

      setStoreForParentForm(newValue) {
        if (typeof store.form[this.parentFormName][this.childKey] === 'undefined') {
          store.form[this.parentFormName][this.childKey] = {}
        }
        store.form[this.parentFormName][this.childKey][this.formName] = newValue
      },

      setStoreForNormalForm(newValue) {
        if (this.formName === '') {
          return
        }
        if (typeof (store.form[this.formName]) === 'undefined') {
          store.form[this.formName] = this.defaultValue();
        }

        store.form[this.formName] = newValue
      }
    },
    watch: {
      valueInternal(newVal, oldVal) {
        this.setStore(newVal)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
