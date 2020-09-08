<template>
    <div>
        <h1>测试</h1>
        <div>
            <!--            <sapn>result:{{res}}</sapn>-->
            <!--            <ul>-->
            <!--                <li v-for="(value, key, index) in book" :key="index">{{key}}:{{value}}</li>-->
            <!--            </ul>-->
            <!--            <el-button @click="add">按钮</el-button>-->
            <!--            <p v-pin:top = '100'>标准五个字1</p>-->
            <!--            <p v-pin:[direction]="100">标准五个字2</p>-->
            <!--            <li-->
            <!--                    v-for="menu in menus" :key="menu.name"-->
            <!--                    @mouseover="menu.show = !menu.show"-->
            <!--                    @mouseout="menu.show = !menu.show"-->
            <!--            >-->
            <!--                <a :href="menu.url">{{menu.name}}</a>-->
            <!--                <ul v-show="menu.show">-->
            <!--                    <li v-for="subMenu in menu.subMenus" :key="subMenu.name">-->
            <!--                        <a :href="subMenu.url">{{subMenu.name}}</a>-->
            <!--                    </li>-->
            <!--                </ul>-->
            <!--            </li>-->
            <div class="lianxi-img" v-img="'../assets/images/v-img-lianxi.png'" alt=""></div>
            <!--            <img src="../assets/images/v-img-lianxi.png" alt="">-->
            <!--            <div style="background-image: url("'../assets/images/v-img-lianxi.png'")"></div>-->
        </div>
    </div>
</template>

<script>
// import Vue from 'vue';
// Vue.directive('pin', {
//    bind: function (el, binding, vnode) {
//         el.style.position = 'fixed';
//         let s = binding.arg || 'left';
//         el.style[s] = binding.value + 'px';
//    }
// });

import Vue from 'vue';

Vue.directive('img', {
    inserted: (el, binding) => {
        let color = Math.floor(Math.random() * 1000000);
        // el.style.backgroundColor = '#' + color;
        console.log('111');
        let img = new Image();
        console.log('222');
        img.src = binding.value;
        console.log(img);
        el.style.backgroundImage = 'url(' + binding.value + ')';
        img.onload = function () {
            console.log('444');
            alert('success');
            el.style.backgroundImage = 'url(' + binding.value + ')';
        };
    }
});

export default {
    data() {
        return {
            // menus: [
            //     {
            //         name: '我的淘宝', url: '#', show: false,
            //         subMenus: [
            //             {name: '已买到的的宝贝', url: '#'},
            //             {name: '已卖到的的宝贝', url: '#'}
            //         ]
            //     },
            //     {
            //         name: '收藏夹', url: '#', show: false,
            //         subMenus: [
            //             {name: '收藏的宝贝', url: '#'},
            //             {name: '收藏的店铺', url: '#'}
            //         ]
            //     }
            // ]
            // direction: 'left'
            // res: 0
            // name: 'ls',
            // age: 18,
            // book: {
            //     title: '标题',
            //     author: '李四',
            //     isbn: '123466'
            // }
        }
    },
    methods: {
        // add() {
        //     console.log('add');
        //     // Vue.set(this.book, 'la', '11111')
        //     this.$set(this.book, 'publishDate', '123456987')
        // }
        // createCar(color, doors) {
        //     return {
        //         color,
        //         doors
        //     }
        // }
        // calculate(op, ...data) {
        //     if (op === '+') {
        //         let result = 0;
        //         for (let i = 1; i < data.length; i++) {
        //             result += data[i];
        //         }
        //         this.res = result;
        //         return result;
        //     } else if (op === '*') {
        //         let result = 1;
        //         for (let i = 0; i < data.length; i++) {
        //             result *= data[i];
        //         }
        //         this.res = result;
        //         return result;
        //     }
        // }
    },
    created() {
        // this.calculate('+', 1,2,3);
        // this.calculate('*', 1,2,3);
    }
}
</script>

<style lang="scss" scoped>
.lianxi-img {
    width: 300px;
    height: 300px;
}
</style>