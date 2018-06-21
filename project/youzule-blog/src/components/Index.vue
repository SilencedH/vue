<template>
  <div class="index">
    <el-container>
      <el-header height="80px">
        <a style="font-size: 16px;" href="/">首页</a>
        <el-dropdown trigger="click" placement="top" :hide-on-click=false @command="command" v-for="item in menus" :key="item.code">
          <span class="el-dropdown-link">{{item.name}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="subItem in item.subMenuRes" :index="subItem.code" :key="subItem.code" :command="subItem.code" :id="'subMenu' + subItem.code">{{subItem.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!-- 主区 -->
      <div class="main">
        <el-row>
          <!-- 左侧 -->
          <el-col :span="5" :offset="1" class="left">
            <el-scrollbar class="scroll">
              <!-- 主题，和公告只能显示一个 -->
              <el-card v-if="subjectsFlag">
                <div slot="header">
                  <span>{{subMenu.name}}</span>
                </div>
                <!-- 列表 -->
                <div class="subject">
                  <ul>
                    <li v-for="item in subMenuSubjects" :key="item.code"><i :class="iconSubject"></i>
                      <router-link to="" @click.native="getSubjectDocuments(item.code);return false;">{{item.name}}({{item.documentCount}})</router-link>
                    </li>
                  </ul>
                </div>
              </el-card>
              <!-- 公告 -->
              <el-card v-if="!subjectsFlag">
                <div slot="header">
                  <span>{{notice.name}}</span>
                </div>
                <!-- 公告内容 -->
                <div class="notice" v-html="notice.content">
                  {{}}
                </div>
              </el-card>
            </el-scrollbar>
          </el-col>
          <!-- 中部 -->
          <el-col :span="12" class="center">
            <!-- 文档概要列表 -->
            <el-scrollbar class="scroll">
              <el-card class="center-card">
                <el-card v-for="item in documents" :key="item.code">
                  <div slot="header">
                    <router-link target="_blank" :to="'/document/' + item.code"><span style="font-size: 17px;"><b>{{item.title}}</b></span></router-link>
                    <br/>
                    <br/>
                    <el-tag type="success" size="mini">{{item.type}}</el-tag>&nbsp;
                    <span>Sean</span>&nbsp;&nbsp;&nbsp;
                    <i class="el-icon-document">&nbsp;{{item.subjectName}}</i> &nbsp;&nbsp;&nbsp;
                    <i class="el-icon-date">&nbsp;{{item.createTime}}</i> &nbsp;&nbsp;&nbsp;
                    <i class="el-icon-view">&nbsp;{{item.views}}</i>
                  </div>
                  <div class="describe">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.contentDesc}}
                    </p>
                  </div>
                </el-card>
                <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" :page-counte="1">
                </el-pagination>
              </el-card>
            </el-scrollbar>
          </el-col>
          <!-- 右侧 -->
          <el-col :span="5" class="right">
            <el-scrollbar class="scroll">
              <el-card style="text-align: center;">
                <!-- 搜索框 -->
                <el-input prefix-icon="el-icon-search" size="mini" v-model="keyWord" placeholder="输入关键字" style="width:60%;"></el-input>
                <el-button style="display: inline;" size="mini" @click="getKeyWordsDocuments">搜索</el-button>
              </el-card>
              <br/>
              <!-- 关键字 -->
              <!-- <el-card>
                <div slot="header">
                  <span style="text-align: center;">文章排序</span>
                </div>
                <div class="tag">
                  <el-button size="mini" v-for="item in keyWords" :key="item.code" @click="addKeyWord(item.name)">
                    {{item.name}}
                  </el-button>
                </div>
              </el-card> -->
            </el-scrollbar>
          </el-col>
        </el-row>
      </div>
    </el-container>
  </div>
</template>
<script>
import api from '@/api/api';
export default {
  name: 'Index',
  data() {
    return {
      iconSubject: "el-icon-caret-right",
      /*区别是哪种查询文档列表* 1、主题 2、关键字/*/
      searchType: 0,
      /*公告*/
      subjectsFlag: true,
      /*公告*/
      notice: {
        name: "公告",
        content: "欢迎来带<a href='http://www.youzule.net'>youzule.net</a><br/><b>以中有足乐者，不知口体之奉不若人也</b>—宋濂·送东阳马生序<br/>用古人的教诲激励自己<br/>记录成长，分享技术！"
      },
      /*所有一级菜单，包括二级菜单*/
      menus: [],
      /*所有主题*/
      subjects: [],
      /*当前主题*/
      currentSubject: {
        code: 0,
        name: ""
      },
      /*左侧主题列表*/
      subMenuSubjects: [],
      /*主题*/
      subMenu: "",
      /*文档列表*/
      documents: [],
      /*搜索框关键字*/
      keyWord: "",
      /*热门关键字*/
      keyWords: [
        { code: 1, name: "aa" },
        { code: 2, name: "aa" },
        { code: 3, name: "aa" },
        { code: 4, name: "aa" },
        { code: 5, name: "aa" }
      ],
      /*分页相关*/
      currentPage: 1,
      pageSize: 10,
      pageSizes: [5, 10, 15, 20],
      total: 0,
      pageCount: 0
    }
  },
  methods: {
    home() {
      window.location.href = "/";
    },
    /*获取所有菜单和子菜单*/
    getMenus() {
      api.getMenus().then((data) => {
        this.menus = data;
      });
    },
    /*获取所有主题主要信息*/
    getSubjects() {
      api.getSubjects().then((data) => {
        this.subjects = data;
      });
    },
    /*下拉框二级菜单点击事件*/
    command(subMenuCode) {
      this.subjectsFlag = true;
      let a = document.getElementById("subMenu" + subMenuCode);
      this.subMenu = {
        name: a.innerHTML,
        code: subMenuCode
      };
      /*遍历所有主题，匹配二级菜单的主题*/
      this.subMenuSubjects = [];
      this.subjects.forEach((item, index, arr) => {
        if (subMenuCode == item.subMenuCode) {
          this.subMenuSubjects.push(item);
        }
      });
    },
    /*根据主题编号获取文档列表*/
    getSubjectDocuments(subjectCode) {
      this.currentSubject.code = subjectCode;
      this.documents = [];
      /*封装请求参数*/
      let params = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        subjectCode: subjectCode
      };
      api.getSubjectDocuments(params).then((data) => {
        this.documents = data.list;
        this.pageCount = data.pageCount;
        this.total = data.total;
        this.searchType = 1;
      });
    },
    /*根据关键字获取文档列表*/
    getKeyWordsDocuments() {
      this.documents = [];
      let keyWord = this.keyWord;
      if (keyWord == "" || keyWord == null) {
        return false;
      }
      //封装请求参数
      let params = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        keyWord: keyWord
      };
      //请求
      api.getKeyWordsDocuments(params).then((data) => {
        this.documents = data.list;
        this.total = data.total;
        this.pageCount = data.pageCount;
        this.searchType = 2;
      });
    },

    /*获取所有文档列表*/
    getDocuments() {
      this.documents = [];
      let params = {
        pageSize: this.pageSize,
        currentPage: this.currentPage
      };
      api.getDocuments(params).then((data) => {
        this.documents = data.list;
        this.total = data.total;
        this.pageCount = data.pageCount;
      });
    },

    /*更改pageSize*/
    handleSizeChange(val) {
      this.pageSize = val;
      if (this.searchType == 1) {
        this.getSubjectDocuments(this.currentSubject.code);
      } else if (this.searchType == 2) {
        this.getKeyWordsDocuments();
      }
    },
    /*更改currentPage*/
    handleCurrentChange(val) {
      this.currentPage = val;
      if (this.searchType == 1) {
        this.getSubjectDocuments(this.currentSubject.code);
      } else if (this.searchType == 2) {
        this.getKeyWordsDocuments();
      }
    }
  },
  mounted() {
    this.subjectsFlag = false;
    this.getMenus();
    this.getSubjects();
    this.getDocuments();
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  height: 100%;
}

.index .el-container {
  height: 100%;
  padding-bottom: 100px;
}

.index .el-header {
  text-align: center;
  padding-top: 25px;
  font-family: none;
}

.index .el-header .el-dropdown {
  margin-left: 80px;
  font-size: 16px;
}

.index .el-dropdown-link {
  cursor: pointer;
}

.main {
  height: 100%;
}

.subject {
  text-align: left;
  background-color: ;
  margin-top: 0px;
  margin-left: 0px;
  min-height: 160px;
}

.subject li {
  list-style-type: none;
  margin-top: 10px;
}

.index .el-row {
  height: 100%;
}

.left {
  height: 100%;
}

.index .el-card__header {
  text-align: center;
}

.left .el-card__body {
  padding-left: 0px;
}

.center {
  height: 100%;
  background-color: ;
}

.right {
  height: 100%;
  background-color: ;
}

.scroll {
  height: 100%;
}

.index .el-scrollbar__wrap {
  /* overflow: scroll; */
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

.center-card {
  padding-top: 0px;
  padding-bottom: 10px;
}

.center-card .el-card__body {
  padding-top: 0px;
}

.center-card .el-card {
  margin-top: 20px;
  height: 200px;
}

.center-card .el-card__header {
  padding: 12px 20px;
}


/*文档概述*/

.describe {
  margin-top: 0px;
}

.describe p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  line-height: 1.8em;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.notice {
  min-height: 160px;
  margin:10px 30px;
  padding-left:10px;
  line-height: 1.7em;
}

</style>
