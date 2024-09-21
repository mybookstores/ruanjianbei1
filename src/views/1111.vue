<template>
    <div>
      <button @click="sendMessage1">发送消息到 test1</button>
      <button @click="sendMessage2">发送消息到 test2</button>
      <div id="editor"  contenteditable="true" @input="goclick" ><p>1111</p></div>
    </div>
  </template>
   
  <script>
  import { ref, onMounted } from 'vue';
  import { io } from 'socket.io-client';
   
  export default {
    setup() {
      const socket = io('http://127.0.0.1:5000');
      const message = ref('');
   
      // 监听连接事件
      socket.on('connect', () => {
        console.log('已连接至WebSocket服务器');
      });
   
      // 监听回应事件
      socket.on('my-response', (data) => {
        console.log('收到来自服务器的回应事件:', data);
      });
   
      socket.on('update_text', (data)=> {
        document.getElementById('editor').innerHTML=data.content;
        console.log("2222222222");
        console.log(document.getElementById('editor'));
        keepLastIndex(document.getElementById('editor'));
        });
      // 发送消息到 test1
      const sendMessage1 = () => {
        socket.emit('test', '这是来自客户端的消息！');
      };
     
   
      // 发送消息到 test2
      const sendMessage2 = () => {
        socket.emit('my-event', '这是来自客户端的消息！');
      };
      const keepLastIndex=(obj)=> {
        // console.log(obj)
        // console.log(window.getSelection)
        // console.log(document.selection)
        if (window.getSelection) { //ie11 10 9 ff safari
            obj.focus(); //解决ff不获取焦点无法定位问题
            var range = window.getSelection(); //创建range

            console.log("range0");
            console.log(range);
            range.selectAllChildren(obj); //range 选择obj下所有子内容
            console.log("range");
            console.log(range);
            range.collapseToEnd(); //光标移至最后
        } else if (document.selection) { //ie10 9 8 7 6 5
            var range = document.selection.createRange(); //创建选择对象
            //var range = document.body.createTextRange();
            range.moveToElementText(obj); //range定位到obj
            range.collapse(false); //光标移至最后
            range.select();
        }
    };
      // 在组件挂载时连接到服务器
      onMounted(() => {
        socket.connect();
      });
   
      return {
        message,
        sendMessage1,
        sendMessage2,
        keepLastIndex,
        socket
      };
    },
    methods:{
        goclick(){

            console.log('11111111111222222222233344');
            var content = document.getElementById('editor').innerHTML;
            console.log(content);
            this.socket.emit('text', {'content': content});
        }

    }
  };
  </script>
   
  <style>
  </style>