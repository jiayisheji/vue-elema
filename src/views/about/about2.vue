<template>
    <div _v-7e5a38b9="">
        <h3 _v-7e5a38b9="">文化活动</h3>
        <h5 _v-7e5a38b9="">不仅有工作，我们还有丰富多彩的文化生活</h5>
        <img class="content-bigimage" src="/dist/static/about-2-1.a2ee371.jpg" alt="" _v-7e5a38b9="">
        <h3 _v-7e5a38b9="">颁奖礼</h3>
        <h5 _v-7e5a38b9="">奖励在工作中表现突出的员工</h5>
        <img class="content-bigimage" src="/dist/static/about-2-2.2bd45c6.jpg" alt="" _v-7e5a38b9="">
        <h3 _v-7e5a38b9="">饿了么 hackathon</h3>
        <h5 _v-7e5a38b9="">追寻最牛的极客少年</h5>
        <img class="content-bigimage" src="/dist/static/about-2-3.d3cfe59.jpg" alt="" _v-7e5a38b9="">
        <h3 _v-7e5a38b9="">年会</h3> <h5 _v-7e5a38b9="">属于 elemer 的年度盛宴</h5>
        <img class="content-bigimage" src="/dist/static/about-2-4.ee5f13c.jpg" alt="" _v-7e5a38b9="">
    </div>
</template>

<script>

export default {
    data() {
        return {
        };
    },
    ready() {

    }
};
</script>

<style scoped>
    .wrapper{
        height: 100%;
        overflow: auto;
    }

    .container{
        padding-top: 60px;
        position: relative;
    }

    .tab{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        background-color: #eee;
        position: absolute;
        height: 40px;
        width: 100%;
        top: 185px;
    }

    .tab span{
        font-size: 16px;
        color: #333;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        line-height: 40px;
    }

    .tab .active,.tab .v-link-active{
        color: #26a2ff;
        border-bottom: 2px solid #26a2ff;
    }

    footer.v-footer{
        background-color: #fff;
    }

    .jumbotron{
        height: 125px;
        background-size: cover;
    }

    .jumbotron p{
        text-align: center;
        font-size: 24px;
        color: hsla(0,0%,100%,.9);
        line-height: 125px;
    }

    .content{
        margin-top: 40px;
        padding: 0 15px;
        font-size: 0;
        overflow: hidden;
    }

    .content h3{
        margin-top: 35px;
        font-size: 18px;
        color: #333;
        text-align: center;
        line-height: 1
    }

    .content h5{
        margin-top: 10px;
        font-size: 12px;
        font-weight: 400;
        color: #999;
        text-align: center;
        line-height: 1
    }

    .content p{
        margin-top: 15px;
        font-size: 12px;
        line-height: 20px;
        color: #999
    }

    .content p.content-subtitle{
        line-height: 1;
        font-size: 14px;
        color: #333
    }

    .content p.content-note{
        text-align: center;
        margin-top: 15px;
        line-height: 1
    }

    .content-note span[_v-7e5a38b9]:first-child {
        margin-right: 12%
    }

    .content-bigimage{
        margin-top: 20px;
        width: 100%
    }

    .content-smallimage{
        margin-top: 20px;
        width: 88px
    }

    .content-avatar{
        margin-top: 35px;
        border-radius: 50%;
        height: 130px;
        width: 130px;
        text-align: center
    }

    .content-develop{
        list-style: none;
        margin: 35px 0 20px 50px;
        position: relative
    }

    .content-develop[_v-7e5a38b9]:after {
        content: '';
        height: 0;
        width: 0;
        border: 5px solid transparent;
        border-top-color: #26a2ff;
        position: absolute;
        bottom: -8px;
        left: -5px
    }

    .content-year{
        font-size: 12px;
        color: #999;
        position: relative;
        padding: 20px 0 20px 21px;
        border-left: 1px solid #26a2ff
    }

    .content-year>span{
        font-size: 14px;
        position: absolute;
        top: -7px;
        left: -50px
    }

    .content-year[_v-7e5a38b9]:before {
        content: '';
        height: 9px;
        width: 9px;
        position: absolute;
        top: -4px;
        left: -5px;
        background-color: #26a2ff;
        border-radius: 50%
    }

    .content-year ul{
        list-style: none
    }

    .content-year li{
        line-height: 1.4;
        margin-bottom: 8px
    }

    .content-year li[_v-7e5a38b9]:last-child {
        margin-bottom: 0
    }

    .content-event{
        position: relative
    }

    .content-event:before {
        content: '';
        height: 5px;
        width: 5px;
        position: absolute;
        top: 5px;
        left: -24px;
        background-color: #26a2ff;
        border-radius: 50%
    }

    .content-month{
        position: absolute;
        left: -50px
    }

    .content-sofish{
        position: relative
    }

    .content-aside{
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(60%);
        transform: translateX(60%);
        bottom: 0;
        width: 40px;
        height: 40px
    }
</style>
