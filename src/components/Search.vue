<template>
  <div class="v-searchbar">
    <input type="text" v-model="jobsname" v-on:keyup.enter="search(jobsname)" placeholder="输入职位名称">
    <img v-bind:src="image" v-on:click="search(jobsname)" alt="search">
  </div>
</template>

<script>
export default {
    data() {
        return {
            'jobsname': '',
            'image': require('../assets/search-icon.png')
        };
    },
    'methods': {
        'search': function(value) {
            console.log(value);
            this.$route.router.go({
                'name': 'fulltime',
                'replace': true
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-searchbar {
    width: 100%;
    position: absolute;
    z-index: 90;
    top: 60px;
    background-color: #26a2ff;
    border-bottom: 1px solid #0092ff;
    padding: 0 15px 10px;
}

.v-searchbar input {
    width: 100%;
    height: 35px;
    padding: 0 15px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 16px;
}

.v-searchbar img {
    top: 6px;
    right: 30px;
    height: 23px;
    position: absolute;
}

</style>
