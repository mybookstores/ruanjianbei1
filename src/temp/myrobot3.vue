<template>
    <div class="robot">
      <el-input v-model="inputText" placeholder="请输入问题"></el-input>
      <el-button @click="sendMessage" type="primary">发送</el-button>
      <div title="对话机器人" center :visible="dialogVisible">
        <div v-for="(message, index) in messages" :key="index">
          <p v-if="message.from === 'user'">用户：{{ message.content }}</p>
          <p v-if="message.from === 'robot'">机器人：{{ message.content }}</p>
        </div>
    </div>
    </div>
  </template>
  <script>
  export default {
    name: 'Robot',
    data() {
      return {
        inputText: '', // 用户输入的文本
        messages: [], // 对话消息数组
        dialogVisible: true // 对话框可见性
      };
    },
    methods: {
      sendMessage() {
        // 发送用户消息
        this.messages.push({
          from: 'user',
          content: this.inputText
        });
        // 向后端发送请求并接收机器人回复
        // 使用axios库向后端的Python接口发送请求，并处理返回的机器人回复
        // 示例代码：
        // axios.post('/api/robot', { message: this.inputText })
        //   .then(response => {
        //     this.messages.push({
        //       from: 'robot',
        //       content: response.data.reply
        //     });
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
        // 清空用户输入
        this.inputText = '';
      }
    }
  };
  </script>
  <style scoped>
  .robot {
    padding: 20px;
  }
  </style>