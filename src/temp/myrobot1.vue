<template>
    <div class="right">
      <el-scrollbar height="400px">
        <!-- 所有的回复 -->
        <div class="allReply" v-for="(item, index) in messages" :key="item.id">
          <!-- 右侧自己的回复 -->
          <div class="chat2" v-if="!item.deleted2">
            <div class="chat-messages2">
              <div class="message">
                <div class="content">{{ item.text }}</div>
                <div class="date">
                  {{ formatTimestamp(item.timestamp) }}
                </div>
                <div class="delate2" @click="delateMsg(index, 'self')">
                  <div class="text">删除</div>
   
                  <img src="../assets/logo.png" alt="" />
                </div>
                <div class="copy2" @click="copyMsg(index)">
                  <div class="text">复制</div>
                  <img src="../assets/logo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
   
          <!-- 左侧系统的回复 -->
          <div class="chat" v-if="!item.deleted">
            <img
              src="../assets/logo.png"
              alt=""
              srcset=""
              class="chatgptLogo"
              v-if="isGptShow"
            />
            <div class="chat-messages">
              <div class="message">
                <div class="content">{{ item.textSystem }}</div>
                <div class="date">
                  {{ formatTimestamp(item.timestamp) }}
                </div>
                <div class="delate" @click="delateMsg(index, 'system')">
                  <img src="../assets/logo.png" alt="" />
                  <div class="text">删除</div>
                </div>
                <div class="copy" @click="copyMsg(index)">
                  <img src="../assets/logo.png" alt="" />
                  <div class="text">复制</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
   
      <div class="chat-input">
        <el-input
          v-model="input"
          @keydown.enter.prevent="sendMessage"
          placeholder="试着输入点什么..."
          class="input"
          type="textarea"
          :rows="3"
          autosize
          :style="{ maxHeight: '90px', overflowY: 'auto' }"
        >
        </el-input>
   
        <div class="clear" @click="clearInput">
          <img src="../assets/logo.png" alt="" />
          <div class="text">清空输入框</div>
        </div>
   
        <el-button
          class="button"
          type="primary"
          @click="sendMessage"
          :icon="Position"
          >发送</el-button
        >
      </div>
    </div>
  </template>
   
  <script setup>
  import {
    ElButton,
    ElScrollbar,
    ElInput,
    ElMessageBox,
    ElMessage
  } from 'element-plus'
  import { Position } from '@element-plus/icons-vue'
  import { ref, nextTick } from 'vue'
   
  const messages = ref([]) //总回复
   
  const input = ref('')
  const text = ref('')
  const isGptShow = ref(false)
   
  const sendMessage = async () => {
    isGptShow.value = true
    if (input.value.trim() !== '') {
      const newMessage = {
        id: Date.now(),
        text: input.value,
        textSystem: '我是系统回复...',
        timestamp: new Date()
      }
   
      messages.value.push(newMessage)
   
      input.value = ''
   
      await nextTick() // 等待DOM更新完成  非常重要
   
      const messageElements = document.getElementsByClassName('message')
      const lastMessageElement = messageElements[messageElements.length - 1]
      lastMessageElement.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }
   
  const clearInput = () => {
    input.value = ''
  }
   
  const formatTimestamp = timestamp => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }
    return new Intl.DateTimeFormat('default', options).format(timestamp)
  }
   
  const copyMsg = index => {
    const text = messages1.value[index].text
    const textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    ElMessage({
      type: 'success',
      message: '复制成功'
    })
  }
   
  const delateMsg = (index, type) => {
    ElMessageBox.confirm(`是否删除此数据吗?`, '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        // messages.value.splice(index, 1)
   
        if (type === 'system') {
          const message = messages.value[index]
          delete message.textSystem
          message.deleted = true // 标记消息为已删除
    
        } else if (type === 'self') {
          const message = messages.value[index]
          delete message.text
          message.deleted2 = true // 标记消息为已删除
        }
   
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
      })
      .catch(() => {})
  }
  </script>
   
  <style lang="scss" scoped>
  .cardTop {
  margin-bottom: 20px;
  color: #27264d;
  font-size: 32px;
  opacity: 0.85;
  display: flex;
}
.elCard {
  height: 800px;
}
.elCard .right {
  flex: 1;
  padding: 0 30px;
  position: relative;
  height: 500px;
}
.elCard .right .message {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  position: relative;
}
.elCard .right .message .content {
  height: 200px;
  background: #f4f6f8;
  display: flex;
  padding: 7px 0 0 10px;
  border: 1px solid #ccc;
  border-radius: 7px;
  word-wrap: break-word;
  flex-wrap: wrap;
}
.elCard .right .message .date {
  position: absolute;
  align-self: flex-start;
  bottom: -20px;
  right: 0;
  color: #ccc;
  font-size: 14px;
}
.elCard .right .message .delate {
  position: absolute;
  align-self: flex-end;
  bottom: 0px;
  right: -60px;
  display: flex;
  align-items: center;
}
.elCard .right .message .delate img {
  width: 20px;
  height: 20px;
}
.elCard .right .message .delate .text {
  color: #1296db;
  opacity: 0;
  padding-left: 5px;
}
.elCard .right .message .delate:hover {
  cursor: pointer;
}
.elCard .right .message .delate:hover .text {
  opacity: 1;
}
.elCard .right .message .copy {
  position: absolute;
  align-self: flex-end;
  bottom: 30px;
  right: -60px;
  display: flex;
  align-items: center;
}
.elCard .right .message .copy img {
  width: 20px;
  height: 20px;
}
.elCard .right .message .copy .text {
  color: #1296db;
  opacity: 0;
  padding-left: 5px;
}
.elCard .right .message .copy:hover {
  cursor: pointer;
}
.elCard .right .message .copy:hover .text {
  opacity: 1;
}
.elCard .right .chat {
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.elCard .right .chat .chatgptLogo {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 30px;
}
.elCard .right .chat .chat-messages {
  flex: 1;
  margin-right: 200px;
  height: 400px;
}
.elCard .right .chat2 {
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.elCard .right .chat2 .chat-messages2 {
  flex: 1;
  margin-left: 200px;
  height: 400px;
}
.elCard .right .chat2 .chat-messages2 .delate2 {
  position: absolute;
  align-self: flex-end;
  bottom: 0px;
  left: -60px;
  display: flex;
  align-items: center;
}
.elCard .right .chat2 .chat-messages2 .delate2 img {
  width: 20px;
  height: 20px;
}
.elCard .right .chat2 .chat-messages2 .delate2 .text {
  color: #1296db;
  opacity: 0;
  padding-left: 5px;
}
.elCard .right .chat2 .chat-messages2 .delate2:hover {
  cursor: pointer;
}
.elCard .right .chat2 .chat-messages2 .delate2:hover .text {
  opacity: 1;
}
.elCard .right .chat2 .chat-messages2 .copy2 {
  position: absolute;
  align-self: flex-end;
  bottom: 30px;
  left: -60px;
  display: flex;
  align-items: center;
}
.elCard .right .chat2 .chat-messages2 .copy2 img {
  width: 20px;
  height: 20px;
}
.elCard .right .chat2 .chat-messages2 .copy2 .text {
  color: #1296db;
  opacity: 0;
  padding-left: 5px;
}
.elCard .right .chat2 .chat-messages2 .copy2:hover {
  cursor: pointer;
}
.elCard .right .chat2 .chat-messages2 .copy2:hover .text {
  opacity: 1;
}
.elCard .right .chat-input {
  display: flex;
  align-items: center;
  z-index: 1000;
  position: absolute;
  bottom: 10px;
  width: 95%;
}
.elCard .right .chat-input .input {
  margin-right: 10px;
}
.elCard .right .chat-input .clear {
  width: 20px;
  height: 50px;
  display: flex;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
}
.elCard .right .chat-input .clear img {
  width: 20px;
  height: 20px;
}
.elCard .right .chat-input .clear .text {
  font-size: 12px;
  color: #1296db;
  margin-left: 5px;
  opacity: 0;
}
.elCard .right .chat-input .clear:hover {
  cursor: pointer;
  width: 100px;
}
.elCard .right .chat-input .clear:hover .text {
  opacity: 1;
  margin-right: 15px;
}
.elCard .right .chat-input .button {
  padding: 15px;
}
.elCard :deep(.el-card__body) {
  display: flex;
  width: 100%;
}
.elCard :deep(.el-input__inner) {
  white-space: pre-wrap;
  word-break: break-all;
  height: 27px;
}

  </style>