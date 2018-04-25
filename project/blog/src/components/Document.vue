<template>
  <div style="font-size: 14px;">
    <!-- 文档内容 -->
    <el-card style="padding:0px 40px;" class="my-card">
      <h3 align="center">{{doc.title}}</h3>
      <div style="text-align: center;">
        <el-tag type="success" size="mini">{{doc.type}}</el-tag>&nbsp;&nbsp;&nbsp;
        <i class="el-icon-document">&nbsp;{{doc.menuName}}</i> &nbsp;&nbsp;&nbsp;
        <i class="el-icon-date">&nbsp;{{doc.date}}</i> &nbsp;&nbsp;&nbsp;
        <i class="el-icon-view">&nbsp;{{doc.views}}</i></div>
      <!-- 内容 -->
      <div v-html="doc.contentHtml">
      </div>
      <!-- 标签 -->
      <div>
        <el-tag size="mini" style="float: left;margin-bottom: 10px;margin-left: 10px;" v-for="item in tags" :key="item.code">{{item.name}}</el-tag>
      </div>
    </el-card>
    <!-- 评论 -->
    <el-card style="margin-top: 10px;padding:0px 40px;">
      <h5>历史评论</h5>
      <div style="position:relative;" v-for="item in comments" :key="item.code">
        <hr>
        <p>{{item.content}}</p>
        {{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.createTime.substring(0,10)}}
      </div>
      <hr>
      <el-pagination small layout="prev, pager, next" :total="total" :page-size="pageSize" :page-count="pageCount" :current-page="currentPage" @current-change="handleCurrentChange" style="text-align:center;">
      </el-pagination>
    </el-card>
    <!-- 添加评论 -->
    <el-card style="padding:20px 40px;font-size:14px;" class="my-card">
      <h5>我来评论</h5>
      <div style="text-align:center;">
        <el-form inline label-width="80px" size="mini" :model="comment" ref="comment">
          <el-form-item label="姓名:" prop="name">
            <el-input v-model="comment.name"></el-input>
          </el-form-item>
          <br/>
          <el-form-item label="邮箱:" prop="email">
            <el-input v-model="comment.email"></el-input>
          </el-form-item>
          <br/>
          <el-form-item label="评语:" prop="content">
            <el-input type="textarea" style="width:280px;" v-model="comment.content"></el-input>
          </el-form-item>
          <br/>
          <el-button size="mini" @click="insertComment">提交</el-button>
          <el-button size="mini" @click="reset">重置</el-button>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script type="text/javascript">
import api from "../api/api";
export default {
  name: 'Document',
  data() {
    return {
      doc: {
        code: 0,
        title: "",
        author: "",
        type: "",
        menuName: "",
        date: "",
        contentHtml: "",
        content: "",
        views: "0",
        menuCode: ""
      },
      tags: [],
      comments: [],
      comment: {
        name: "",
        email: "",
        content: ""
      },
      //分页相关
      currentPage: 1,
      pageSize: 15,
      pageCount: 0,
      total: 0
    }
  },
  methods: {
    /*根据docCode获取doc*/
    getDocByCode() {
      api.docByDocCode(this.doc.code).then((response) => {
        let { code, message, data } = response.data;
        if (code == "0") {
          this.doc.title = data.document.title;
          this.doc.type = data.document.type;
          this.doc.author = data.document.author;
          this.doc.date = data.document.createTime.substring(0, 10);
          this.doc.views = data.document.views;
          this.tags = [];
          this.tags = data.tags;
          this.doc.menuName = window.menus[Number(data.document.menuCode) - 1].name;
          //获取评论
          this.getComment();
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
    /*获取评论*/
    getComment() {
      //封装请求参数
      let params = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        docCode: this.doc.code
      };
      api.commentByDocCode(params).then((response) => {
        let { code, message, data } = response.data;
        if (code == "0") {
          this.total = data.total;
          this.pageCount = data.pageCount;
          this.comments = [];
          this.comments = data.list;
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
    /*提交评论*/
    insertComment() {
      this.$confirm("确定要评论吗?", "提示", {
        type: "warning"
      }).then(() => {
        //封装请求参数
        let params = {
          name: this.comment.name,
          email: this.comment.email,
          content: this.comment.content,
          docCode: this.doc.code
        };

        api.insertComment(params).then((response) => {
          let { code, message, data } = response.data;
          if (code == "0") {
            this.$message({
              message: "评论成功",
              type: "success"
            });
            this.getComment();
          } else {
            this.$message({
              message: "有点问题! " + message,
              type: "warning"
            });
          }
        }).catch((error) => {
          this.$message({
            message: "出错啦!",
            type: "error"
          });
        });
      })
    },
    /*重置*/
    reset(){
      console.log("reset");
      console.log();
      this.$refs['comment'].resetFields();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getComment();
    }
  },
  mounted() {},

  /*路由第一次加载操作*/
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.doc.code = vm.$route.params.code;
      vm.getDocByCode();
    });

  },
  /*路由更新操作*/
  beforeRouteUpdate(to, from, next) {
    next();
    this.doc.code = this.$route.params.code;
    this.getDocByCode();
  },
  beforeRouteLeave(to, from, next) {
    this.doc.code = 0;
    next();
  }
}

</script>
<style type="text/css" scoped>


</style>
