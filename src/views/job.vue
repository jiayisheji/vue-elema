<template>
    <div class="page">
        <jy-header></jy-header>
        <div class="wrapper">
            <div class="jobdetail">
                <div class="jobdetail-title">
                    <h2>{{jobdetail.name}}</h2>
                    <div class="jobdetail-misc">
                        <span>部门: {{jobdetail.headcount}}</span>
                        <span>城市: {{jobdetail.city}}</span>
                        <span>人数: {{jobdetail.headcount}}</span>
                        <span>公司: 饿了么</span>
                        <span>类别: {{jobdetail.headcount}}</span>
                        <span>发布: {{jobdetail.createAt}}</span>
                    </div>
                </div>
                <div class="jobdetail-description">
                    <h3>岗位职能</h3>
                    <ul>
                        <li>负责公司 API Layer 的设计和优化</li>
                        <li>Node 实时消息系统的开发和维护</li>
                        <li>Node 中间件 / SDK 的开发</li>
                        <li>将面临非常大的挑战，海量用户的并发和机器如何水平扩展、海量数据随时推移如何保证搜索速度、对旧版本的兼容和漂亮 API 之间的取舍和权衡。</li>
                    </ul>
                </div>
                <div class="jobdetail-description">
                    <h3>岗位要求</h3>
                    <ul>
                        <li>精于或者热情于接触 JavaScript 及 Node.js</li>
                        <li>熟悉 API 设计或者对海量、实时数据处理有经验</li>
                        <li>敢于并有能力干脏活，并把脏活变漂亮</li>
                        <li>良好的自律、自学能力</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jyHeader from '../components/Header';
/*
    格式化参数
*/
const format = value => {
    const result = {};
    let temp;
    if (value.indexOf('?') > -1 && value.indexOf('&') > -1) {
        temp = value.substring(1).split('&');
        for (const i of temp) {
            if (i.split('=')[0] === 'name') {
                result[i.split('=')[0]] = window.decodeURI(i.split('=')[1]);
            } else if (i.split('=')[0] === 'createAt') {
                result[i.split('=')[0]] = i.split('=')[1].split('T')[0];
            } else {
                result[i.split('=')[0]] = i.split('=')[1];
            }
        }
    } else {
        throw new Error('你的参数有错误');
    }
    console.log(result);
    return result;
};
export default {
    data() {
        return {
            'jobdetail': {}
        };
    },
    'components': {
        jyHeader
    },
    ready() {
        this.jobdetail = format(window.location.search);
    },
    'router': {
        activate() {
            console.log(1);
            this.jobdetail = format(window.location.search);
        },
        deactivate() {
            console.log(2);
            this.jobdetail = null;
        }
    }
};
</script>

<style scoped>
    .wrapper{
        height: 100%;
        overflow: auto;
    }

.jobdetail{
padding: 85px 0;
}

.jobdetail-title{
padding: 0 15px 25px;
border-bottom: 1px solid #eee;
}

.jobdetail-title h1{
font-size: 24px;
font-weight: 400;
color: #333;
}

.jobdetail-misc{
margin-top: 20px;
font-size: 0;
}

.jobdetail-misc span{
display: inline-block;
width: 33.33%;
color: #666;
font-size: 14px;
line-height: 1;
}

.jobdetail-misc.smallscreen span{
width: 50%;
}

.jobdetail-misc.smallscreen span:nth-child(3),
.jobdetail-misc span:first-child {
margin-bottom: 10px;
}

.jobdetail-description{
margin-top: 35px;
padding: 0 15px;
}

.jobdetail-description h3{
font-size: 18px;
font-weight: normal;
color: #333;
padding-left: 10px;
border-left: 3px solid #26a2ff;
line-height: 1;
}

.jobdetail-description ul{
padding-left: 15px;
}

.jobdetail-description li{
font-size: 14px;
color: #999;
margin-top: 12px;
line-height: 1.5;
}

.jobdetail-description li[_v-ad29f490]:first-child {
margin-top: 18px;
}

footer{
position: fixed;
bottom: 0;
height: 50px;
width: 100%;
border-top: 1px solid #ddd;
background-color: #fff;
font-size: 0;
}

footer div{
display: inline-block;
height: 50px;
}

.jobdetail-operation{
width: 40%;
padding-top: 12px;
text-align: center;
}

.jobdetail-operation img{
height: 25px;
margin: 0 10%;
}

.jobdetail-apply{
width: 60%;
background-color: #26a2ff;
vertical-align: top;
text-align: center;
color: #fff;
}

.jobdetail-apply.applied{
background-color: #ccc;
}

.jobdetail-apply p{
line-height: 50px;
font-size: 18px;
}

.dialog-title{
font-size: 24px;
color: #009fff;
line-height: 50px;
}

.dialog-description{
margin-bottom: 35px;
font-size: 0;
}
</style>
