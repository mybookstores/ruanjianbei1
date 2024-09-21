<template>
    <div class="chatAppBody">
        <div class="chatTitle">标题</div>
        <div class="chatBox">
            <div class="chatRow">
                <el-avatar class="chatAvatar" :size="30" src="https://goflychat.oss-cn-hangzhou.aliyuncs.com/static/upload/avator/2022June/32a988a3c2f8700119fa1f5da1b6a4bd.png"></el-avatar>
                <div class="chatMsgContent">
                    <div class="chatUsername">唯一客服系统</div>
                    <div class="chatContent">有什么可以帮您?</div>
                </div>
            </div>
            <div class="chatRow chatRowMe">
                <div class="chatContent">你好，这个客服系统多少钱？</div>
            </div>
        </div>
        <div class="chatBottom">输入框区域</div>
    </div>
</template>

<script>
export default {
    name: 'robot',
    data() {
        return {
        }
    },
    methods: {
    },
    mounted: function () {
    }
}
</script>

<style lang="scss" scoped>
    .chatAppBody{
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: #f1f5f8;
    }
    .chatTitle{
        background: #fff;
    }
    .chatBox{
        flex: 1;
        padding: 0 5px;
    }
    .chatBottom{
        background: #fff;
    }
    .chatRow{
        display: flex;
        align-items: flex-end;
        margin: 5px 0px;
    }
    .chatAvatar{
        margin-right: 5px;
        flex-shrink: 0;
    }
    .chatUsername {
        font-size: 12px;
        white-space: nowrap;
        color: #999;
        margin-bottom: 2px;
    }
    .chatContent{
        border-radius: 10px 10px 10px 0px;
        padding: 10px;
        background-color: rgb(255,255,255);
        box-shadow: 0 5px 30px rgb(50 50 93 / 8%), 0 1px 3px rgb(0 0 0 / 5%);
        font-size: 14px;
        word-break: break-all;
        line-height: 21px;
    }
    .chatRowMe{
        justify-content: flex-end;
    }
    .chatRowMe .chatContent{
        border-radius: 10px 10px 0px 10px;
    }
</style>