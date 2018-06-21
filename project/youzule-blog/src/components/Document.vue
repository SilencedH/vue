<template>
  <div class="body">
    <el-card>
      <div slot="header" style="text-align: center;">
        <br/>
        <span style="font-size: 20px;"><b>{{document.title}}</b></span>
        <br/>
        <br/>
        <el-tag type="success" size="mini">{{document.type}}</el-tag>&nbsp;
        <span>{{document.author}}</span>&nbsp;&nbsp;&nbsp;
        <i class="el-icon-document">&nbsp;{{document.subjectName}}</i> &nbsp;&nbsp;&nbsp;
        <i class="el-icon-date">&nbsp;{{document.createTime}}</i> &nbsp;&nbsp;&nbsp;
        <i class="el-icon-view">&nbsp;{{document.views}}</i>
        <br/>
        <br/>
      </div>
      <div v-html="document.contentHtml">
      </div>
    </el-card>
    <el-card class="comment">
      <div slot="header" class="comment-header">
        <h3 class="comment-h3">评论</h3>
        <el-form class="comment-form" inline ref="comment" :model="comment" :rules="rule" label-width="80px">
          <el-form-item label="称呼" prop="name">
            <el-input size="mini" v-model="comment.name"></el-input>
          </el-form-item>
          <br/>
          <br/>
          <el-form-item label="邮箱" prop="email">
            <el-input type="email" size="mini" v-model="comment.email"></el-input>
          </el-form-item>
          <br/>
          <br/>
          <el-form-item label="评论" prop="content" >
            <el-input type="textarea" v-model="comment.content" style="width: 300px;"></el-input>
          </el-form-item>
          <br/>
          <br/>
          <el-button size="mini" class="comment-button" @click="insertComment">提交</el-button>
          <el-button size="mini" @click="resertForm">重置</el-button>
        </el-form>
      </div>
      <hr>
      <h3 class="comment-h3">历史评论</h3>
      <el-card class="comment-body" v-for="item in comments" :key="item.code">
        {{item.createTime}}&nbsp;&nbsp;&nbsp; {{item.name}} ：
        <br/>{{item.content}}
      </el-card>
    </el-card>
  </div>
</template>
<script type="text/javascript">
import api from "@/api/api";
import utils from "@/common/utils"
export default {
  name: "Document",
  data() {
    return {
      document: {
        code: 0,
        title: "",
        author: "",
        type: "",
        subjectName: "",
        createTime: "",
        views: 0,
        contentHtml: ""
      },
      comments: [],
      comment: {
        name: "",
        email: "",
        content: ""
      },
      rule: {
        content: [
          { required: true, message: "请输入评论内容", trigger: "validate" }
        ],
        email: [
          { type: "email", message: "格式不是email", trigger: "validate" }
        ]
      }
    }
  },
  methods: {
    getDocumentByCode(code) {
      api.getDocument(code).then((data) => {
        this.document = data;
      });
    },
    getDocumentComments(documentCode) {
      this.comments = [];
      //封装请求参数
      let params = {
        documentCode: documentCode
      };
      api.getDocumentComments(params).then((data) => {
        this.comments = data;
      });
    },
    /*提交评论*/
    insertComment() {
      this.$refs["comment"].validate((valid) => {
        if (!valid) {
          return;
        } else {
          let params = {
            documentCode: this.document.code,
            name: this.comment.name,
            email: this.comment.email,
            content: this.comment.content,
            createTime: utils.formatTime(new Date())
          };
          api.insertComment(params).then((data) => {
            this.$message({
              message: "评论成功",
              type: "success"
            });
            this.$refs.comment.resetFields();
            this.getDocumentComments(this.document.code);
          });
        }
      });


    },
    resertForm() {
      this.$refs['comment'].resetFields();
    }
  },
  mounted() {
    this.getDocumentByCode(this.$route.params.code);
    this.getDocumentComments(this.$route.params.code);
  }
}

</script>
<style type="text/css">
.comment {
  border: 0px;
}

.comment .el-card__header {
  padding: 0px;
  border: 0px;
  text-align: center;
}

.comment .el-card__body:nth-child(2) {
  margin: 0px;
  padding: 0px;
}

.comment-body .el-card__body {
  min-height: 80px;
  margin-left: 40px;
  margin-right: 40px;
  line-height: 1.8em;
}

.comment-form {
  margin-bottom: 20px;
  margin-left: 60px;
  text-align: left;
}

.comment-form .el-form-item {
  margin-bottom: 8px;
}

.comment-button {
  margin-left: 60px;
}

.comment-h3 {
  text-align: left;
  margin-left: 20px;
}

</style>
