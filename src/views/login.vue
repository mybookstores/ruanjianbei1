<template>
    <div class="login">
        <div class="shell">
            <div class="top">
                <span class="off">SIGN IN</span>
                <div class="button">
                    <div class="ball"></div>
                </div>
                <span class="on">SIGN UP</span>
            </div>

            <div class="bottom">
                <div class="signIn">
                    <h2>Sign in</h2>
                    <input type="text" placeholder="Username">
                    <input type="text" placeholder="Password">
                    <button>GO</button>
                </div>
                <div class="signUp">
                    <h2>Sign up</h2>
                    <input type="text" placeholder="Username">
                    <input type="text" placeholder="Password">
                    <input type="text" placeholder="Confirm password">
                    <button>GO</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
  
export default {
    name: 'login',
    mounted(){
        this.changgebutton();
    },
    methods:{
        changgebutton(){
            let button = document.querySelector('.button')
            let ball = document.querySelector('.ball')
            let bottom = document.querySelector('.bottom')
            let off = document.querySelector('.off')
            let on = document.querySelector('.on')
            let index = 0
            button.addEventListener('click', () => {
                if (index == 0) {
                    index = 1
                    ball.style.left = 61 + '%'
                    on.style.opacity = 1
                    off.style.opacity = .5
                    bottom.style.transform = "rotateY(180deg)"
                } else {
                    index = 0
                    ball.style.left = 0
                    on.style.opacity = .5
                    off.style.opacity = 1
                    bottom.style.transform = "rotateY(0deg)"
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
}

.login {
    height: 100vh;
    // width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(31, 32, 41);
}

.shell {
    width: 300px;
    height: 350px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    perspective: 1000px;
    /* 给最外层加上一个透视，否则接下去的翻转会没有3d的效果 */
}

.top {
    width: 300px;
    display: flex;
    cursor: pointer;
    justify-content: space-evenly;
}

.off,
.on {
    color: #fff;
    transition: .5s;
    font: 300 20px '';
}
.on{
    opacity: .5;
}
.button {
    width: 60px;
    height: 25px;
    background-color: rgb(255, 235, 167);
    border-radius: 20px;
    position: relative;
}

.ball {
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: rgb(46, 45, 56);
    border-radius: 50%;
    transition: .5s;
    box-shadow: 0 0 10px #000;
    left: 0;
    transform: translate(-1px);
}

.bottom {
    width: 300px;
    height: 250px;
    background-image: url(../assets/background.png);
    transform-style: preserve-3d;
    /* 使元素呈现出3D效果 */
    position: relative;
    transition: .7s;
    border-radius: 5px;
}

.bottom>div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.bottom>div h2 {
    color: white;
}
.bottom>div input{
    width: 200px;
    height: 25px;
    padding:0 10px;
    background-color: rgb(31, 32, 41);
    color: #fff;
}

.bottom>div button{
    width: 80px;
    height: 30px;
    color: #333;
    font-size: 15px;
    background-color: rgb(255, 235, 167);
    border-radius: 4px;
    transition: .3s;
    margin-bottom: 10px;
    cursor: pointer;box-shadow:0 0 10px rgb(255, 235, 167);
}

.signIn {
    transform: translateZ(70px);
    /* 在这里我们将卡片里面内容和卡片有一个距离，这样子会更有立体感 */
}

.signUp {
    position: absolute;
    top: 0;
    transform: translateZ(-70px) rotateY(180deg);
    /* 我们给反面加上距离的时候，前往不要忘记给反面的内容也翻转一下，否则就会出现这种卡片转过来了，里面的内容也反了 */
}
</style>
