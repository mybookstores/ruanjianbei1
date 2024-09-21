<template>
    <div>
    <div class="background"></div>
        <div class="container">
            <div class="item">
                <!-- <h2 class="logo"><i class='bx'></i></h2> -->
                <div class="text-item">
                    <h2>基于大小模型协同的 <br><span>
                        在线编辑器
                    </span></h2>
                    <p>本站模型基于百度飞桨AI Studio星河社区与文心ERNIE SDK</p>
                    <div class="social-icon">
                        <a href="#"><i class='bx bxl-facebook'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                        <a href="#"><i class='bx bxl-youtube'></i></a>
                        <a href="#"><i class='bx bxl-instagram'></i></a>
                        <a href="#"><i class='bx bxl-linkedin'></i></a>
                    </div>
                </div>
            </div>
            <div class="login-section">
                <div class="form-box login">
                    <form action="">
                        <h2>登录</h2>
                        <div class="input-box">
                            <span class="icon"><i class='bx bxs-envelope'></i></span>
                            <input type="email" required>
                            <label >用户名</label>
                        </div>
                        <div class="input-box">
                            <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                            <input type="password" required>
                            <label>密码</label>
                        </div>
                        <!-- <div class="remember-password">
                            <label for=""><input type="checkbox">Remember Me</label>
                            <a href="#">Forget Password</a>
                        </div> -->
                        <button class="btn">登录</button>
                        <div class="create-account">
                            <p>创建一个新账号? <a href="#" class="register-link" @click="signin">注册</a></p>
                        </div>
                    </form>
                </div>
                <div class="form-box register">
                    <form action="">

                        <h2>注册</h2>

                        <div class="input-box">
                            <span class="icon"><i class='bx bxs-user'></i></span>
                            <input type="text" required>
                            <label >用户名</label>
                        </div>
                        <div class="input-box">
                            <span class="icon"><i class='bx bxs-envelope'></i></span>
                            <input type="email" required>
                            <label >邮箱</label>
                        </div>
                        <div class="input-box">
                            <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                            <input type="password" required>
                            <label>密码</label>
                        </div>
                        <!-- <div class="remember-password">
                            <label for=""><input type="checkbox">I agree with this statment</label>
                        </div> -->
                        <button class="btn" >注册</button>
                        <div class="create-account">
                            <p>已经有账号了? <a href="#" class="login-link" @click="signup">登录</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login3',
    mounted() {
        
    },
    methods:{
        signin()
        {
            const loginsec=document.querySelector('.login-section')
            loginsec.classList.add('active')
        },
        signup()
        {
            const loginsec=document.querySelector('.login-section')
            loginsec.classList.remove('active')
        }
    }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,500&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "poppins",sans-serif;
}

.background{
    background: url(../assets/nuaa3.jpg) no-repeat;
    background-position: center;
    background-size:cover ;
    height: 98vh;//
    width: 100%;
    padding: 0;
    margin: 0;

    filter: blur(10px);
}

.container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 75%;
    height: 550px;
    margin-top: 20px;
    background: url(../assets/nuaa3.jpg) no-repeat;
    background-position: center;
    background-size:cover ;
    border-radius: 20px;
    overflow: hidden;
    
    
}
.item{
    position: absolute;
    top: 0;
    left: 0;
    width: 58%;
    height: 100%;
    color: #fff;
    background: transparent;
    padding: 80px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    


}
.item .logo{
    color: #fff;
    font-size: 30px;

}
.text-item{
    margin-top:150px;
}
.text-item h2{
    font-size: 42px;
    line-height: 1.5;
}
.text-item p{
    font-size: 15px;
    margin: 20px 0;
}
.social-icon a i{
    color: #fff;
    font-size: 24px;
    margin-left: 10px;
    cursor: pointer;
    transition: .5s ease;
}
.social-icon a:hover i{
    transform: scale(1.2);
}
.container .login-section{
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% - 58%);
    height: 100%;
    color: #fff;
    backdrop-filter: blur(10px);
}

.login-section .form-box{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
}
.login-section .form-box.register{
    transform: translateX(450px);
    transition: transform .6s ease;
    transition-delay: 0s;
}
.login-section.active .form-box.register{
    transform: translateX(0px);
    transition-delay: .7s;
}

.login-section .form-box.login{
    transform: translateX(0px);
    transition: transform .6s ease;
    transition-delay: 0.7s;
}
.login-section.active .form-box.login{
    transform: translateX(450px);
    transition-delay: 0s;
}



.login-section .form-box h2{
    text-align: center;
    font-size: 25px;
}

.form-box .input-box{
    width: 340px;
    height: 50px;
    border-bottom: 2px solid#fff;
    margin: 30px 0;
    position: relative;
}
.input-box input{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    padding-right: 28px;


}
.input-box label{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600px;
    pointer-events: none;
    transition: .5s ease;

}
.input-box .icon{
    position: absolute;
    top: 13px;
    right: 0;
    font-size: 19px;
}
.input-box input:focus~ label,
.input-box input:valid~ label{
    top: -5px;
}
.remember-password{
    font-size: 14px;
    font-weight: 500;
    margin: -15px 0 15px ;
    display: flex;
    justify-content: space-between;
}
.remember-password label input{
    accent-color: #fff;
    margin-right: 3px;

}
.remember-password a{
    color: #fff;
    text-decoration: none;
}
.remember-password a:hover{
    text-decoration: underline;
}
.btn{
    background: #fff;
    width: 100%;
    height: 45px;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: #695cfe;
    font-size: 16px;
    color: #fff;
    box-shadow: rgba(0,0,0,0.4);

}
.create-account{
    font-size: 14.5px;
    text-align: center;
    margin: 25px;
}
.create-account p a{
    color: #fff;
    font-weight: 600px;
    text-decoration: none;
}
.create-account p a:hover{
    text-decoration: underline;
}

</style>