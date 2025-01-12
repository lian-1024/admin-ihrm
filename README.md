# Admin IHRM (Intelligent Human Resource Management)

一个现代化的人力资源管理系统前端项目，基于Vue 3和TypeScript构建(该项目是基于黑马程序员IHRM项目(Vue2版本)开发的Vue3版本)。

## 目录

- [技术栈](#技术栈)
- [项目特性](#项目特性)
- [快速开始](#快速开始)
  - [环境要求](#环境要求)
  - [安装](#安装)
  - [开发](#开发)
  - [构建](#构建)
  - [测试](#测试)
  - [代码质量](#代码质量)
- [项目结构](#项目结构)
- [主要功能模块](#主要功能模块)
- [开发规范](#开发规范)
- [浏览器支持](#浏览器支持)
- [许可证](#许可证)

## 技术栈

- **核心框架：** Vue 3
- **开发语言：** TypeScript
- **构建工具：** Vite
- **UI框架：** Ant Design Vue 4.x
- **状态管理：** Pinia
- **路由管理：** Vue Router
- **国际化：** Vue I18n
- **HTTP客户端：** Axios
- **工具库：** 
  - lodash-es
  - dayjs
  - echarts (图表)
  - file-saver
  - countup.js
  - vue-cropper (图片裁剪)

## 项目特性

- 🚀 基于Vite的快速开发和构建
- 💪 TypeScript支持
- 🎨 Ant Design Vue组件库
- 🌍 国际化支持
- 📊 ECharts图表集成
- 🗺️ 地图功能支持
- 💾 Pinia状态持久化
- 🌓 暗黑模式支持

## 快速开始

### 环境要求

- Node.js (推荐使用最新LTS版本)
- pnpm包管理器

### 安装

```bash
# 安装依赖
pnpm install
```

### 配置环境变量

```bash
# 复制.env.example文件为.env
cp env/.env.example env/.env
# 以及env.development 和 env.production 文件
cp env/env.development.example env/env.development
cp env/env.production.example env/env.production
# 修改env.development 和 env.production 文件中的变量
```

### 开发

```bash
# 启动开发服务器
pnpm dev
```

### 构建

```bash
# 构建生产版本
pnpm build
```

### 测试

```bash
# 运行单元测试
pnpm test:unit
```

### 代码质量

```bash
# 运行代码检查
pnpm lint

# 格式化代码
pnpm format
```

## 项目结构

```
.
├── build/                    # 构建相关配置
├── env/                      # 环境变量配置
├── public/                   # 静态资源
├── src/                      # 源代码
│   ├── assets/              # 资源文件
│   │   └── common/         # 公共资源
│   ├── core/               # 核心功能模块
│   │   ├── layouts/        # 布局组件
│   │   │   ├── components/ # 布局相关组件
│   │   │   └── default.vue # 默认布局
│   │   ├── plugins/        # 插件配置
│   │   │   ├── i18n/      # 国际化配置
│   │   │   ├── echarts/   # 图表配置
│   │   │   └── dayjs.ts   # 日期处理
│   │   ├── router/         # 路由配置
│   │   └── stores/         # 状态管理
│   │       ├── modules/    # 状态模块
│   │       └── plugins/    # 状态插件
│   ├── modules/            # 业务模块
│   │   ├── attendance/     # 考勤管理模块
│   │   │   ├── components/ # 考勤组件
│   │   │   ├── services/  # 考勤服务
│   │   │   └── views/     # 考勤页面
│   │   ├── dashboard/      # 仪表盘模块
│   │   ├── department/     # 部门管理
│   │   ├── employee/       # 员工管理
│   │   ├── error/         # 错误页面
│   │   ├── permission/    # 权限管理
│   │   ├── role/          # 角色管理
│   │   └── user/          # 用户模块
│   └── shared/            # 共享资源
│       ├── components/    # 共享组件
│       │   ├── business/  # 业务组件
│       │   └── base/      # 基础组件
│       ├── composables/   # 组合式函数
│       ├── config/        # 全局配置
│       ├── constants/     # 常量定义
│       ├── services/      # 服务封装
│       ├── styles/        # 全局样式
│       ├── types/         # 类型定义
│       └── utils/         # 工具函数
├── index.html              # HTML 模板
├── tsconfig.json           # TypeScript 配置
├── tsconfig.app.json      # TypeScript 应用配置
├── tsconfig.node.json     # TypeScript Node配置
├── tsconfig.vitest.json   # TypeScript 测试配置
├── vite.config.ts         # Vite 配置
├── vitest.config.ts       # Vitest 测试配置
├── .editorconfig          # 编辑器配置
├── .eslintrc.js          # ESLint 配置
├── .prettierrc           # Prettier 配置
└── package.json          # 项目依赖
```

## 主要功能模块

- 考勤管理
  - 考勤打卡
  - 考勤统计
  - 考勤设置
- 员工管理
  - 员工信息
  - 员工档案
  - 批量通知
- 用户管理
  - 用户信息
  - 权限管理
- 通知系统
  - 站内消息
  - 系统通知
- 多语言支持
  - 中文
  - 英文
- 主题切换
  - 明亮模式
  - 暗黑模式

## 开发规范

- 使用ESLint进行代码检查
- 使用Prettier进行代码格式化
- 遵循TypeScript类型检查
- 使用EditorConfig保持编辑器配置一致

## 浏览器支持

- 现代浏览器
- Chrome
- Firefox
- Safari
- Edge

## 许可证

[MIT License](LICENSE)
