<template>
	<div class="addVideo_block">
		<div class="addVideo_box">
			<div class="addVideo_wrapper">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="视频文件">
						<el-upload ref="upload" class="upload-demo" :action="uploadUrl()" :on-preview="handlePreview" :on-remove="handleRemove"
						 :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed" :data="ruleForm" :auto-upload="false">
							<el-button size="small" type="primary" icon="el-icon-plus">点击上传</el-button>
						</el-upload>
					</el-form-item>
					<el-form-item label="视频名称" prop="vName">
						<el-input v-model="ruleForm.vName" maxlength="10" show-word-limit></el-input>
					</el-form-item>
					<el-form-item label="视频评分" prop="vRate">
						<el-input v-model="ruleForm.vRate" maxlength="5" show-word-limit></el-input>
					</el-form-item>
					<el-form-item label="主演" prop="vAct">
						<el-input v-model="ruleForm.vAct" maxlength="10" show-word-limit></el-input>
					</el-form-item>
					<el-form-item label="视频类型" prop="vType">
						<el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
							{{tag}}
						</el-tag>
						<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
						 @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
						</el-input>
						<el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增类型</el-button>
					</el-form-item>
					<el-form-item label="上映时间" required>
						<el-col :span="11">
							<el-form-item prop="vDate">
								<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.vDate" style="width: 100%; " value-format="yyyy-MM-dd" format="yyyy-MM-dd"></el-date-picker>
							</el-form-item>
						</el-col>
					</el-form-item>

					<!-- <el-form-item label="Vip点播" prop="isVip">
						<el-radio-group v-model="ruleForm.isVip">
							<el-radio label="需要Vip"></el-radio>
							<el-radio label="无需Vip"></el-radio>
						</el-radio-group>
					</el-form-item> -->
					<el-form-item label="视频简介" prop="vDesc">
						<el-input type="textarea" v-model="ruleForm.vDesc" :autosize="autosize" maxlength="200" show-word-limit></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				dynamicTags: [],
				inputVisible: false,
				inputValue: '',
				autosize: {
					minRows: 4,
					maxRows: 6
				},
				ruleForm: {
					vName: '',
					vRate: '',
					vAct: '',
					vType: [],
					vDate: '',
					vDesc: '',
					// isVip:'',

				},
				rules: {
					vName: [{
							required: true,
							message: '请输入视频名称',
							trigger: 'blur'
						},
						{
							min: 1,
							max: 10,
							message: '长度在 1 到 10 个字符',
							trigger: 'blur'
						}
					],
					vRate: [{
						required: true,
						message: '请输入视频评分',
						trigger: 'blur'
					}],
					vAct: [{
						required: true,
						message: '请输入主演名称',
						trigger: 'blur'
					}],
					vType: [{
						type: 'array',
						required: true,
						message: '请至少输入一个类型',
						trigger: 'blur'
					}],
					vDate: [{
						type: 'string',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					vDesc: [{
						required: true,
						message: '请填写视频简介',
						trigger: 'blur'
					}],
					// isVip: [{
					// 	required: true,
					// 	message: '请选择是否需要vip',
					// 	trigger: 'change'
					// }],
				},
				reqUrl: 'http://localhost:8080/youqu/admin'
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// var d = new Date(this.ruleForm.vDate)
						// var resDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
						// this.ruleForm.vDate =resDate
						this.$notify({
						          title: '成功',
						          message: '成功上传电影',
						          type: 'success'
						        })
						
						this.$refs.upload.submit()
					} else {
						this.$notify({
						          title: '失败',
						          message: '上传电影失败',
						          type: 'error'
						        })
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
				this.dynamicTags = ''
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
			beforeRemove(file, fileList) {
				return this.$confirm(`确定移除 ${ file.name }？`);
			},
			handleClose(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			},

			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},

			handleInputConfirm() {
				let inputValue = this.inputValue;
				if (inputValue) {
					this.dynamicTags.push(inputValue);
					this.ruleForm.vType.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = '';
			},
			uploadUrl() {
				return this.reqUrl + '/uploadVideo'
			}
		}
	}
</script>

<style>
	.el-form-item__label {
		color: hsla(0, 0%, 100%, .87);
	}

	.addVideo_box {
		width: 80%;
		padding: 10px 0 20px 10px;
		box-shadow: 0 2px 4px rgba(221, 220, 211, 30);

	}

	.addVideo_wrapper {
		width: 500px;
	}

	.el-tag+.el-tag {
		margin-left: 10px;
	}

	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}
</style>
