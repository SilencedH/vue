<template>
  <el-container style="height:100%;padding-bottom: 4px;">
    <!-- 头部 -->
    <el-header style="height: 80px;padding: 0px;margin:0px;position: fixed;z-index: 999;width:100%;left:0px;top: 0px;">
      <el-row style="height:100%;">
        <!-- 头部左边 -->
        <el-col :span="5" :offset="1" style="height:100%;">
        </el-col>
        <!-- 头部导航 -->
        <el-col :span="12" :offset="1" style="height:100%;" class="my-header">
          <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" style="height:68px;padding-top:12px;" active-text-color="">
            <el-menu-item v-for="item in menus" :key="item.code" :index="item.code">{{item.name}}</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <!-- main部 -->
    <el-row style="height:100%;margin-top: 80px;border-top: solid 1px #ebeef5;">
      <!-- 左边搜索、菜单、标签 -->
      <el-col :span="5" :offset="1" style="height:100%;text-align:center;padding-bottom: 80px;">
        <el-scrollbar class="page-component__scroll" style="">
          <el-card style="border-top:0px;">
            <!-- 搜索 -->
            <el-input prefix-icon="el-icon-search" size="mini" v-model="keyWords" placeholder="输入关键字" style="width:60%;"></el-input>
            <el-button style="display: inline;" size="mini" @click="getDocs()">搜索</el-button>
            <br/>
            <!-- 文档列表 -->
            <div class="document-list" style="">
              <ul>
                <li v-for="item in docs">
                  <router-link :to="'/document/' + item.code">{{item.title}}</router-link>
                </li>
              </ul>
            </div>
            <el-pagination small layout="prev, pager, next,total" :total="total" :page-size="pageSize" :current-page="currentPage" :page-count="pageCount" @current-change="handleCurrentChange">
            </el-pagination>
          </el-card>
          <br/>
          <!-- 标签 -->
          <el-card>
            <div slot="header">
              <span style="font-size: 13px;">标签</span>
            </div>
            <div class="tag">
              <el-button size="mini" v-for="item in tags" :key="item.code" @click="docsByTag(item.code)">
                {{item.name}}
              </el-button>
            </div>
          </el-card>
        </el-scrollbar>
      </el-col>
      <!-- 文档内容区 -->
      <el-col :span="13" style="height:100%;padding-bottom: 80px;border-right: solid 1px #ebeef5;" class="document">
        <el-scrollbar class="page-component__scroll">
          <transition>
            <router-view></router-view>
          </transition>
        </el-scrollbar>
      </el-col>
      <!-- 右边友情链接区 -->
      <el-col :span="4" style="background-color:;height:100%;">
      </el-col>
    </el-row>
  </el-container>
</template>
<script type="text/ecmascript-6">
//import {api} from "./config.js"
import api from "../api/api";
export default {
  name: 'Index',
  data() {
    return {
      activeIndex: "1",
      /*菜单值，查询接口返回*/
      menus: [],
      tags: [],
      /*文档code*/
      docs: [],
      /*分页相关*/
      total: 0,
      pageSize: 3,
      currentPage: 1,
      pageCount: 0,
      //关键字
      keyWords: ""
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      if (keyPath == "1") {
        window.location.href="/";
      } else {
        this.getTagsByMenuCode(keyPath);
      }
    },

    /*获取菜单*/
    getMenus() {
      api.menus().then((res) => {
        let { code, message, data } = res.data;
        if (code == "0") {
          this.menus = data;
          window.menus= this.menus;
        } else {
          this.$message({
            message: "有点问题!",
            type: "warning"
          });
        }
      }).catch((error) => {
        this.$message({
          message: "出错啦!",
          type: "error"
        });
      });
    },
    /*根据关键字获取文档,若为空表示所有文档*/
    getDocs() {
      //封装请求参数
      let params = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        keyWords: this.keyWords
      };
      api.docs(params).then((res) => {
        let { code, message, data } = res.data;
        if (code == "0") {
          this.docs = data.list;
          this.total = data.total;
          this.pageCount = data.pageCount;
        } else {
          this.$message({
            message: "有点问题!",
            type: "warning"
          });
        }
      }).catch((error) => {
        this.$message({
          message: "出错啦!",
          type: "error"
        });
      })
    },

    /*获取所有tags*/
    getTags() {
      api.tags().then((res) => {
        let { code, message, data } = res.data;
        if (code == "0") {
          this.tags = data;
        } else {
          this.$message({
            message: "有点问题!",
            type: "warning"
          });
        }

      }).catch((error) => {
        this.$message({
          message: "出错啦!",
          type: "error"
        });
      })
    },

    /*根据menuCode获取tags*/
    getTagsByMenuCode(menuCode){
      //封装请求参数
      let params = {
        menuCode:Number(menuCode)
      };
      api.tagsByMenuCode(params).then((response)=>{
        let {code,message,data} = response.data;
        if(code == "0"){
          this.tags = [];
          this.tags =data;
        }else {
          this.$message({
            message: "有点问题!",
            type: "warning"
          });
        }
      }).catch((error) => {
          this.$message({
          message: "出错啦!",
          type: "error"
        });
      })
    },

    /*根据tag获取docList*/
    docsByTag(code){
      console.log(code);
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getDocs();
    }

  },
  mounted() {
    this.getMenus();
    this.getTags();
    this.getDocs();
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-header {
  text-align: center;
}






/*导航菜单*/

.my-header .el-menu--horizontal>.el-menu-item {
  height: 52px;
}


.tag button {
  float: left;
  margin-bottom: 10px;
  margin-left: 10px;
}


/*el-card*/

.my-card .el-card__body {
  padding-top: 0px;
}

.el-card__body {
  padding-left: 0px !important;
}

.el-card__header {
  height: 35px;
  padding-bottom: 4px !important;
  padding-top: 8px !important;
}

.document-list {
  width: 100%;
  text-align: center;
  font-size: 14px;
}

.document-list ul {
  padding-top: 0px;
}

.document-list ul li {
  list-style-type: none;
  padding: 5px 5px;
  font-size: 13px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}


a {
  text-decoration: none;
  color: #908787;
}

a:hover {
  color: #409EFF;
}


.el-pagination span:not([class*=suffix]),
.el-pagination button {
  border-color: transparent;
  font-size: 12px;
  line-height: 22px;
  height: 22px;
  min-width: 22px;
}






/*滚动条样式*/

.page-component__scroll {
  height: 100%;
}

.page-component__scroll .el-scrollbar__wrap {
  overflow-x: hidden;
  overflow-y: auto;
}

.el-scrollbar__view {
  height: 100%;
}

</style>
