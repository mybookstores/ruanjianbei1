<template>
  <div class="content">
    <div class="left" id="myleft">
      <!-- <button @click="changefont">one</button>
      <button @click="gopage1('/login')">two</button>
      <button @click="changefont1">three</button> 
      456
      <button @click="addtemplate">three</button> -->
      <button @click="gorealtime1">three</button>
      <side-bar :openRobot="openRobot"  :openImage="openImage" :addtemplate="addtemplate"></side-bar>
    </div>
    
    <div id="u-editor-content" >
        <vue-ueditor-wrap  v-model="content" editor-id="editor" :config="editorConfig" 
            :editorDependencies="['ueditor.config.js', 'ueditor.all.js']" />
    </div>
    <!-- <div class="right" v-if="showRobot"> -->
    <upload-image  v-if="showImage" :closeImage="closeImage"></upload-image>
    <robot v-if="showRobot" :closeRobot="closeRobot"></robot>
    <!-- </div> -->
    </div>
</template>
<script>
import axios from 'axios';
import { VueUeditorWrap } from 'vue-ueditor-wrap'
import { getCurrentInstance } from "vue";
// import { io } from 'socket.io-client';
import SideBar from '@/components/sidebar.vue'
import Robot from '@/components/robot.vue'
import UploadImage from  '@/components/uploadimage.vue'
export default {
        data() {
            return {
                content: '<p>Hello UEditorPlus</p>',
                editorConfig: {
                    lang:'zh-cn',
                    initialFrameWidth:1050,
                    initialFrameHeight:737,
                    // 编辑器后端服务接口，参考后端规范 https://open-doc.modstart.com/ueditor-plus/backend.html
                    serverUrl: '后端服务',
                    // 配置 UEditorPlus 的静态资源根路径，可以是 CDN 的静态资源地址
                    UEDITOR_HOME_URL: '/UEditorPlus/',
                    UEDITOR_CORS_URL: '/UEditorPlus/'
                },
                showRobot:true,
                showImage:false,
                showResult:false,
                mycontent:""
            }
        },
        components: {
            VueUeditorWrap,
            SideBar,
            Robot,
            UploadImage
        },
        mounted(){
          // this.socket.connect();


        },
        updated(){
          var that=this;
          var editor = UE.getEditor('editor',{toolbars: []});
          editor.addListener("contentchange", function () {
                console.log('编辑器内容发生改变');
                var content = editor.getContent();
                console.log(content);
                that.mycontent=content;
                // that.socket.emit('text', {'content': content});
                console.log("已发送");
                console.log(content);
                
            }) 

        },
        setup() {
          // const socket = io('http://127.0.0.1:5000');
          // const aaa = getCurrentInstance();
          // // 监听连接事件
          // socket.on('connect', () => {
          //   console.log('已连接至WebSocket服务器');
          // });
      
      
          // socket.on('update_text', (data)=> {
            
          //   var editor = UE.getEditor('editor',{toolbars: []});
          //   // var content = editor.getContent();
          //   // console.log("mycontent");
          //   // console.log(aaa.data.mycontent);
          //   // console.log("data-content");
          //   // console.log(data.content);
          //   if(aaa.data.mycontent!=data.content)
          //   {
          //     console.log("11111");
          //     console.log("mycontent");
          //   console.log(aaa.data.mycontent);
          //   console.log("data-content");+
          //   console.log(data.content);

          //     editor.setContent(data.content);
          //     // aaa.data.mycontent=data.content;
          //     console.log("aftercontent");
          //     console.log(editor.getContent());
          //     keepLastIndex(editor.body);
          //   }
            
            
          //   // 
          //   });
          // 发送消息到 test1
          // const sendMessage1 = () => {
          //   socket.emit('test', '这是来自客户端的消息！');
          // };
          const keepLastIndex=(obj)=> {
              console.log(obj)
              console.log(window.getSelection)
              console.log(document.selection)
              if (window.getSelection) { //ie11 10 9 ff safari
                // if (obj.hasAttribute('contenteditable')) {
                obj.focus();
            // }

            var me =  UE.getEditor('editor',{toolbars: []});
            var body = me.body;
            var range = me.selection.getRange();
            var node = me.body.lastChild;
            if (node ) {
                if (UE.dom.domUtils.isEmptyBlock(node)) {
                    range.setStartAtFirst(node);
                } else {
                    range.setStartAtLast(node);
                }
                range.collapse(true);
            }
            range.setCursor(true);
            // range.selectNodeContents(obj);
            // // aaa.selectAllChildren(obj); //range 选择obj下所有子内容
            // console.log("range222");
            // console.log(aaa);
            // range.collapse(false);
            // console.log("111111111111");
            // console.log(range);
            // // range.select();
            // range.setCursor(true);
            // range.select(true);

            // range.collapseToEnd(); //光标移至最后
            }
          };
          return {
            // sendMessage1,
            keepLastIndex,
            // socket
          };
        },
        methods:{
          gorealtime1()
          {
            let www="11111111";
            let data={
              "www":www
            };
          axios.get("http://localhost:5000/robot", {params:data})
            .then(response => {
                // 处理返回的数据
                console.log(response);
                // data=response;
                return 1;

            })
            .catch(error => {
                // 处理错误
                console.error(error);
                return 0;
            });  
            
          },
          openRobot()
          {
              // this.showRobot=true;  
              // const emit= defineEmits(['update:showRobot']);
              // this.emit('showRobot');
              this.showRobot=true; 
          },
          closeRobot()
          {
              
              this.showRobot=false; 
          },
          openImage()
          {
              
              this.showImage=true; 
          },
          closeImage()
          {
              
              this.showImage=false; 
          },
          openResult()
          {
              
              this.showResult=true; 
          },
          closeResult()
          {
              
              this.showResult=false; 
          },
          changefont()
          {
            var self = this;
            self.ue = UE.getEditor('editor',{toolbars: []});
            UE.dom.domUtils.setStyles(self.ue.body, {
              'color': '#fff000','font-family' : "'Microsoft Yahei','Helvetica Neue', Helvetica, STHeiTi, Arial, sans-serif", 'font-size' : '14px'
              });
          },
          changefont1()
          {
            var self = this;
            self.ue = UE.getEditor('editor',{toolbars: []});
            var p1=self.ue.getAllHtml();
            var p2=UE.dom.domUtils.getElementsByTagName(self.ue.body,'p');
            console.log(p2[0].innerText);
            UE.dom.domUtils.setStyles(p2[0], {
              'color': '#fff000','font-family' : "'Microsoft Yahei','Helvetica Neue', Helvetica, STHeiTi, Arial, sans-serif", 'font-size' : '14px'
              });
            
              
          },
          addtemplate()
          {
            var self = this;
            self.ue = UE.getEditor('editor',{toolbars: []});
            self.ue.getDialog("template").open();
              
          },
          gopage1(url)
          {
            
            this.$router.push(url)
          },
          gorealtime(){
            var self = this;
            self.ue = UE.getEditor('editor',{toolbars: []});
            var p1=document.getElementById('u-editor-content').innerHTML;
            var p2=UE.dom.domUtils.getElementsByTagName(self.ue.body,'body');
            var p3=self.ue.getAllHtml();
            // var p2=UE.dom.domUtils.getElementById(self.ue.body,'myview');
            console.log("self.ue.body");
            console.log(self.ue.body);
            this.keepLastIndex(self.ue.body);
            
          },
          goclick(){
             
            console.log('11111111111222222222233344');
            var content = document.getElementById('editor').innerHTML;
            console.log(content);
            this.socket.emit('text', {'content': content});
          }
        }

    }
</script>
 
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.root{
  height:100%;
}
.content{
  display: flex;
  margin-top: -8px;
  width: 100%; 
  height:100%;
  // height:100vh;
  margin-bottom: -8px;
  background-color: #E4E9F7;
  margin-left: 8px;
  margin-right: 10px;
  

}
.u-editor-content{
  position: relative;
  margin-top: 0px;
  margin-right: 6px;
  margin-left: 0px;
  padding: 0;
  width: 300px; 
  height:100%;
}

.left{
  
  // background-color: aquamarine;
  width:255px;
  // height:100%;
  // margin-right:10px;
}
.right{
  position: fixed;
  top:0px;
  right:2px;
  background-color: #fff;
  margin-top: 56px;
  width:350px;
  height:700px;
  margin-right:15px;
  margin-left:10px;
  border-radius: 14px;
  box-shadow:0px 0px 10px 4px rgba(0,0,0,0.1);
}
</style>
 