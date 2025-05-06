<script setup>
// 实验图片数据（按需修改路径和描述）
const experimentImages = [
  {
    id: 1,
    src: "./logo.png",
    title: "实验场景1",
    description: "多视角数据采集环境搭建"
  },
  {
    id: 2,
    src: "./logo.png",
    title: "实验场景2",
    description: "机器人抓取动作测试"
  },
  {
    id: 3,
    src: "./logo.png",
    title: "对比实验",
    description: "传统方法与扩散模型生成效果对比"
  },
  {
    id: 4,
    src: "./logo.png",
    title: "结果可视化",
    description: "三维点云重建效果展示"
  },
  {
    id: 5,
    src: "./logo.png",
    title: "硬件配置",
    description: "实验设备及传感器布局"
  },
  {
    id: 6,
    src: "./logo.png",
    title: "数据标注",
    description: "多模态数据标注界面"
  }
];
</script>

<template>
  <div class="experiment-container">
    <!-- 标题 -->
    <el-row justify="center">
      <h1 class="section-title">实验记录与结果</h1>
    </el-row>

    <!-- 图片展示区 -->
    <el-row :gutter="20" justify="center">
      <el-col 
        v-for="image in experimentImages" 
        :key="image.id"
        :xs="24"   <!-- 手机端单列 -->
        :sm="12"    <!-- 平板双列 -->
        :md="8"     <!-- 桌面端三列 -->
        :lg="8"
        :xl="6"     <!-- 大屏四列 -->
      >
        <div class="image-card">
          <!-- 图片容器 -->
          <div class="image-wrapper">
            <img 
              :src="image.src" 
              :alt="image.title"
              loading="lazy"
            />
          </div>
          
          <!-- 文字描述 -->
          <div class="image-info">
            <h3 class="image-title">{{ image.title }}</h3>
            <p class="image-desc">{{ image.description }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
/* 主容器 */
.experiment-container {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

/* 标题样式 */
.section-title {
  text-align: center;
  margin: 40px 0;
  color: #2c3e50;
  font-size: 2.2rem;
  letter-spacing: 1px;
}

/* 图片卡片 */
.image-card {
  margin: 15px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow: hidden;
}

.image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

/* 图片容器 */
.image-wrapper {
  position: relative;
  padding-top: 75%; /* 4:3 比例 */
  background: #f8f9fa;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
}

/* 文字描述 */
.image-info {
  padding: 18px;
}

.image-title {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.image-desc {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
    margin: 30px 0;
  }
  
  .image-card {
    margin: 10px;
  }
  
  .image-info {
    padding: 12px;
  }
}
</style>