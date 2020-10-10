<template>
    <div>
        <el-container>
            <el-main>
                <el-row type="flex" justify="center">

                    <transition name="el-fade-in-linear" mode="out-in">

                        <el-col :span="12"
                                v-if="showIdentityForm">

                            <el-input v-model="userIdentity"
                                      @keyup.enter.native="validateIdentity"
                                      placeholder="Nom de l'entreprise, nom et prénom particulier, etc...">
                                <template slot="prepend">Votre identité</template>
                                <template slot="append">
                                    <el-button type="primary"
                                               :style="identityFilled ? 'color: #044688;' : ''"
                                               @click="validateIdentity">
                                        Valider
                                    </el-button>
                                </template>

                            </el-input>
                        </el-col>

                        <el-col :span="23"
                                v-if="showQuestionsForm"
                                class="survey-container">

                            <el-steps :active="currentStep" align-center class="survey-step-header">
                                <el-step v-for="(section, index) in getAllSections"
                                         :key="index"
                                         icon="el-icon-caret-right"
                                         :title="section"
                                         :description="index === currentStep ? pourcentageQuestion : ''">

                                    <template slot="icon">
                                        <vue-material-icon :name="stepHeaderIcon[index]" :size="30"></vue-material-icon>
                                    </template>

                                </el-step>
                            </el-steps>

                            <el-row type="flex" justify="center">
                                <el-col :span="20">
                                    <el-form ref="form" :model="form">

                                        <question-form v-for="(question, index) in allQuestions"
                                                       v-show="index === currentQuestionIndex"
                                                       :options="question"
                                                       :key="question.name">

                                        </question-form>

                                    </el-form>
                                </el-col>
                            </el-row>

                            <el-row type="flex" justify="center">
                                <el-col :span="20">
                                    <el-col :span="12">
                                        <el-button @click="goToPreviousQuestion"
                                                   :disabled="disabledBtnPreviousQuestion"
                                                   type="primary"
                                                   icon="el-icon-caret-left">
                                            Question précédente
                                        </el-button>
                                    </el-col>

                                    <el-col :span="12">
                                        <el-button @click="goToNextQuestion"
                                                   class="btn-next-question"
                                                   type="primary">
                                            Question suivante
                                            <i class="el-icon-caret-right"></i>
                                        </el-button>
                                    </el-col>
                                </el-col>
                            </el-row>

                        </el-col>

                    </transition>

                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
  import QuestionForm from './survey_forms/QuestionForm'

  import store from './../store'
  import questionsData from './../data'

  export default {
    name: 'SurveyPage',
    data() {
      return {
        partToShow: 'questions',
        userIdentity: '',
        form: store.form,
        currentStep: 0,
        currentQuestionIndex: 0,
        stepHeaderIcon: ['account_balance', 'toys', 'local_laundry_service', 'colorize', 'delete', 'monetization_on', 'folder'],
        formFinish: false
      }
    },
    computed: {
      showIdentityForm() {
        return this.partToShow === 'identity'
      },
      showQuestionsForm() {
        return this.partToShow === 'questions'
      },
      identityFilled() {
        return this.userIdentity.length > 0
      },
      getAllSections() {
        let sections = []

        questionsData.forEach((section) => {
          sections.push(section.title)
        })

        return sections
      },
      totalNumberSections () {
        return this.getAllSections.length
      },
      totalNumberQuestions() {
        return questionsData[this.currentStep].questions.length
      },
      currentQuestionNumber() {
        return this.currentQuestionIndex + 1
      },
      allQuestions() {
        return questionsData[this.currentStep]['questions']
      },
      pourcentageQuestion() {
        return Math.ceil(this.currentQuestionIndex / this.totalNumberQuestions * 100) + ' %'
      },
      disabledBtnPreviousQuestion() {
        return (this.currentStep === 0) && (this.currentQuestionIndex === 0)
      }
    },
    methods: {
      validateIdentity() {
        if (!this.identityFilled) {
          return;
        }

        store.userIdentity = this.userIdentity
        this.partToShow = 'questions'
      },
      goToNextQuestion() {
        if ((this.currentQuestionIndex + 1) === (this.totalNumberQuestions)) {
          if ((this.currentStep + 1) === this.totalNumberSections) {
            this.formFinish = true
          } else {
            this.currentStep++
            this.currentQuestionIndex = 0
          }
        } else {
          this.currentQuestionIndex++
        }
      },
      goToPreviousQuestion () {
        if (this.currentQuestionIndex > 0) {
          this.currentQuestionIndex--
        } else if ((this.currentStep > 0) && (this.currentQuestionIndex === 0)) {
          this.currentStep--
          setTimeout(() => {
            this.currentQuestionIndex = this.allQuestions.length - 1
          }, 10)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .survey-step-header {
        margin-bottom: 23px;
    }

    .btn-next-question {
        float: right;
    }
</style>
