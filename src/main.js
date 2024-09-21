import { createApp } from 'vue'
// import VueUeditorWrap from 'vue-ueditor-wrap';
import App from './App.vue'
import router from './router'
import store from './store'

// import { QuillEditor } from '@vueup/vue-quill'
// import '@vueup/vue-quill/dist/vue-quill.snow.css';
// 富文本组件
// import UEditorPlus from "@/components/UEditorPlus"
// 全局组件挂载
// Vue.component('UEditorPlus', UEditorPlus)
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


 


// createApp(App).use(store).use(router).component('QuillEditor', QuillEditor).mount('#app')
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')