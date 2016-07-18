<template>
    <div>
        <h3>认识饿了么</h3>
        <h5>改变世界没有想象的那么难</h5>
        <img class="content-bigimage" src="" alt="">
        <p>饿了么是中国专业的到家服务平台，2009年创立于上海。 饿了么成立至今，秉承极致、激情、创新的企业文化，致力推进中国餐饮业的数字化进程，让7亿城镇居民实现“美好生活，触手可得”。 目前，饿了么估值30亿美元，公司员工超过12000人，在线外卖交易平台已覆盖全国300多个城市，用户量超过4000万，加盟餐厅近50万家，日交易额突破1亿元，日订单量突破330万单，平台上超过98%的交易额来自移动端。</p>
        <img class="content-bigimage" src="" alt="" style="margin-top: 30px">
        <p>饿了么正改变着人们的饮食消费习惯乃至生活方式，定义到家消费的未来，努力向广大城镇居民兑现“美好生活，触手可得”的承诺。其在外卖交易平台、即时配送物流平台及供应链平台上的持续发力，正逐渐勾勒出万亿级别的到家服务生态体系。</p>
        <h5><img class="content-smallimage" src="" alt=""></h5>
        <p>在线外卖交易是饿了么的核心业务，主要从事用户和商户的交易撮合，目前已发展为全品类外卖平台，覆盖从早餐到夜宵的所有订餐时段及不同档次的餐饮品类。饿了么自主研发的Napos系统，是国内最早的外卖订单后台管理系统之一，为外卖商家带来极大的便利，推动了餐饮业的互联网化。</p>
        <h5><img class="content-smallimage" src="" alt=""></h5>
        <p>物流是外卖服务的基础。2015年8月，饿了么建立外卖行业首个即时配送物流平台，旨在搭建全国性的即时配送网络。物流平台包括自营配送团队、第三方加盟团队以及社会化众包配送，日处理订单高达100万单，配送人员达50万人，覆盖全国300多个城市。其中，饿了么自配送团队已经在上海、北京、广州等30个一二线城市覆盖有300多个配送站点，并与30000多家品牌餐厅展开合作，专职配送员超过6000人，标准配送人效达每人每天35单，居业界领先地位。</p>
        <h5><img class="content-smallimage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAABdCAYAAADe1kYgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMDkxYzljOC01N2Y3LTRlYzMtYmNiNi0yMjIxZDJjZjMwYTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEFCN0REN0RGN0EzMTFFNThCQUM4NDY0Q0YyMTk5NDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEFCN0REN0NGN0EzMTFFNThCQUM4NDY0Q0YyMTk5NDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNmU0ZDA1ZC04OTBiLTQwMzktYWM5MS02NGJjZjAwZTQxMDgiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDowMjc0OGU0ZC0zZjUwLTExNzktOGQ5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" alt=""></h5>
        <p>“有菜”于2015年6月起试营业，其核心理念是利用互联网技术，在公开透明的平台机制下，直接将产地、一级批发商和餐厅连接，消除传统餐饮供应链中诸多不必要的中间环节，从根本上降低餐厅原材料的采购价格。目前，“有菜”平台已覆盖北京、上海、广州、深圳、杭州、无锡、苏州、福州等8个国内主要城市，日交易额突破800万元。</p>
        <h3>发展大事记</h3>
        <h5>目光永远向前，梦想依然延续</h5>
        <ul class="content-develop">
            <li class="content-year" v-for="year in about.develop">
                <span>{{year.year}}</span>
                <ul>
                    <li v-for="month in year.month">
                        <span class="content-month">{{month.date}}</span>
                        <span class="content-event">{{month.event}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            'about': {
                'develop': [
                    {
                        'year': 2008,
                        'month': [
                            {
                                'date': '',
                                'event': '张旭豪、康嘉等人创立饿了么'
                            }
                        ]
                    },
                    {
                        'year': 2009,
                        'month': [
                            {
                                'date': '4月',
                                'event': '饿了么网站正式上线'
                            },
                            {
                                'date': '9月',
                                'event': '推出餐厅运营一体化解决方案——NAPOS系统'
                            },
                            {
                                'date': '10月',
                                'event': '日均订单突破1000单'
                            }
                        ]
                    },
                    {
                        'year': 2010,
                        'month': [
                            {
                                'date': '6月',
                                'event': '推出超时赔付体系，建立行业新标准'
                            },
                            {
                                'date': '11月',
                                'event': '手机网页订餐平台上线'
                            }
                        ]
                    },
                    {
                        'year': 2011,
                        'month': [
                            {
                                'date': '7月',
                                'event': '成立北京分公司、杭州分公司'
                            },
                            {
                                'date': '12月',
                                'event': '日均订单突破1万单'
                            }
                        ]
                    },
                    {
                        'year': 2012,
                        'month': [
                            {
                                'date': '3月',
                                'event': '成立广州分公司、天津分公司'
                            },
                            {
                                'date': '4月',
                                'event': '饿了么APP上线'
                            },
                            {
                                'date': '9月',
                                'event': '率先推出在线支付功能，以及餐厅超级结算系统'
                            },
                            {
                                'date': '12月',
                                'event': '日交易额突破300万元'
                            }
                        ]
                    },
                    {
                        'year': 2013,
                        'month': [
                            {
                                'date': '3月',
                                'event': '成立苏州分公司，哈尔滨分公司，福州分公司'
                            },
                            {
                                'date': '10月',
                                'event': '成立深圳分公司，南京分公司，长春分公司，厦门分公司'
                            },
                            {
                                'date': '11月',
                                'event': '完成2500万美元C轮融资'
                            }
                        ]
                    },
                    {
                        'year': 2014,
                        'month': [
                            {
                                'date': '5月',
                                'event': '完成8000万美元D轮融资，由大众点评投资，双方达成深度战略合作'
                            },
                            {
                                'date': '9月',
                                'event': '公司员工超过2000人，在线订餐服务覆盖全国近200个城市，用户量1000万，加盟餐厅近18万家，日均订单超过100万单。'
                            }
                        ]
                    },
                    {
                        'year': 2015,
                        'month': [
                            {
                                'date': '1月',
                                'event': '完成3.5亿美元E轮融资'
                            },
                            {
                                'date': '6月',
                                'event': '供应链平台“有菜”上线'
                            },
                            {
                                'date': '8月',
                                'event': '成立即时配送平台；获6.3亿美元融资，创全球外卖行业单笔融资金额最高记录'
                            },
                            {
                                'date': '9月',
                                'event': '外卖交易平台日交易额突破7500万元'
                            },
                            {
                                'date': '11月',
                                'event': '自营配送队伍超过6000人，标准人效达每人每天35单，蜂鸟团队及众包配送员超过50万人，覆盖全国300多个城市；获滴滴战略入股，双方共同搭建两轮电动车加四轮汽车的“2+4”同城配送网络'
                            },
                            {
                                'date': '12月',
                                'event': '外卖交易平台日交易额突破1亿元，日订单量突破330万单，覆盖全国超过300个城市；即时配送平台日配送订单突破100万单；供应链平台日交易额突破800万元'
                            }
                        ]
                    }
                ]
            }
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
