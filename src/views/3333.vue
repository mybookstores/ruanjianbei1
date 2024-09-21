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
                <h2 class="modal-title">显示结果</h2>
                <p class="modal-description">可复制到编辑器中</p>
                <div class="upload-area">
                    1111斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急1111斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急1111斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急1111斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急1111斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急1111斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急1111斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急1111斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急1111斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急1111斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急1111斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急11
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary">取消</button>
                <button class="btn-primary">复制结果</button>
            </div>
        </div>
    </div>
</template>

<script>

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
  left:250px;
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
  margin-right: 315px;
}

.upload-area {
  margin-top: 1.25rem;
  border: none;
  background-image: url("data:image/svg+xml,%3csvg width='100%25'  height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%237266fe' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  background-color: transparent;
  padding: 15px;
  width: 100%;
  display: -webkit-box;
  display: flex;
  text-align: left;
  height:220px;
  overflow: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
//   -webkit-box-align: center;
//           align-items: center;
}
// .upload-area:hover, .upload-area:focus {
//   background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%232e44ff' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
// }



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
  