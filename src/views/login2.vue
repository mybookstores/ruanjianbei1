<template>
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form"  @submit.prevent="gosignup">
            <h1 class="title1">基于大小模型协同的在线编辑器</h1>
            <h5 class="title2">本站模型基于百度飞桨AI Studio星河社区与文心ERNIE SDK</h5>
            <h2 class="title">登录</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="用户名"  minlength="3" maxlength="20" v-model="username"/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="密码" minlength="6" maxlength="15" v-model="password"/>
            </div>
            <input type="submit" value="立即登录" class="btn solid" />
          </form>
          <form action="#" class="sign-up-form"  @submit.prevent="gologin">
            <h1 class="title1">基于大小模型协同的在线编辑器</h1>
            <h5 class="title3">本站模型基于百度飞桨AI Studio星河社区与文心ERNIE SDK</h5>
            <h2 class="title">注册</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="用户名"  minlength="3" maxlength="20" v-model="username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="text"  placeholder="邮箱"  v-model="email"/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="密码" minlength="6" maxlength="15" v-model="password"/>
            </div>
            <input type="submit" class="btn" value="立即注册" />

          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>加入我们</h3>
            <p>
             加入我们，成为本站的一份子。
            </p>
            <button class="btn transparent" id="sign-up-btn" @click="signin">
             去注册
            </button>
          </div>
          <img src="../assets/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>已有帐号？</h3>
            <p>
             立即登录已有帐号，享受独家权益。
            </p>
            <button class="btn transparent" id="sign-in-btn" @click="signup">
              去登录
            </button>
          </div>
          <img src="../assets/register.svg" class="image" alt="" />
        </div>
      </div>
    </div>
</template>


<script>
import axios from 'axios';
import { ElMessage } from 'element-plus'
export default {
    name: 'login2',
    data(){
      return{
        username:"",
        password:"",
        email:""
      }
        
    },
    mounted() {
        
    },
    methods:{
        signin()
        {
            const container = document.querySelector(".container");
            container.classList.add("sign-up-mode");
        },
        signup()
        {
            const container = document.querySelector(".container");
            container.classList.remove("sign-up-mode");
        },
        gopage(url)
        {
          
          this.$router.push(url)
        },
        findUser(username){
          
          let data = {
            account: username
          };
          axios.get("http://localhost:5000/finduser", {params:data})
            .then(response => {
                // 处理返回的数据
                console.log(response);
                return 1;

            })
            .catch(error => {
                // 处理错误
                console.error(error);
                return 0;
            });  
            setTimeout(()=>{
                //需要延迟的代码 :3秒后延迟跳转到首页，可以加提示什么的
                  return 0;
                    //延迟时间：3秒
                },2000)

            
        },
        gosignup(){
          let username=this.username;
          let password=this.password;
          let data = {
            account: username,
            password: password
          };
          axios.get("http://localhost:5000/user", {params:data})
            .then(response => {
                // 处理返回的数据
                console.log(response);
                ElMessage({
                  message: '登录成功，即将跳转',
                  type: 'success',
                })
                setTimeout(()=>{
                //需要延迟的代码 :3秒后延迟跳转到首页，可以加提示什么的
                  this.gopage('/');
                    //延迟时间：3秒
                },2000)
                
                
            })
            .catch(error => {
                // 处理错误
                console.error(error);
                ElMessage({
                  message: '用户不存在',
                  type: 'error',
                })
            });
            
        },
        async gologin(){
            let username=this.username;
            let password=this.password;
            let email=this.email;
            let data={
                name:username,
                type:"user",
                account:username,
                password:password,
                email:email
            }
            var reg=/^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/;
 
            if(!reg.test(email)){
              ElMessage({
                  message: '邮箱格式不正确',
                  type: 'error',
                })
              return;
            }
            axios.get("http://localhost:5000/finduser", {params:{account:username}})
            .then(response => {
                // 处理返回的数据
                console.log(response);
                ElMessage({
                  message: '用户已存在',
                  type: 'error',
                })
                return;

            })
            .catch(error => {
                // 处理错误
                console.error(error);
                axios.post('http://localhost:5000/user', data)
                .then(response => {
                    // 处理返回的数据
                    console.log(response);
                    ElMessage({
                      message: '注册成功',
                      type: 'success',
                    })
                    setTimeout(()=>{
                    
                      this.signup();
                        //延迟时间：3秒
                    },1000)
                    
                })
                .catch(error => {
                    // 处理错误
                    console.error(error);
                }); 
            });

          
            
              
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
input {
  font-family: "Poppins", sans-serif;
}

.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 40%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-top: 30px;
  margin-bottom: 10px;
}
.title1 {
  font-size: 2.8rem;
  color: #444;
  margin-bottom: 20px;
}
.title2 {
  
  color: #8f85ff;
  margin-bottom: 80px;
}
.title3 {
  
  color: #8f85ff;
  margin-bottom: 60px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}

.social-icon:hover {
  color: #695cfe;
  border-color: #695cfe;
}

.btn {
  width: 150px;
  background-color: #8f85ff;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background-color: #695cfe;
}
.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #7e73fa 80%, #04befe 50%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

@media (max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }
  .signin-signup {
    width: 100%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .signin-signup,
  .container.sign-up-mode .signin-signup {
    left: 50%;
  }

  .panels-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .image {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel .content {
    padding-right: 15%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .btn.transparent {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

  .container:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .container.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .container.sign-up-mode .signin-signup {
    top: 5%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 50%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}

</style>
