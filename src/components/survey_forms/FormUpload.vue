<template>
    <div class="form-upload-container">
        <el-upload
                drag
                action=""
                multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Glisser/Déposer le fichier ici ou <em>cliquer ici</em></div>
        </el-upload>

        <el-checkbox v-model="fileNotFound" class="checkbox-file-not-found">
            Je n'ai pas le document à disposition
        </el-checkbox>

    </div>
</template>

<script>
  export default {
    name: 'FormUpload',
    data () {
      return {
        fileNotFound: false
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
