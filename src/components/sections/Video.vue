<script setup>
// 可在此处定义数据（如需动态加载视频路径）
</script>

<template>
  <div>
    <el-divider />
    <el-row justify="center">
      <h1 class="section-title">Explainer Videos</h1>
    </el-row>

    <!-- 第一行 -->
    <el-row justify="center" :gutter="20">
      <!-- 视频1 -->
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="video-wrapper">
          <div class="video-player">
            <video controls muted preload playsinline>
              <source src="/video/shipin1.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="video-caption">
              interaction instructions：I want to loosen the soil.
          </div>
        </div>
      </el-col>
      <!-- 视频2 -->
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="video-wrapper">
          <div class="video-player">
            <video controls muted preload playsinline>
              <source src="/video/shipin2.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="video-caption">
              interaction instructions：I want to turn the screws.
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 第二行 -->
    <el-row justify="center" :gutter="20">
      <!-- 视频3 -->
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="video-wrapper">
          <div class="video-player">
            <video controls muted preload playsinline>
              <source src="/video/shipin3.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="video-caption">
              interaction instructions：I want to clamp these wires.
          </div>
        </div>
      </el-col>
      <!-- 视频4 -->
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="video-wrapper">
          <div class="video-player">
            <video controls muted preload playsinline>
              <source src="/video/shipin4.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="video-caption">
              interaction instructions：I'd like to fry an egg.
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 第三行 -->
    <el-row justify="center" :gutter="20">
      <!-- 视频5 -->
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="video-wrapper">
          <div class="video-player">
            <video controls muted preload playsinline>
              <source src="/video/shipin5.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="video-caption">
              interaction instructions：I'd like to get some water.
          </div>
        </div>
      </el-col>
      <!-- 视频6 -->
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="video-wrapper">
          <div class="video-player">
            <video controls muted preload playsinline>
              <source src="/video/shipin6.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="video-caption">
              interaction instructions：I'd like to pour some water.
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 第四行 -->
    <el-row justify="center" :gutter="20">
      <!-- 视频7 -->
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="video-wrapper">
          <div class="video-player">
            <video controls muted preload playsinline>
              <source src="/video/shipin7.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="video-caption">
              interaction instructions：I want to wash my hands.
          </div>
        </div>
      </el-col>
      <!-- 视频8 -->
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="video-wrapper">
          <div class="video-player">
            <video controls muted preload playsinline>
              <source src="/video/shipin8.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="video-caption">
              interaction instructions：I need to type with the input tool.
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 第五行 -->
    <el-row justify="center" :gutter="20">
      <!-- 视频9 -->
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="video-wrapper">
          <div class="video-player">
            <video controls muted preload playsinline>
              <source src="/video/shipin9.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="video-caption">
              interaction instructions：I'd like to boil some pasta.
          </div>
        </div>
      </el-col>
      <!-- 视频10 -->
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="video-wrapper">
          <div class="video-player">
            <video controls muted preload playsinline>
              <source src="/video/shipin10.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="video-caption">
              interaction instructions：I want to research with the digital tool.
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
/* 标题样式 */
.section-title {
  text-align: center;
  margin: 30px 0;
  color: #2c3e50;
  font-size: 28px;
  letter-spacing: 1px;
}

/* 视频总容器 */
.video-wrapper {
  margin: 20px 0;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

/* 悬停效果 */
.video-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

/* 视频播放器容器 (16:9 比例控制) */
.video-player {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 比例 */
}

/* 视频绝对定位填充容器 */
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  outline: none;
}

/* 文字描述样式 */
.video-caption {
  padding: 16px 20px;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  background: white;
  border-top: 1px solid #eee;
}

/* 手机端适配 */
@media (max-width: 768px) {
  .video-wrapper {
    margin: 15px 0;
    border-radius: 8px;
  }
  .video-caption {
    padding: 12px 15px;
    font-size: 13px;
  }
  .section-title {
    font-size: 24px;
    margin: 20px 0;
  }
}
</style>
