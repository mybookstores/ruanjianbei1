<template>
    <div>
      <img src="../assets/logo.png" alt id="robot" @click="toTalk" style="cursor:pointer" />
      <div id="box" :style=" flag ? 'display:none':'display:block'">
        <!-- 主体 -->
        <div class="container">
          <div id="header">
            <span style="display:inline-block">名字</span>
            <p>
              <span @click="changeSize" style="font-size:22px;cursor:pointer;color:#fff;display:inline-block">🔳</span>
                 <!--这个方块是我懒得引入icon图标随便复制的，不要学我省事，因为有的浏览器可能不显示-->
              <span
                @click="yc"
                style="cursor: pointer;font-size:22px;display:inline-block;margin-left:10px;color:#fff;"
              >✖</span>
            </p>
          </div>
          <!-- 聊天内容显示区 -->
          <div class="cBox">
            <div class="contents" ref="chattingContent" id="chattingContents">
              <div v-for="(item,index) in msgs" :key="index">
                <div class="userQuestion self" v-if="item.self">
                  <p class="question">{{item.content}}</p>
                  <img :src="item.avatarUrl" alt class="uImg" />
                </div>
                <div class="robotAnswer other clearfix" v-else>
                  <img :src="item.avatarUrl" alt class="rImg" />
                  <div class="answerContent">
                    <p class="q">{{item.q}}</p>
                    <p class="a">{{item.a}}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 用户问题输入区 -->
            <div class="userInput">
              <div class="tBox">
                <textarea
                  class="ipt"
                  placeholder="开始聊天"
                  @keyup.enter="sendMsgs"
                  v-model.trim="inputContent"
                ></textarea>
              </div>
              <vp-button type="primary" @click="sendMsgs">发 送</vp-button>
            </div>
          </div>
        </div>
        <!-- 实现拖拽对话框和拖拽边放大 -->
        <div
          id="resizeL"
          style="position:absolute;overflow:hidden;opacity:0;filter:alpha(opacity=0);top:0;width:5px;height:100%;cursor:w-resize;"
        ></div>
        <div
          id="resizeT"
          style="position:absolute;overflow:hidden;opacity:0;filter:alpha(opacity=0);width:100%;height:5px;cursor:n-resize;top:0;"
        ></div>
        <div
          id="resizeR"
          style="position:absolute;overflow:hidden;opacity:0;filter:alpha(opacity=0);top:0;width:5px;height:100%;cursor:w-resize;right:0;"
        ></div>
        <div
          id="resizeB"
          style="position:absolute;overflow:hidden;opacity:0;filter:alpha(opacity=0);width:100%;height:5px;cursor:n-resize;bottom:0;"
        ></div>
      </div>
    </div>
  </template>
  <script>
//   import { getRobotAnswer } from '@/api/smartManage';
  import userImg from '../assets/logo.png';
  import robotImg from '../assets/logo.png';
  export default {
    data() {
      return {
        msgs: [], //用来存放对话
        inputContent: '',
        oContent: {},
        flag: true,
        flag2: true,
      //我定义flagflag2的初衷是为了当我点击方块放大对话框后，点击x隐藏对话框，当我再次呼出对话框时，想让对话框的大小为正常大小
      //而不是放大后的大小。如果你没有点击方块放大的需求，这部分可以不用写。
      };
    },
    mounted() {
      this.oContent = document.getElementById('chattingContents');
      setTimeout(() => {
        this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight;
      }, 0);
      function dragable(id) {
        var d = document,
          o = d.getElementById(id),
          x,
          y,
          p = 'ondrag';
        o.ondragstart = function(e) {
          e = e || event;
          x = e.clientX - o.offsetLeft;
          y = e.clientY - o.offsetTop;
          d.ondragend = function(e) {
            e = e || event;
            o.style.left = e.clientX - x + 'px';
            o.style.top = e.clientY - y + 'px';
          };
        };
      }
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
            document.onmousemove = null;
            this.releaseCapture && this.releaseCapture();
          };
          this.setCapture && this.setCapture();
          return false;
        };
      }
      var dragMinWidth = 500;
      var dragMinHeight = 450;
      function resize(oParent, handle, isLeft, isTop, lockX, lockY) {
        handle.onmousedown = function(e) {
          var event = event || window.event;
          var disX = event.clientX - handle.offsetLeft;
          var disY = event.clientY - handle.offsetTop;
          var iParentTop = oParent.offsetTop;
          var iParentLeft = oParent.offsetLeft;
          var iParentWidth = oParent.offsetWidth;
          var iParentHeight = oParent.offsetHeight;
          document.onmousemove = function(e) {
            var event = event || window.event;
            var iL = event.clientX - disX;
            var iT = event.clientY - disY;
            var maxW =
              document.documentElement.clientWidth - oParent.offsetLeft - 2;
            var maxH =
              document.documentElement.clientHeight - oParent.offsetTop - 2;
            var iW = isLeft ? iParentWidth - iL : handle.offsetWidth + iL;
            var iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;
            isLeft && (oParent.style.left = iParentLeft + iL + 'px');
            isTop && (oParent.style.top = iParentTop + iT + 'px');
            iW < dragMinWidth && (iW = dragMinWidth);
            iW > maxW && (iW = maxW);
            lockX || (oParent.style.width = iW + 'px');
            iH < dragMinHeight && (iH = dragMinHeight);
            iH > maxH && (iH = maxH);
            lockY || (oParent.style.height = iH + 'px');
            if ((isLeft && iW == dragMinWidth) || (isTop && iH == dragMinHeight))
              document.onmousemove = null;
            return false;
          };
          document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
          };
          return false;
        };
      }
      var oDrag = document.getElementById('box');
      var oL = document.getElementById('resizeL');
      var oT = document.getElementById('resizeT');
      var oR = document.getElementById('resizeR');
      var oB = document.getElementById('resizeB');
      var oTitle = document.getElementById('header');
      drag(oDrag, oTitle);
      resize(oDrag, oL, true, false, false, true);
      resize(oDrag, oT, false, true, true, false);
      resize(oDrag, oR, false, false, false, true);
      resize(oDrag, oB, false, false, true, false);
      oDrag.style.left =
        (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + 'px';
      oDrag.style.top =
        (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + 'px';
      dragable('robot');
    },
    methods: {
      //点x隐藏对话框
      yc() {
        let box = document.getElementById('box');
        box.style.display = 'none';
        this.flag = !this.flag;
      },
      //点击你放好的图标或者块出现对话框
      toTalk() {
        if (!this.flag2) {
          this.flag = !this.flag;
          let box = document.getElementById('box');
          box.style.width = '500px';
          box.style.height = '450px';
          box.style.left = '33%';
          box.style.top = '20%';
          this.flag2 = !this.flag2;
        } else {
          this.flag = !this.flag;
          let box = document.getElementById('box');
          box.style.width = '500px';
          box.style.height = '450px';
          box.style.left = '33%';
          box.style.top = '20%';
        }
      },
      //点击放大对话框
      changeSize() {
        if (this.flag2) {
          let box = document.getElementById('box');
          box.style.width = '100%';
          box.style.height = '100%';
          box.style.left = '0';
          box.style.top = '0';
          this.flag2 = !this.flag2;
        } else {
          let box = document.getElementById('box');
          box.style.width = '500px';
          box.style.height = '450px';
          box.style.left = '33%';
          box.style.top = '20%';
          this.flag2 = !this.flag2;
        }
      },
      //发送消息
      sendMsgs() {
        this.oContent.scrollTop = this.oContent.scrollHeight;
        if (this.inputContent === '') {
          return;
        }
        this.msgs.push({
          content: this.inputContent,
          avatarUrl: userImg,
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
        let that = this;
        var paramData = {
          //一些需要的参数
        };
        getRobotAnswer(paramData)
          .then(res => {
            let data = res.data.rep;
            for (let i = 0; i < data.length; i++) {
              let arr = data[i];
              let q = arr.q;
              let a = arr.a;
              this.msgs.push({
                q: q,
                a: a,
                avatarUrl: robotImg,
                self: false,
              });
            }
            this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight;
          })
          .catch(err => {
            console.log(err);
          });
      },
    },
  };
  </script>
  <style lang="css" scoped>
  #robot {
    position: absolute;
    bottom: 50px;
    right: 100px;
    width: 40px;
    height: 70px;
    z-index: 9999;
  }
  #box {
    position: absolute;
    width: 500px;
    height: 450px;
    top: 20%;
    left: 33%;
    z-index: 8888;
    background: rgb(195, 218, 226);
    border-radius: 5px;
    display: none;
  }
  .uImg,
  .rImg {
    width: 40px;
    height: 40px;
  }
  .container {
    height: 100%;
    border-radius: 5px;
  }
  #header {
    height: 35px;
    line-height: 35px;
    padding: 6px 15px;
    color: #fff;
    font-size: 20px;
    background: rgb(219, 74, 70);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    display: flex;
    justify-content: space-between;
    user-select: none;
  }
  .cBox {
    height: 90%;
  }
  .contents {
    height: 85%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    padding: 4px 10px;
    background: #fff;
  }
  .self {
    float: right;
    height: 40px;
    margin-bottom: 20px;
  }
  .other {
    position: relative;
  }
  .clearfix::before {
    display: block;
    content: '';
    clear: both;
  }
  .answerContent {
    padding: 0 6px;
    line-height: 30px;
    background: rgb(80, 126, 164);
    border-radius: 6px;
    color: #fff;
    margin-left: 50px;
    margin-bottom: 10px;
  }
  .answerContent p {
    color: #fff;
  }
  .rImg {
    position: absolute;
    left: 0;
    top: 0;
  }
  .question {
    padding: 0 6px;
    height: 40px;
    line-height: 40px;
    background: rgb(245, 225, 152);
    border-radius: 6px;
    color: #333;
    margin-right: 10px;
  }
  img {
    display: inline-block;
  }
  .userQuestion {
    display: flex;
    justify-content: flex-start;
  }
  .userInput {
    padding: 10px 10px;
    height: 8%;
    display: flex;
    justify-content: space-between;
  }
  .tBox {
    width: 80%;
    height: 30px;
    border-radius: 6px;
    background: rgb(242, 245, 242);
  }
  .ipt {
    width: 100%;
    padding-left: 10px;
    height: 30px;
    line-height: 30px;
    resize: none;
    border: none;
    outline: none;
  }
  .vp-button--primary {
    width: 15%;
    background: rgb(80, 126, 164);
    color: #fff;
    font-weight: 600;
    line-height: 30px;
    height: 30px;
    padding: 0;
    border: none;
  }
  </style>
  