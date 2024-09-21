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
                    <li class="search-box" @click="opensidebar">
                        <img  src="../views/backgroun3.jpg" class="icon">
                        <input type="text" placeholder="搜索...">
                    </li>
                    <ul class="menu-links">
                        <li class="nav-link" @click="changefunction()">
                            <a href="#">
                                <img  src="../assets/search5.png" class="icon">
                                <span class="text">智能润色</span>
                            </a>
                        </li>
    
                        <li class="nav-link">
                            <a href="#">
                                <img  src="../assets/search5.png" class="icon">
                                <span class="text">我的收藏</span>
                            </a>
                        </li>
    
                        <li class="nav-link">
                            <a href="#">
                                <img  src="../assets/search4.png" class="icon">
                                <span class="text">历史记录</span>
                            </a>
                        </li>
    
                        <li class="nav-link">
                            <a href="#">
                                <img  src="../assets/search2.png" class="icon">
                                <span class="text nac-text">消息</span>
                            </a>
                        </li>
    
                        <li class="nav-link">
                            <a href="#">
                                <img  src="../assets/search4.png" class="icon">
                                <span class="text nac-text">粉丝管理</span>
                            </a>
                        </li>
    
                        <li class="nav-link">
                            <a href="#">
                                <img  src="../assets/search1.png" class="icon sun">
                                <img  src="../assets/logo.png" class="icon moon">
                                <span class="text nac-text">创作中心</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="bottom-content">
                    <li class="nav-link">
                        <a href="#">
                            <img  src="../assets/logout.png" class="icon sun">
                            <img  src="../assets/logout1.png" class="icon moon">
                            <span class="text nac-text">注销</span>
                        </a>
                    </li>
                    <li class="mode">
                        <div class="sun-moon">
                            <img  src="../assets/search1.png" class="icon sun">
                            <img  src="../views/backgroun3.jpg" class="icon moon">
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
        msg: String
      },
      methods:{
        changefunction()
        {
           this.opensidebar();  
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
        min-height: 100vh;
        background-color: $body-color;
        transition: all 0.3s ease;
        width: calc(100% - 16px);
        position: absolute;
    
    }
    
    .shell {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 240px;
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
        width:30px;
        height:30px;
        border-radius: 6px;
    }
    
    .icon {
        // min-width: 60px;
        width:30px;
        height:30px;
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
    
    header {
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
        margin-top: 40px;
    }
    
    li.search-box {
        border-radius: 6px;
        background-color: $primary-color-light;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    li.search-box input {
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
        background-color: $primary-color-light;
        color: $text-color;
        border-radius: 6px;
        font-size: 17px;
        font-weight: 500;
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
    
    .dark .switch::before {
        left: 20px;
    }
    </style>
    