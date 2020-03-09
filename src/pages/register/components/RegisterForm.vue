<template>
    <div class="register">
        <el-alert
            title="注册成功，即将跳转到登录页面"
            type="success"
            center
            show-icon
            v-show="showSuccessTips">
        </el-alert>
        <el-alert
            title="账号已存在，请重新输入"
            type="warning"
            center
            show-icon
            v-show="showWarningTips">
        </el-alert>
        <el-alert
            title="服务器忙，请稍后"
            type="error"
            center
            show-icon
            v-show="showErrorTips">
        </el-alert>
        <div class="register-form">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model.number="ruleForm.username" ref="username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" ref="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'registerForm',
    data () {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
            if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return {
            ruleForm: {
            pass: '',
            checkPass: '',
            username: ''
            },
            rules: {
            pass: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { validator: validatePass2, trigger: 'blur' }
            ],
            username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
            ],
            },
            showSuccessTips: false,
            showWarningTips: false,
            showErrorTips: false
        }
    },
    methods: {
        submitForm(formName, ) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                const username = this.$refs.username.value,
                    password = this.$refs.password.value;
                
                axios.post ('/register', {
                    username: username,
                    password: password
                })
                .then (this.registerSuccess)
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        registerSuccess (res) {
            let code = res.data.err_code;
            if (code === 0) {
                this.showSuccessTips = true;
                setTimeout (() => {
                    window.location.href = 'http://localhost8080#/login';
                    this.showSuccessTips = false;
                }, 1000)
            } else if (code === 1) {
                this.showWarningTips = true;
                setTimeout (() => {
                    this.showWarningTips = false;
                }, 1000)
            } else if (code === 500) {
                this.showErrorTips = true;
                setTimeout (() => {
                    this.showErrorTips = false;
                }, 1000)
            }
        },
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'

.register-form {
    width: 100%;
    height: 6rem;
    margin-top: 1rem;
    padding: .6rem .6rem .6rem 0;
    background-color: $bodyColor;
    border-radius: .2rem;
}

</style>
