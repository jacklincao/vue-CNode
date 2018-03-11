/* eslint-disable */
<template>
  <md-card>
    <md-card-media>
      <div class="quill-editor-example">
        <!-- quill-editor -->
        <quill-editor v-model="myContent"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
          <div id="toolbar" slot="toolbar">
            <!-- Add a bold button -->
            <button class="ql-bold">Bold</button>
            <button class="ql-italic">Italic</button>
            <!-- Add font size dropdown -->
            <select class="ql-size">
              <option value="small"></option>
              <!-- Note a missing, thus falsy value, is used to reset to default -->
              <option selected></option>
              <option value="large"></option>
              <option value="huge"></option>
            </select>
            <select class="ql-font">
              <option selected="selected"></option>
              <option value="serif"></option>
              <option value="monospace"></option>
            </select>
            <!-- Add subscript and superscript buttons -->
            <button class="ql-script" value="sub"></button>
            <button class="ql-script" value="super"></button>
            <!-- You can also add your own -->
            <button id="custom-button" @click="customButtonClick">[ Click me ]</button>
          </div>
        </quill-editor>
        <div class="quill-code">
          <div class="title">Code</div>
          <code class="hljs xml" v-html="contentCode"></code>
        </div>
      </div>
    </md-card-media>
  </md-card>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
let hljs = require('highlight.js')

export default {
  components: {
    quillEditor
  },
  props: ['content'],
  data () {
    return {
      myContent: this.content,
      editorOption: {
        modules: {
          toolbar: '#toolbar'
        }
      }
    }
  },
  watch: {
    content (val) {
      this.myContent = val
    },
    myContent (val) {
      this.$emit('on-content-change', val)
    }
  },
  computed: {
    contentCode () {
      return hljs.highlightAuto(this.myContent).value
    }
  },
  methods: {
    onEditorBlur (editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      // console.log('editor ready!', editor)
    },
    customButtonClick () {
      alert(`You can custom the button and listen click event to do something...\n你可以定义一些自定义按钮做你想做的事，如上传图片至第三方存储再插入内容区...等等`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .quill-editor,
  .quill-code {
    width: 50%;
    float: left;
  }
  .quill-code {
    height: auto;
    border: none;
    > .title {
      border: 1px solid #ccc;
      border-left: none;
      height: 3em;
      line-height: 3em;
      text-indent: 1rem;
      font-weight: bold;
    }
    > code {
      width: 100%;
      margin: 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-top: none;
      border-left: none;
      border-radius: 0;
      height: 30rem;
      overflow-y: auto;
    }
  }
</style>
