<script>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts'; // Import BarChart
import {
  TitleComponent,
  TooltipComponent,
  GridComponent, // Import GridComponent for layout control
  // LegendComponent, // Legend might not be needed for simple bars
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

use([
  CanvasRenderer,
  BarChart, // Use BarChart
  TitleComponent,
  TooltipComponent,
  GridComponent, // Use GridComponent
  // LegendComponent,
]);

// Define consistent colors for methods
const colorPalette = ['#5470C6', '#91CC75', '#EE6666']; // Blue: GroundedSAM+, Green: ThinkGrasp, Red: OUR

export default {
  components: {
    VChart,
  },
  setup() {
    provide(THEME_KEY, 'light');
  },
  data() {
    // Helper function to create bar chart options
    const createBarOption = (title, categoryData, seriesName, seriesDataWithColors) => ({
      title: {
        text: title,
        left: 'center',
        textStyle: {
          fontSize: 16,
        },
      },
      tooltip: {
        trigger: 'axis', // Trigger tooltip on axis hover
        axisPointer: {
          type: 'shadow', // Use shadow pointer
        },
        formatter: '{b}: {c}', // Format: Category Name: Value
      },
      grid: { // Control chart padding
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true, // Prevent labels from being cut off
      },
      xAxis: { // Value axis (horizontal bars)
        type: 'value',
        max: 1.0, // Set max value to 1.0 for consistency (assuming scores are <= 1)
        boundaryGap: [0, 0.01], // Small gap at the end
      },
      yAxis: { // Category axis (horizontal bars)
        type: 'category',
        data: categoryData, // Method names
        axisLabel: {
            interval: 0, // Show all labels
            rotate: 0 // Keep labels horizontal
        }
      },
      series: [
        {
          name: seriesName, // e.g., 'GSR Score'
          type: 'bar',
          data: seriesDataWithColors, // Array of { value: ..., itemStyle: { color: ... } }
          label: { // Show labels on bars
            show: true,
            position: 'right', // Position to the right of the bar
            formatter: '{c}',    // Display the value
            valueAnimation: true // Optional animation
          },
          barWidth: '60%' // Adjust bar width as needed
        },
      ],
    });

    return {
      // Option for Single-Arm GSR
      optionSingleGSR: createBarOption(
        'Single-Arm GSR',
        ['GroundedSAM+GraspNet', 'ThinkGrasp', 'OUR'], // Categories (matches data order)
        'GSR Score', // Series name for tooltip
        [ // Data with specific colors
          { value: 0.538, itemStyle: { color: colorPalette[0] } },
          { value: 0.705, itemStyle: { color: colorPalette[1] } },
          { value: 0.876, itemStyle: { color: colorPalette[2] } },
        ]
      ),

      // Option for Single-Arm CFR
      optionSingleCFR: createBarOption(
        'Single-Arm CFR',
        ['GroundedSAM+GraspNet', 'ThinkGrasp', 'OUR'],
        'CFR Score',
        [
          { value: 0.443, itemStyle: { color: colorPalette[0] } },
          { value: 0.667, itemStyle: { color: colorPalette[1] } },
          { value: 0.900, itemStyle: { color: colorPalette[2] } }, // 0.9 becomes 0.900
        ]
      ),

      // Option for Dual-Arm GSR
      optionDualGSR: createBarOption(
        'Dual-Arm GSR',
        ['GroundedSAM+CGDF', 'OUR'], // Categories for dual-arm
        'GSR Score',
        [
          { value: 0.475, itemStyle: { color: colorPalette[0] } }, // Use first color
          { value: 0.767, itemStyle: { color: colorPalette[2] } }, // Use third color (OUR)
        ]
      ),

      // Option for Dual-Arm CFR
      optionDualCFR: createBarOption(
        'Dual-Arm CFR',
        ['GroundedSAM+CGDF', 'OUR'],
        'CFR Score',
        [
          { value: 0.267, itemStyle: { color: colorPalette[0] } },
          { value: 0.850, itemStyle: { color: colorPalette[2] } },
        ]
      ),
    };
  },
};
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
      <h1 class="section-title">Quantitative Results</h1>
    </el-row>

    <!-- echarts 图表 - 2x2 Grid -->
    <el-row justify="center" :gutter="20"> <!-- Add gutter for spacing -->
      <!-- Row 1 -->
      <el-col :xs="24" :sm="12" :md="11" :lg="10" :xl="9"> <!-- Adjust column spans for bar charts -->
        <v-chart class="chart" :option="optionSingleGSR" autoresize />
      </el-col>
      <el-col :xs="24" :sm="12" :md="11" :lg="10" :xl="9">
        <v-chart class="chart" :option="optionSingleCFR" autoresize />
      </el-col>
    </el-row>
     <el-row justify="center" :gutter="20"> <!-- Add gutter for spacing -->
      <!-- Row 2 -->
       <el-col :xs="24" :sm="12" :md="11" :lg="10" :xl="9">
        <v-chart class="chart" :option="optionDualGSR" autoresize />
      </el-col>
       <el-col :xs="24" :sm="12" :md="11" :lg="10" :xl="9">
        <v-chart class="chart" :option="optionDualCFR" autoresize />
      </el-col>
    </el-row>
  </div>

</template>

<style scoped>
/* Main title style (if not defined globally) */
.section-title {
  font-size: 2em; /* Example size */
  font-weight: bold;
  margin-bottom: 20px; /* Add space below title */
   color: #303133; /* Example color */
}

/* Chart style */
.chart {
  /* Adjust height - bar charts might need more vertical space */
  height: 350px;
  margin-top: 10px; /* Space above charts */
  margin-bottom: 20px; /* Space below charts */
}

/* Ensure rows center their content */
.el-row {
  width: 100%;
}
</style>
