<script lang="ts" setup>
import { useTheme } from '@composables/use-theme'
import { convertDistance } from '@utils/convert/distance'
import { BaseMap, MultiCircle, MultiLabel, MultiMarker } from 'tlbs-map-vue'
import { computed, ref } from 'vue'

defineOptions({
  name: 'AttendanceScopedMap',
})

const { isDark } = useTheme()

defineProps<{
  scopedRadius: number
  scopedCenter: { lat: number; lng: number }
}>()
// 范围半径
const scopedRadius = defineModel('scopedRadius', { default: 500 })
const scopedCenter = defineModel('scopedCenter', { default: { lat: 39.91799, lng: 116.397027 } })
const scopedRadiusText = computed(() => convertDistance(scopedRadius.value))

const mapZoom = ref(15)
const handleClickMap = (e: Event) => {
  console.log(e)
}

// 控件
const mapControl = {
  scale: {},
  zoom: {
    position: 'topRight',
  },
}

const mapOptions = {
  mapStyleId: isDark ? 'style2' : 'style1',
}

// circle 样式
const circleStyles = {
  circle: {
    color: 'rgba(41,91,255,0.16)',
    showBorder: true,
    borderColor: 'rgba(41,91,255,1)',
    borderWidth: 2,
  },
}

const circleGeometriesComputed = computed(() => [
  { styleId: 'circle', radius: scopedRadius.value, center: scopedCenter.value },
])

const circleOptions = {
  zIndex: 1,
}

const labelStyles = {
  color: '#333', //颜色属性
  size: 20, //文字大小属性
  offset: { x: 0, y: 0 }, //文字偏移属性单位为像素
  angle: 0, //文字旋转属性
  alignment: 'center', //文字水平对齐属性
  verticalAlignment: 'middle', //文字垂直对齐属性
  backgroundColor: '#ffffff',
  padding: '15px',
}

const labelGeometriesComputed = computed(() => [
  {
    id: 'label', //点图形数据的标志信息
    styleId: 'label', //样式id
    position: scopedCenter.value, //标注点位置
    content: `${scopedRadiusText.value}可打卡`, //标注文本
    properties: {
      //标注点的属性数据
      title: 'label',
    },
  },
])

const computedMarker = computed(() => ({
  geometries: [{ styleId: 'marker', position: scopedCenter.value }],
  styles: {
    marker: {
      width: 20,
      height: 30,
      anchor: { x: 10, y: 30 },
    },
  },
  options: {
    minZoom: 5,
    maxZoom: 15,
  },
}))

const mapRef = ref()

const mapApiKey = computed(() => import.meta.env.IHRM_MAP_API_KEY)

</script>
<template>
  <BaseMap ref="mapRef" :options="mapOptions" class="h-full w-full" :api-key="mapApiKey" :center="scopedCenter"
    :zoom="mapZoom" :control="mapControl" @click="handleClickMap">
    <MultiCircle :geometries="circleGeometriesComputed" :styles="circleStyles" :options="circleOptions" />
    <MultiLabel :styles="labelStyles" :geometries="labelGeometriesComputed" />
    <MultiMarker :geometries="computedMarker.geometries" :styles="computedMarker.styles"
      :options="computedMarker.options" />
  </BaseMap>
</template>
