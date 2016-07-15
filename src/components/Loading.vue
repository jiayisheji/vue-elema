<template>
  <div class="indicator pop-fade-transition d-popup d-popup-center">
    <span class="indicator-text"></span>
    <span class="indicator-spin"></span>
  </div>
</template>

<script>
export default {

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.indicator {
    position: fixed;
    border-radius: 5px;
    background: rgba(0,0,0,.7);
    box-sizing: border-box;
    padding: 10px;
}

.indicator,.indicator-text {
    color: #fff;
    text-align: center;
}

.indicator-text {
    display: block;
    margin-bottom: 10px;
}

.indicator-spin {
    display: inline-block;
    font-size: 0;
    width: 40px;
    height: 40px;
    background: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZSBpZD0nbCcgeDE9JzYwJyB4Mj0nNjAnIHkxPSc3JyB5Mj0nMjcnIHN0cm9rZT0nI2ZmZicgc3Ryb2tlLXdpZHRoPScxMScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJy8+CiAgICA8L2RlZnM+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+CiAgICAgICAgPHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz4KICAgIDwvZz4KPC9zdmc+) 50% no-repeat;
    background-size: 100%;
    -webkit-animation: indicator-spin 1s steps(12,end) infinite;
    animation: indicator-spin 1s steps(12,end) infinite;
}

@-webkit-keyframes indicator-spin {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
    }
}

@keyframes indicator-spin {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
    }
}

.pop-bounce-enter {
    -webkit-animation: pop-bounce-in .3s cubic-bezier(.3,0,0,1.5);
    animation: pop-bounce-in .3s cubic-bezier(.3,0,0,1.5);
}

.pop-bounce-leave {
    -webkit-animation: pop-bounce-out .2s cubic-bezier(.895,.03,.685,.22);
    animation: pop-bounce-out .2s cubic-bezier(.895,.03,.685,.22);
}

@-webkit-keyframes pop-bounce-in {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes pop-bounce-in {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8);
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@-webkit-keyframes pop-bounce-out {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    to {
        -webkit-transform: scale(.7);
        transform: scale(.7);
    }
}

@keyframes pop-bounce-out {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    to {
        -webkit-transform: scale(.7);
        transform: scale(.7);
    }
}

.pop-fade-enter {
    -webkit-animation: pop-fade-in .3s linear;
    animation: pop-fade-in .3s linear;
}

.pop-fade-leave {
    -webkit-animation: pop-fade-out .3s linear;
    animation: pop-fade-out .3s linear;
}

@-webkit-keyframes pop-fade-in {
    0% {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes pop-fade-in {
    0% {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@-webkit-keyframes pop-fade-out {
    0% {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

@keyframes pop-fade-out {
    0% {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

.modal-enter {
    -webkit-animation: modal-in .2s ease;
    animation: modal-in .2s ease;
}

.modal-leave {
    -webkit-animation: modal-out .2s ease;
    animation: modal-out .2s ease;
}

@-webkit-keyframes modal-in {
    0% {
        opacity: 0;
    }
}

@keyframes modal-in {
    0% {
        opacity: 0;
    }
}

@-webkit-keyframes modal-out {
    to {
        opacity: 0;
    }
}

@keyframes modal-out {
    to {
        opacity: 0;
    }
}

.d-popup {
    left: -9999px;
    top: -9999px;
}

.d-popup-center {
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}

.d-popup-center.pop-bounce-enter {
    -webkit-animation: pop-bounce-center-in .3s cubic-bezier(.3,0,0,1.5);
    animation: pop-bounce-center-in .3s cubic-bezier(.3,0,0,1.5);
}

.d-popup-center.pop-bounce-leave {
    -webkit-animation: pop-bounce-center-out .2s cubic-bezier(.895,.03,.685,.22);
    animation: pop-bounce-center-out .2s cubic-bezier(.895,.03,.685,.22);
}

@-webkit-keyframes pop-bounce-center-in {
    0% {
        -webkit-transform: translate(-50%,-50%) scale(.8);
        transform: translate(-50%,-50%) scale(.8);
    }

    to {
        -webkit-transform: translate(-50%,-50%) scale(1);
        transform: translate(-50%,-50%) scale(1);
    }
}

@keyframes pop-bounce-center-in {
    0% {
        -webkit-transform: translate(-50%,-50%) scale(.8);
        transform: translate(-50%,-50%) scale(.8);
    }

    to {
        -webkit-transform: translate(-50%,-50%) scale(1);
        transform: translate(-50%,-50%) scale(1);
    }
}

@-webkit-keyframes pop-bounce-center-out {
    0% {
        -webkit-transform: translate(-50%,-50%) scale(1);
        transform: translate(-50%,-50%) scale(1);
    }

    to {
        -webkit-transform: translate(-50%,-50%) scale(.7);
        transform: translate(-50%,-50%) scale(.7);
    }
}

@keyframes pop-bounce-center-out {
    0% {
        -webkit-transform: translate(-50%,-50%) scale(1);
        transform: translate(-50%,-50%) scale(1);
    }

    to {
        -webkit-transform: translate(-50%,-50%) scale(.7);
        transform: translate(-50%,-50%) scale(.7);
    }
}

.d-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
}

</style>
