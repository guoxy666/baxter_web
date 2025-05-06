<script>
    export default {
        data() {
            return {
                // 单臂相关状态
                selectedSingle: '',
                singleOriginalImage: '',
                singlePartsImage: '',
                singleOriginalLoading: true,
                singlePartsLoading: true,

                // 双臂相关状态
                selectedDual: '',
                dualOriginalImage: '',
                dualPartsImage: '',
                dualOriginalLoading: true,
                dualPartsLoading: true,

                // 配置项
                imageBasePath: './image_comparison/',
                partsSuffix: '_parts',
                singleArmOptions: [
                    'knife',
                    'screwdriver',
                    'pliers',
                    'pan',
                    'mug',
                    'kettle'
                ],
                dualArmOptions: [
                    'basin',
                    'keyboard',
                    'pot',
                    'laptop'
                ]
            }
        },
        mounted() {
            // 初始化默认选择
            if (this.singleArmOptions.length > 0) {
                this.selectedSingle = this.singleArmOptions[0]
                this.handleSingleChange(this.selectedSingle)
            }
            if (this.dualArmOptions.length > 0) {
                this.selectedDual = this.dualArmOptions[0]
                this.handleDualChange(this.selectedDual)
            }
        },
        methods: {
            // 单臂选择变化处理
            handleSingleChange(value) {
                this.loadImage(value, 'single', 'Original')
                this.loadImage(value, 'single', 'Parts')
            },

            // 双臂选择变化处理
            handleDualChange(value) {
                this.loadImage(value, 'dual', 'Original')
                this.loadImage(value, 'dual', 'Parts')
            },

            // 通用图片加载方法
            loadImage(value, armType, imageType) {
                const statePrefix = armType === 'single' ? 'single' : 'dual'
                const loadingState = `${statePrefix}${imageType}Loading`
                const imageState = `${statePrefix}${imageType}Image`

                // 更新加载状态
                this[loadingState] = true

                // 构建路径
                const suffix = imageType === 'Parts' ? this.partsSuffix : ''
                const imagePath = `${this.imageBasePath}${value}${suffix}.png`

                // 创建图片对象
                const img = new Image()
                img.src = imagePath

                img.onload = () => {
                    this[imageState] = imagePath
                    this[loadingState] = false
                }

                img.onerror = () => {
                    console.error(`Failed to load ${armType} ${imageType} image:`, imagePath)
                    this[imageState] = ''
                    this[loadingState] = false
                }
            }
        }
    }
</script>

<template>
    <div>
        <!-- 单臂部分 -->
        <el-divider />
        <el-row justify="center">
            <h1 class="section-title">Single-arm Items</h1>
        </el-row>

        <el-row justify="center" class="select-row">
            <el-select v-model="selectedSingle"
                       @change="handleSingleChange"
                       placeholder="Select Single-arm Item"
                       size="large">
                <el-option v-for="item in singleArmOptions"
                           :key="'single-'+item"
                           :label="item"
                           :value="item" />
            </el-select>
        </el-row>

        <el-row justify="center" :gutter="20">
            <!-- 单臂原图 -->
            <el-col :span="10">
                <div class="image-container">
                    <h3>Original</h3>
                    <el-skeleton :loading="singleOriginalLoading" animated>
                        <template #default>
                            <el-image v-if="singleOriginalImage"
                                      :src="singleOriginalImage"
                                      fit="contain"
                                      class="image-box" />
                            <div v-else class="error-placeholder">
                                Image not found
                            </div>
                        </template>
                    </el-skeleton>
                </div>
            </el-col>

            <!-- 单臂部件图 -->
            <el-col :span="10">
                <div class="image-container">
                    <h3>Parts</h3>
                    <el-skeleton :loading="singlePartsLoading" animated>
                        <template #default>
                            <el-image v-if="singlePartsImage"
                                      :src="singlePartsImage"
                                      fit="contain"
                                      class="image-box" />
                            <div v-else class="error-placeholder">
                                Parts not found
                            </div>
                        </template>
                    </el-skeleton>
                </div>
            </el-col>
        </el-row>

        <!-- 双臂部分 -->
        <el-divider />
        <el-row justify="center">
            <h1 class="section-title">Dual-arm Items</h1>
        </el-row>

        <el-row justify="center" class="select-row">
            <el-select v-model="selectedDual"
                       @change="handleDualChange"
                       placeholder="Select Dual-arm Item"
                       size="large">
                <el-option v-for="item in dualArmOptions"
                           :key="'dual-'+item"
                           :label="item"
                           :value="item" />
            </el-select>
        </el-row>

        <el-row justify="center" :gutter="20">
            <!-- 双臂原图 -->
            <el-col :span="10">
                <div class="image-container">
                    <h3>Original</h3>
                    <el-skeleton :loading="dualOriginalLoading" animated>
                        <template #default>
                            <el-image v-if="dualOriginalImage"
                                      :src="dualOriginalImage"
                                      fit="contain"
                                      class="image-box" />
                            <div v-else class="error-placeholder">
                                Image not found
                            </div>
                        </template>
                    </el-skeleton>
                </div>
            </el-col>

            <!-- 双臂部件图 -->
            <el-col :span="10">
                <div class="image-container">
                    <h3>Parts</h3>
                    <el-skeleton :loading="dualPartsLoading" animated>
                        <template #default>
                            <el-image v-if="dualPartsImage"
                                      :src="dualPartsImage"
                                      fit="contain"
                                      class="image-box" />
                            <div v-else class="error-placeholder">
                                Parts not found
                            </div>
                        </template>
                    </el-skeleton>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    .section-title {
        color: #2c3e50;
        margin: 20px 0;
    }

    .select-row {
        margin: 20px 0;
    }

    .image-container {
        padding: 20px;
        border: 1px solid #ebeef5;
        border-radius: 4px;
        margin: 10px;
        background: #fff;
    }

    .image-box {
        width: 100%;
        height: 300px;
        background: #f5f7fa;
    }

    .error-placeholder {
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #909399;
        background: #f5f7fa;
        border: 1px dashed #dcdfe6;
    }

    .el-divider {
        margin: 40px 0;
    }
</style>
