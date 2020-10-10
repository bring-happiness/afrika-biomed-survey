<template>
    <div>
        <el-container>
            <el-main>
                <el-row type="flex" justify="center">
                    <el-col :span="10" class="icon-lock-container">
            <span style="color: #044688;">
                <vue-material-icon class="main-icon-lock" name="lock" :size="65"></vue-material-icon>
            </span>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="15">
                        <el-col :span="15">
                            <el-input placeholder="Entrer le code secret"
                                      @keyup.native.enter="validateSecretCode"
                                      v-model="secretCode">
                            </el-input>
                        </el-col>
                        <el-col :span="9">
                            <el-button type="primary"
                                       @click="validateSecretCode"
                                       :loading="isValidatingSecretCode">
                                Accéder au questionnaire
                            </el-button>
                        </el-col>
                    </el-col>
                </el-row>

                <el-row class="error-alert-container" type="flex" justify="center">
                    <el-col :span="7">
                        <transition name="el-zoom-in-center">
                            <el-alert v-show="validatingFailed"
                                    title="Le code secret n'est pas valide"
                                    type="error"
                                    show-icon>
                            </el-alert>
                        </transition>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
  export default {
    name: 'LockerPage',
    data() {
      return {
        secretCodeToFind: '',
        secretCode: '',
        isValidatingSecretCode: false,
        validatingFailed: false
      }
    },
    created () {
      this.secretCodeToFind = document.getElementById('secret-code-questionnaire').getAttribute('code')
    },
    methods: {
      validateSecretCode() {
        this.$emit('accessgranted')

        /*this.validatingFailed = false
        this.isValidatingSecretCode = true;

        setTimeout(() => {
          this.isValidatingSecretCode = false;

          if (window.btoa(this.secretCode) === this.secretCodeToFind) {
            this.$emit('accessgranted')
          } else {
            this.validatingFailed = true
          }
        }, 400)*/
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .icon-lock-container {
        text-align: center;
        margin-bottom: 17px;
    }

    .error-alert-container {
        margin-top: 17px;
    }
</style>
