<template>
    <el-container class="full-height">
        <el-header class="flex-center-align">
            <Header />
        </el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from './Header';

export default {
    name: "index",
    components: {
        Header
    }
}
</script>

<style scoped>

</style>