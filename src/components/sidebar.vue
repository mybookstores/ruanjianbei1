<template>
<div class="sidebar ">
    <nav class="shell close">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="../assets/text2.png" alt="">
                </span>
                <div class="text logo-text">
                    <span class="name">在线编辑器</span>
                    <span class="software">--editor--</span>
                </div>
            </div>
            <div class="toggle" @click="changesidebar">
                <img src="../assets/arrow.png"  class="image2">
            </div>
        </header>
        <div class="menu-bar">
            <div class="menu">
                <!-- <li class="search-box" @click="changesidebar">
                    <img  src="../assets/function.png" class="icon sun">
                    <img  src="../assets/function1.png" class="icon moon">
                    <text class="text">功能列表</text>
                </li> -->
                <ul>
                    <li :class="[clickFun == '1' ?'search-box':'nav-link']" @click="changefunction1()">
                        <a href="#">
                            <img  src="../assets/write.png" class="icon sun">
                            <img  src="../assets/write1.png" class="icon moon">
                            <span class="text">智能润色</span>
                        </a>
                    </li>
                    <li  :class="[clickFun == '2' ?'search-box':'nav-link']" @click="changefunction2()">
                        <a href="#">
                            <img  src="../assets/ocr.png" class="icon sun">
                            <img  src="../assets/ocr1.png" class="icon moon">
                            <span class="text">OCR文字识别</span>
                        </a>
                    </li>
                    <li  :class="[clickFun == '3' ?'search-box':'nav-link']" @click="changefunction3()">
                        <a href="#">
                            <img  src="../assets/picture.png" class="icon sun">
                            <img  src="../assets/picture1.png" class="icon moon">
                            <span class="text">图片内容提取</span>
                        </a>
                    </li>
                    <li  :class="[clickFun == '4' ?'search-box':'nav-link']" @click="changefunction4()">
                        <a href="#">
                            <img  src="../assets/sound.png" class="icon sun">
                            <img  src="../assets/sound1.png" class="icon moon">
                            <span class="text nac-text">语音识别</span>
                        </a>
                    </li>
                    <li  :class="[clickFun == '5' ?'search-box':'nav-link']" @click="changefunction5()">
                        <a href="#">
                            <img  src="../assets/tidy.png" class="icon sun">
                            <img  src="../assets/tidy1.png" class="icon moon">
                            <span class="text nac-text">智能排版</span>
                        </a>
                    </li>
                    <li  :class="[clickFun == '6' ?'search-box':'nav-link']" @click="changefunction6()">
                        <a href="#">
                            <img  src="../assets/template.png" class="icon sun">
                            <img  src="../assets/template1.png" class="icon moon">
                            <span class="text nac-text">模板选择</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="bottom-content">
                <li class="nav-link">
                    <a href="#">
                        <img  src="../assets/file.png" class="icon sun">
                        <img  src="../assets/file1.png" class="icon moon">
                        <span class="text nac-text">我的文档</span>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="#">
                        <img  src="../assets/logout.png" class="icon sun">
                        <img  src="../assets/logout1.png" class="icon moon">
                        <span class="text nac-text">注销</span>
                    </a>
                </li>
                <li class="mode">
                    <div class="sun-moon">
                        <img  src="../assets/sun.png" class="icon sun">
                        <img  src="../assets/moon.png" class="icon moon">
                    </div>
                    <span class="mode-text text">夜间模式</span>
                    <div class="toggle-switch" @click="changeday">
                        <span class="switch"></span>
                    </div>
                </li>
            </div>
        </div>

    </nav>
</div>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    msg: String,
    openRobot:Function,
    openImage:Function,
    addtemplate:Function
  },
  data(){
    return{
        clickFun:'1'
    }
    
  },
  mounted(){
    
  },
  methods:{
    changefunction1()
    {
        this.clickFun='1';
       this.opensidebar();  
       this.openRobot();
    },
    changefunction2()
    {
        this.clickFun='2';
       this.opensidebar();  
       this.openImage();
       
    },
    changefunction3()
    {
        this.clickFun='3';
       this.opensidebar(); 
       this.openImage(); 
       
    },
    changefunction4()
    {
        this.clickFun='4';
       this.opensidebar();  
       
    },
    changefunction5()
    {
        this.clickFun='5';
       this.opensidebar();  
       
    },
    changefunction6()
    {
        this.clickFun='6';
        this.opensidebar(); 
        setTimeout(()=>{
            this.addtemplate(); 
        },1000)
       
    },
    opensidebar()
    {
        const body = document.querySelector('body'); 
        body.querySelector('nav').classList.remove("close"); 
    },
    changesidebar()
    {
        const body = document.querySelector('body'); 
        body.querySelector('nav').classList.toggle("close"); 
    },
    closesidebar()
    {
        const body = document.querySelector('body'); 
        body.querySelector('nav').classList.add("close");     
    },
    changeday()
    {
        const body = document.querySelector('body'); 
        // body.classList.toggle("dark");
        const sidebar=document.getElementsByClassName('sidebar')[0];
        sidebar.classList.toggle("dark");
        // 如果body元素包含dark类
        if (sidebar.classList.contains("dark")) {
            body.querySelector('.mode-text').innerText = "白日模式";
        } else {
            body.querySelector('.mode-text').innerText = "夜间模式";
        } 
    },

  }
}
</script>

<style lang="scss" scoped>
$body-color: var(--body-color, #E4E9F7);
$shell-color: var(--shell-color, #FFF);
$primary-color: var(--primary-color, #695CFE);
$primary-color-light: var(--primary-color-light, #F6F5FF);
$toggle-color: var(--toggle-color, #DDD);
$text-color: var(--text-color, #707070);
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 深色主题变量 */
.dark {
    // $body-color: #202224;
    --body-color: #2a2d30;
    --shell-color: #171717;
    --primary-color: #3a3b3c;
    --primary-color-light: #3a3b3c;
    --toggle-color: #fff;
    --text-color: #ccc;
}
.sidebar {
    // min-height: 100vh;
    background-color: $body-color;
    transition: all 0.3s ease;
    width: calc(100% - 16px);
    height: 100%;
    position: fixed;

}

.shell {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    padding: 10px 14px;
    background: $shell-color;
    transition: all 0.3s ease;
    z-index: 100;
}

.close {
    width: 88px;
}

.shell li {
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
}
.image2{
    margin-left: 2px;
    width:20px;
    height:20px;
    border-radius: 6px;
}
.image,
.icon {
    // min-width: 60px;
    width:25px;
    height:25px;
    border-radius: 6px;
}

.icon {
    // min-width: 60px;
    width:25px;
    height:25px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 6px;
    // height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 300 23px '';
}

.text
 {
    color: $text-color;
    transition: all 0.3s ease;
}
.icon
{
    color: #fff000;
    transition: all 0.3s ease;
}

.text {
    font: 500 17px;
    white-space: nowrap;
    opacity: 1;
}

.shell.close .text {
    opacity: 0;
}
.shell.close .sun-moon img.moon {
    opacity: 0;
}
.shell .nav-link img.moon {
    opacity: 0;
}
.shell .search-box img.moon {
    opacity: 0;
}


header {
    margin-top: 6px;
    position: relative;
}

.image-text {
    display: flex;
    align-items: center;
}

.logo-text {
    margin-left: 45px;
    display: flex;
    flex-direction: column;
    line-height: 1.3;
}

.name {
    margin-top: 2px;
    font: 600 18px '';
}

.software {
    font-size: 20px;
    margin-top: -2px;
    display: block;
}

.image {
    display: flex;
    align-items: center;
    justify-content: center;
}

.image img {
    width: 45px;
    margin-left: 25px;
    
    border-radius: 6px;
}

.toggle {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    background-color: $primary-color;
    color: $shell-color;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.toggle {
    color: #ccc;
}

.shell.close .toggle {
    transform: translateY(-50%) rotate(0deg);
}

.menu {
    margin-top: 36px;
}

.search-box {
    border-radius: 6px;
    background-color: $primary-color-light;
    cursor: pointer;
    transition: all 0.3s ease;
}

.shell li a {
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.shell li a:hover {
    background-color: $primary-color;
}
.active{
    background-color: $primary-color-light;
}

.shell li a:hover .text {
    color: $shell-color;
}
.shell li a:hover img.sun {
    opacity: 0;
}
.shell li a:hover img.moon {
    opacity: 1;
}

.menu-bar {
    height: calc(100% - 55px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
}

.menu-bar::-webkit-scrollbar {
    display: none;
}

.menu-bar .mode {
    border-radius: 6px;
    background-color: $primary-color-light;
    position: relative;
    transition: all 0.3s ease;
}
.sun-moon{
    margin-top: 25px;
}
.menu-bar .mode .sun-moon {
    height: 50px;
    width: 60px;
}

.mode .sun-moon img {
    position: absolute;
}

.mode .sun-moon img.sun {
    opacity: 0;
}

.toggle-switch {
    position: absolute;
    right: 0;
    height: 100%;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
}

.switch {
    position: relative;
    height: 22px;
    width: 40px;
    border-radius: 25px;
    background-color: $toggle-color;
    transition: all 0.3s ease;
}

.switch::before {
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background-color: $shell-color;
    transition: all 0.3s ease;
}

.dark .shell li a:hover .icon,
.dark .shell li a:hover .text {
    color: #ccc;
}

.dark  .mode .sun-moon img.sun {
    opacity: 1;
}
.dark .close .mode .sun-moon img.sun {
    opacity: 0;
}

.dark .mode .sun-moon img.moon {
    opacity: 0;
}
.nav-link img.sun {
    
    position: absolute;
}
.dark .nav-link img.sun {
    
    opacity: 0;
}

.dark .nav-link img.moon {
    
    opacity: 1;
}
.search-box img.sun {
    
    position: absolute;
}
.dark .search-box img.sun {
    
    opacity: 0;
}

.dark .search-box img.moon {
    
    opacity: 1;
}

.dark .switch::before {
    left: 20px;
}
</style>
