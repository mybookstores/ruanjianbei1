<template>
    <div class="body">
        <div class="modal">
            <div class="modal-header">
                <div class="modal-logo">
                    <span class="logo-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="419.116" viewBox="0 0 512 419.116">
                            <defs>
                                <clippath id="clip-folder-new">
                                    <rect width="512" height="419.116"></rect>
                                </clippath>
                            </defs>
                            <g id="folder-new" clip-path="url(#clip-folder-new)">
                                <path id="Union_1" data-name="Union 1" d="M16.991,419.116A16.989,16.989,0,0,1,0,402.125V16.991A16.989,16.989,0,0,1,16.991,0H146.124a17,17,0,0,1,10.342,3.513L227.217,57.77H437.805A16.989,16.989,0,0,1,454.8,74.761v53.244h40.213A16.992,16.992,0,0,1,511.6,148.657L454.966,405.222a17,17,0,0,1-16.6,13.332H410.053v.562ZM63.06,384.573H424.722L473.86,161.988H112.2Z" fill="#2e44ff" stroke="" stroke-width="1"></path>
                            </g>
                        </svg>
                    </span>
                </div>
                <button class="btn-close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="#6a6b76"></path></path></svg>
                </button>
            </div>
            <div class="modal-body">
                <h2 class="modal-title">上传文件</h2>
                <p class="modal-description">个人空间picture</p>
                <button class="upload-area">
                    <span class="upload-area-icon">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340.531" height="419.116" viewBox="0 0 340.531 419.116">
        <g id="files-new" clip-path="url(#clip-files-new)">
            <path id="Union_2" data-name="Union 2" d="M-2904.708-8.885A39.292,39.292,0,0,1-2944-48.177V-388.708A39.292,39.292,0,0,1-2904.708-428h209.558a13.1,13.1,0,0,1,9.3,3.8l78.584,78.584a13.1,13.1,0,0,1,3.8,9.3V-48.177a39.292,39.292,0,0,1-39.292,39.292Zm-13.1-379.823V-48.177a13.1,13.1,0,0,0,13.1,13.1h261.947a13.1,13.1,0,0,0,13.1-13.1V-323.221h-52.39a26.2,26.2,0,0,1-26.194-26.195v-52.39h-196.46A13.1,13.1,0,0,0-2917.805-388.708Zm146.5,241.621a14.269,14.269,0,0,1-7.883-12.758v-19.113h-68.841c-7.869,0-7.87-47.619,0-47.619h68.842v-18.8a14.271,14.271,0,0,1,7.882-12.758,14.239,14.239,0,0,1,14.925,1.354l57.019,42.764c.242.185.328.485.555.671a13.9,13.9,0,0,1,2.751,3.292,14.57,14.57,0,0,1,.984,1.454,14.114,14.114,0,0,1,1.411,5.987,14.006,14.006,0,0,1-1.411,5.973,14.653,14.653,0,0,1-.984,1.468,13.9,13.9,0,0,1-2.751,3.293c-.228.2-.313.485-.555.671l-57.019,42.764a14.26,14.26,0,0,1-8.558,2.847A14.326,14.326,0,0,1-2771.3-147.087Z" transform="translate(2944 428)" fill="#2e44ff">
        </path></g>
        </svg>
                    </span>
                    <span class="upload-area-title">将文件拖到此处上传。</span>
                    <span class="upload-area-description">
                        或者，您可以单击此处选择一个文件 <br><strong>点击上传</strong>
                    </span>
                </button>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" @click="closeImage">取消</button>
                <button class="btn-primary">上传提交</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'uploadimage',
  props: {
      closeImage:Function
  },
  data() {
    return {
    }
  },
  methods:{
    

  }
}
</script>
<style lang="scss" scoped>
$c-action-primary: var(--c-action-primary, #2e44ff);
$c-action-primary-accent: var(--c-action-primary-accent, #e9e5ff);
$c-action-secondary: var(--c-action-secondary, #e5e5e5);
$c-text-primary: var(--c-text-primary, #0d0f21);
$c-text-secondary: var(--c-text-secondary, #6a6b76);
$c-background-primary: var(--c-background-primary, #d0d1de);
*, *:after, *:before {
  box-sizing: border-box;
}
*{
   margin:0;
   padding:0;
   border:0;
   font-size:100%;
   font:inherit;
   vertical-align:baseline;
}

.body {
  position: fixed;
  top:150px;
  left:550px;
  width:500px;
  height: 500px;
  font-family: "Inter", sans-serif;
  color: $c-text-primary;
//   background-color: $c-background-primary;
  line-height: 1.5;
  z-index:8800;

}

input, button, select, textarea {
  font: inherit;
}

.modal {
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
//   margin-top: 10vh;
  margin-bottom: 10vh;
  background-color: #FFF;
  border-radius: .5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: start;
          align-items: flex-start;
  -webkit-box-pack: justify;
          justify-content: space-between;
  padding: 1.5rem 1.5rem 1rem;
}

.logo-circle {
  width: 3.5rem;
  height: 3.5rem;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
          justify-content: center;
  -webkit-box-align: center;
          align-items: center;
  border-radius: 50%;
  background-color: $c-action-primary-accent;
}
.logo-circle svg {
  max-width: 1.5rem;
}

.btn-close {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: .25rem;
  border: none;
  background-color: transparent;
}
.btn-close:hover, .btn-close:focus {
  background-color: $c-action-primary-accent;
}

.modal-body {
  padding: 1rem 1.5rem;
}

.modal-title {
  font-weight: 700;
  margin-right: 380px;
}

.modal-description {
  color: $c-text-secondary;
  margin-right: 326px;
}

.upload-area {
  margin-top: 1.25rem;
  border: none;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23ccc' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  background-color: transparent;
  padding: 3rem;
  width: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-align: center;
          align-items: center;
}
.upload-area:hover, .upload-area:focus {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%232e44ff' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
}

.upload-area-icon {
  display: block;
  width: 2.25rem;
  height: 2.25rem;
}
.upload-area-icon svg {
  max-height: 100%;
  max-width: 100%;
}

.upload-area-title {
  margin-top: 1rem;
  display: block;
  font-weight: 700;
  color: $c-text-primary;
}

.upload-area-description {
  display: block;
  color: $c-text-secondary;
}
.upload-area-description strong {
  color: $c-action-primary;
  font-weight: 700;
}

.modal-footer {
  padding: 1rem 1.5rem 1.5rem;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: end;
          justify-content: flex-end;
}
.modal-footer [class*="btn-"] {
  margin-left: .75rem;
}

.btn-secondary, .btn-primary {
  padding: .5rem 1rem;
  font-weight: 500;
  border: 2px solid $c-action-secondary;
  border-radius: .25rem;
  background-color: transparent;
}

.btn-primary {
  color: #FFF;
  background-color: $c-action-primary;
  border-color: $c-action-primary;
}
.btn-secondary:hover {
  border-color: #eae8f9;
  background-color: #f6f5ff;
}
.btn-primary:hover {
  border-color: #192ef0;
  background-color: #192ef0;
}
</style>
  