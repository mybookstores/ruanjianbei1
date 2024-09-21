<template>
    <div>
      <div id="box" >
          <div id="header">
            <span class="left">
                <img src="../assets/robot.png" class="img1">
                <span class="text1">智能助手</span>
                <span class="text2">限免</span>
                <span class="text2">内测</span>
            </span>
            <span @click="closeRobot" class="close">✖</span>
          </div>
          <!-- 聊天内容显示区 -->
          <div class="cBox">
            <div class="contents" ref="chattingContent" id="chattingContents">
              <div v-for="(item,index) in msgs" :key="index">
                <div class="self" v-if="item.self">
                  <p class="question">{{item.content}}</p>
                </div>
                <div class="robot" v-else>
                  <p class="answer" >{{item.content}}</p>
                </div>
              </div>
              <div v-for="(item,index) in msgs1" :key="index">
                <div class="self" v-if="item.self">
                  <p class="question">{{item.content}}</p>
                </div>
                <div class="robot" v-else>
                  <p class="answer1" id="myElement">{{item.content}}</p>
                </div>
              </div>
            </div>
            <!-- 用户问题输入区 -->
            <div class="userInput">
              
                <textarea
                  class="ipt"
                  placeholder="开始聊天"
                  @keyup.enter="sendMsgs"
                  v-model.trim="inputContent"
                ></textarea>
                <span  class="send">
                    <img src="../assets/send.png"  class="img2" @click="sendMsgs">
                </span>
                
            </div>
          </div>
        </div>
    </div>
  </template>
  <script>
import Typed from "typed.js";
import axios from 'axios';
  export default {
    name: 'robot',
    props: {
        closeRobot:Function
    },
    data() {
      return {
        msgs: [{
          content: "self的作用是为了判断是用户还是机器人，用户的话渲染在对话框的右边，机器人的回答渲染在对话框的左边",
          self: true,
        },
        {
            content: "大模型是指具有大规模参数的神经网络模型，其模型规模通常达到数十亿甚至数万亿。这类模型通常拥有强大的表征能力和泛化能力，能够在复杂任务上取得优异的成绩。大模型的发展经历了从浅层到深层、从单模态到多模态、从监督学习到无监督学习的过程。",
            self: false
        },
        {
          content: "回答渲染在对话框的左边",
          self: true,
        },
        {
            content: "大模型是指具有大规模参数的神经网络模型，其模型规模通常达到数十亿甚至数万亿。这类模型通常拥有强大的表征能力和泛化能力，能够在复杂任务上取得优异的成绩。大模型的发展经历了从浅层到深层、从单模态到多模态、从监督学习到无监督学习的过程。",
            self: false
        },
        {
          content: "self的作用是为了判断是用户还是机器人，用户的话渲染在对话框的右边，机器人的回答渲染在对话框的左边",
          self: true,
        },
        {
            content: "大模型是指具有大规模参数的神经网络模型，其模型规模通常达到数十亿甚至数万亿。这类模型通常拥有强大的表征能力和泛化能力，能够在复杂任务上取得优异的成绩。大模型的发展经历了从浅层到深层、从单模态到多模态、从监督学习到无监督学习的过程。",
            self: false
        }], //用来存放对话
        inputContent: '',
        oContent: {},
        msgs1: []
      };
    },
    
    mounted() {
      
      // const strArr = 'new计算-架构&编程-语言'.match(/.{1,5}/g)
      // console.log(strArr)   //["new计算", "-架构&编", "程-语言"]
      // const strArr = this.msgs1[1].content.match(/.{1,18}/g);
      // console.log(strArr);   //
    //   var that=this;
    //   new Typed("#myElement", {
    //   strings: [that.msgs1[1].content],
    //   // 打字速度
    //   typeSpeed: 40,
    //   showCursor:false,
    //   // 是否循环
    //   loop: false,
    //   onComplete:that.goclick1
    // });  
      this.oContent = document.getElementById('chattingContents');
      setTimeout(() => {
        this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight;
      }, 0);
      function drag(oDrag, handle) {
        var disX = 0;
        var disY = 0;
        handle = handle || oDrag;
        handle.style.cursor = 'move';
        handle.onmousedown = function(e) {
          
          var event = event || window.event;
          disX = event.clientX - oDrag.offsetLeft;
          disY = event.clientY - oDrag.offsetTop;
          document.onmousemove = function(e) {
            oDrag.style.border = '1px solid #216dfc';
            var event = event || window.event;
            var iL = event.clientX - disX;
            var iT = event.clientY - disY;
            var maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
            var maxT = document.documentElement.clientHeight - oDrag.offsetHeight;
            iL <= 0 && (iL = 0);
            iT <= 0 && (iT = 0);
            iL >= maxL && (iL = maxL);
            iT >= maxT && (iT = maxT);
            oDrag.style.left = iL + 'px';
            oDrag.style.top = iT + 'px';
            return false;
          };
          document.onmouseup = function() {
            oDrag.style.border = '';
            document.onmousemove = null;
            this.releaseCapture && this.releaseCapture();
          };
          this.setCapture && this.setCapture();
          return false;
        };
      }
      
      var oDrag = document.getElementById('box');
      var oTitle = document.getElementById('header');
      drag(oDrag, oTitle);
      
    },
    methods: {
      goclick1(){
          // console.log("kkkkkkkkkkkkkkkkkkk");
          this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight;
          
      },
      
      //发送消息
      sendMsgs() {
        this.oContent.scrollTop = this.oContent.scrollHeight;
        if (this.inputContent === '') {
          return;
        }
        this.msgs1.push({
          content: this.inputContent,
          self: true,
        });
        //self的作用是为了判断是用户还是机器人，用户的话渲染在对话框的右边，机器人的回答渲染在对话框的左边
        this.getResult();
        setTimeout(() => {
          this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight;
        }, 0);
        this.inputContent = '';
      },
      //智能机器人回复
      getResult() {
        let www="11111111";
        
            let data={
              "userchoice":"文本续写",
              "userscene":"代码编辑",
              "content":this.inputContent
            };
          axios.get("http://localhost:5000/robot", {params:data})
            .then(response => {
                // 处理返回的数据
                console.log(response);
                this.msgs1.push({
                content:response.data.result,
                self: false,
              });
              var that=this;
              new Typed("#myElement", {
              strings: [that.msgs1[0].content],
              // 打字速度
              typeSpeed: 40,
              showCursor:false,
              // 是否循环
              loop: false,
              onComplete:that.goclick1
            });  
            
            setTimeout(() => {
              this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight;
            }, 0);

            })
            .catch(error => {
                // 处理错误
                console.error(error);
                return 0;
            }); 
        
      },
    },
  };
  </script>
  <style lang="scss" scoped>

  #box {
    position: fixed;
    width: 350px;
    height: 700px;
    top:60px;
    right:15px;
    z-index: 8888;
    background: rgb(195, 218, 226);
    border-radius: 14px;
    display: block;
    box-shadow:0px 0px 10px 4px rgba(0,0,0,0.1);

  }

.uImg,
.rImg {
    width: 40px;
    height: 40px;
}
.img1{
    width: 30px;
    height: 30px;
}
.left{
    display: flex;
    align-items: center;
}
.text1{
    font-size: 18px;
    margin-top: 2px;
    margin-left: 10px;
    margin-right: 10px;
}
.text2{
    font-size: 12px;
    background-color: #f3f5f6;
    color: #9b9c9d;
    height:20px;
    width: 35px;
    border-radius: 5px;
    margin-right: 5px;
    margin-top: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.close{
    cursor: pointer;
    font-size:22px;
    display:inline-block;
    margin-left:10px;
    // color:#fff;
}
  #header {
    height: 40px;
    line-height: 35px;
    padding: 6px 15px;
    // color: #fff;
    font-size: 20px;
    background: #fff;
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .cBox {
    height: 590px;
  }
  .contents {
    height: 96%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    padding: 4px 10px;
    background: #fff;
  }
  .self {
    float: right;
    // height: 40px;
    // margin-bottom: 20px;
  }
  .robot {
    float: left;
  }

  .answer {
    // padding: 0 6px;
    line-height: 2;
    background: #f3f5f7;
    border-radius: 6px;
    color: #333;
    margin-left: 5px;
    // margin-bottom: 10px;
    max-width: 260px;
    word-wrap:break-word;
    text-align: left;
    padding: 10px 10px 10px 15px;
    font-size: 14px;
    border-radius:  0px 8px 8px 8px;
  }
  .answer1 {
    // padding: 0 6px;
    line-height: 2;
    background: #f3f5f7;
    border-radius: 6px;
    color: #333;
    margin-left: 5px;
    // margin-bottom: 10px;
    max-width: 260px;
    word-wrap:break-word;
    text-align: left;
    padding: 10px 10px 10px 15px;
    font-size: 14px;
    border-radius:  0px 8px 8px 8px;
    display: flex;
    align-items: flex-end;
  }

  .question {
    // padding: 0 6px;
    // height: 40px;
    line-height: 2;
    background: #edf4ff;
    color: #333;
    margin-right: 5px;
    max-width: 260px;
    word-wrap:break-word;
    text-align: left;
    padding: 10px 10px 10px 15px;
    font-size: 14px;
    border-radius:  8px 8px 0px 8px;
  }
    
  .rImg {
    position: absolute;
    left: 0;
    top: 0;
  }
  img {
    display: inline-block;
  }

  .userInput {
    background-color: #fff;
    padding: 15px 10px;
    height: 42.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0px  0px  14px  14px ;
    border-top:1px solid rgba(0,0,0,0.1);
  }

  .ipt {
    width: 80%;
    margin-left: 5px;
    padding-left: 10px;
    height: 30px;
    line-height: 30px;
    resize: none;
    border-radius: 3px;
    border: 1px solid transparent;
    background-clip: padding-box,border-box;
    background-origin: padding-box,border-box;
    background-image: linear-gradient(90deg,#fff,#fff 42%,#fff),linear-gradient(135deg,#43cbff,#9708cc);

    outline: none;
    font-size: 15px;
  }
  .send {
    width: 30px;
    height: 30px;
    margin-right: 3px;
    background: linear-gradient(135deg,#43cbff,#9708cc);
    padding: 0;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img2{
    margin-right: 1px;
    width: 20px;
    height: 20px;
  }
  </style>
  