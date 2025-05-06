<script setup>
import { ref } from 'vue';
import abstract from '../mds/abstract.mdx'; 


const imageGallery = ref([
  {
    id: 1, 
    src: './logo.png', 
    caption: '这是第一张图片的描述文字。它可以稍微长一点，解释图片内容。'
  },
  {
    id: 2,
    src: './logo.png',
    caption: '第二张图片的说明，突出重点信息。'
  },
  {
    id: 3,
    src: './logo.png', 
    caption: '这是第三张图片，一个简短的标题。'
  }
]);

</script>

<template>
  <div>
    <!-- 第一部分：摘要 -->
    <el-divider />
    <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
            <!-- 渲染导入的 abstract 组件 -->
            <abstract />
        </el-col>
    </el-row>

    <!-- 第二部分：图片展示 -->
    <el-divider>
      <!-- 可选：为分隔线添加标题 -->
      <span class="divider-text">图片展示</span>
    </el-divider>

    <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
            <!-- 循环遍历图片数据 -->
            <div v-for="image in imageGallery" :key="image.id" class="image-item">
              <!-- 使用 el-card 包裹，提供阴影和边框效果 -->
              <el-card shadow="hover" class="image-card">
                 <!-- 显示图片 -->
                 <img :src="image.src" :alt="image.caption" class="gallery-image"/>
                 <!-- 图片下方的文字说明容器 -->
                 <div class="caption-container">
                   <p class="caption-text">{{ image.caption }}</p>
                 </div>
              </el-card>
            </div>
        </el-col>
    </el-row>

  </div>
</template>

<style scoped>
.image-item {
  margin-bottom: 24px; /* 图片卡片之间的垂直间距 */
  text-align: center; /* 使卡片内容居中 */
}

.image-card {
  /* 可以给卡片本身添加一些样式，如果需要的话 */
  border-radius: 8px; /* 轻微的圆角 */
}

.gallery-image {
  max-width: 100%; /* 确保图片适应卡片宽度 */
  height: auto;    /* 保持图片的宽高比 */
  display: block;  /* 移除图片下方的额外空白 */
  margin: 0 auto 12px auto; /* 水平居中图片，并与下方文字保持间距 */
  border-radius: 4px; /* 给图片本身也加一点圆角 */
  background-color: #f5f7fa; 
}

.caption-container {
  padding: 0 10px; 
}

.caption-text {
  font-size: 14px;
  color: #606266;     
  line-height: 1.5;  
  margin: 0;        
  text-align: center; 
}

.divider-text {
  font-size: 1.1em;
  color: #909399; /* Element Plus 的提示性文字颜色 */
  font-weight: 500;
}

/* 如果需要调整 el-card 的内边距 */
:deep(.el-card__body) {
    padding: 15px; /* 根据需要调整卡片内部的 padding */
}
</style>
