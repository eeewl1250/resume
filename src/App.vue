<template>
  <div id="app"
       @wheel="changeMenu"
       @touchstart="touchStart"
       @touchend="touchEnd"
  >
    <transition-group :name="menuSlide" tag="div" class="main">
      <projects :projects="projects"
                key="projects"
                :slideIn="slideIn"
                v-if="selectedMenu===0"
                @show-project="showProject"
      ></projects>
      <introduction key="introduction" v-if="selectedMenu===1"></introduction>
      <experience :experiences="experiences"
                  key="experience"
                  v-if="selectedMenu===2"
                  @overheight="overHeight"
      ></experience>
      <contact key="contact" v-if="selectedMenu===3"></contact>
    </transition-group>
    <div class="sidebar">
      <span class="text">{{ menu[selectedMenu].eng.toUpperCase() }}</span>
    </div>
    <v-header :state="state" @go-to-page="goToPage"></v-header>
    <project :projects="projects"
             :isProjectShowed="isProjectShowed"
             :project-index="projectIndex"
             @hide-project="hideProject"
    ></project>
  </div>
</template>

<script>
import cover1 from '@/assets/img/cover1.jpg'
import cover2 from '@/assets/img/cover2.jpg'
import cover3 from '@/assets/img/cover3.jpg'

import rs00 from '@/assets/img/resume00.jpg'
import rs01 from '@/assets/img/resume01.jpg'
import rs02 from '@/assets/img/resume02.jpg'
import rs03 from '@/assets/img/resume03.jpg'
import rs04 from '@/assets/img/resume04.jpg'
import rs05 from '@/assets/img/resume05.jpg'

import rsm00 from '@/assets/img/resume-m00.jpg'
import rsm01 from '@/assets/img/resume-m01.jpg'
import rsm02 from '@/assets/img/resume-m02.jpg'
import rsm03 from '@/assets/img/resume-m03.jpg'
import rsm04 from '@/assets/img/resume-m04.jpg'
import rsm05 from '@/assets/img/resume-m05.jpg'

import vheader from '@/components/vheader'
import projects from '@/views/Projects'
import introduction from '@/views/Introduction'
import experience from '@/views/Experience'
import project from '@/views/Project'
import contact from '@/views/Contact'

export default {
  name: 'app',
  data () {
    return {
      state: false,
      slideIn: false,
      menu: [
        {
          chi: '项目',
          eng: 'PROJECTS'
        },
        {
          chi: '介绍',
          eng: 'INTRODUCTION'
        },
        {
          chi: '经历',
          eng: 'EXPERIENCE'
        },
        {
          chi: '联系',
          eng: 'CONTACT'
        }
      ],
      selectedMenu: 0,
      isScrolled: false,
      isHeightOverflow: false,
      menuSlide: 'slide-up',
      projects: [
        {
          title: '项目一',
          img: cover1,
          pics: {
            mobile: [
              {
                id: '8d12c0e8-e6ab-55ac-9692-a993757e63b7',
                pic: rsm00
              },
              {
                id: '9d12c0e8-e6ab-55ac-9692-a993757e63b7',
                pic: rsm01
              },
              {
                id: '1d12c0e8-e6ab-55ac-9692-a993757e63b7',
                pic: rsm02
              },
              {
                id: '5818d3be-49e4-5ff6-9b78-858d5cd267a6',
                pic: rsm03
              },
              {
                id: '909dd909-cc8b-50f3-815d-8c65b0f61fe4',
                pic: rsm04
              },
              {
                id: '909dd979-cc8b-50f3-815d-8c65b0f61fe4',
                pic: rsm05
              }
            ],
            pc: [
              {
                id: '3b35498f-f876-546a-a218-37080d25e611',
                pic: rs00
              },
              {
                id: '3b85498f-f876-546a-a218-37080d25e611',
                pic: rs01
              },
              {
                id: '4b35498f-f876-546a-a218-37080d25e611',
                pic: rs02
              },
              {
                id: '5b35498f-f876-546a-a218-37080d25e611',
                pic: rs03
              },
              {
                id: '6b35498f-f876-546a-a218-37080d25e611',
                pic: rs04
              },
              {
                id: '6b36498f-f876-546a-a218-37080d25e611',
                pic: rs05
              }
            ]
          },
          info: {
            demo: 'http://eeewl1250.gitee.io/eleme/#/goods',
            github: 'https://github.com/eeewl1250/elm-vue'
          }
        },
        {
          title: '这是项目二二二二',
          img: cover2,
          pics: {
            pc: [
              {
                id: '3b35498f-f876-546a-a218-37080d25e611',
                pic: rs01
              },
              {
                id: '0f20edd8-4776-5d33-8d1f-78b91b551e29',
                pic: rs02
              },
              {
                id: 'b6cd74b0-f1ee-53fa-a54f-be408ec6e7d3',
                pic: rs03
              },
              {
                id: '0da82b52-89e2-5c7c-b894-3609d415bc62',
                pic: rs04
              }
            ]
          },
          info: {
            demo: 'http://eeewl1250.gitee.io/eleme/#/goods',
            github: 'https://github.com/eeewl1250/elm-vue'
          }
        },
        {
          title: '项目三在此',
          img: cover3,
          pics: {
            mobile: [
              {
                id: '8d12c0e8-e6ab-55ac-9692-a993757e63b7',
                pic: rsm01
              },
              {
                id: '5818d3be-49e4-5ff6-9b78-858d5cd267a6',
                pic: rsm02
              },
              {
                id: '909dd909-cc8b-50f3-815d-8c65b0f61fe4',
                pic: rsm03
              },
              {
                id: 'cfcd5e9a-d561-5cd5-a825-7380613dfbc4',
                pic: rsm04
              }
            ]
          },
          info: {
            demo: 'http://eeewl1250.gitee.io/eleme/#/goods',
            github: 'https://github.com/eeewl1250/elm-vue'
          }
        }
      ],
      experiences: [
        {
          dateFrom: '2017-06',
          dateTo: '2017-09',
          title: 'xx公司实习',
          desc: '使用HTML、Css、Bootstrap 编写页面，通过优雅降级，处理各种浏览器兼容性问题。\n使用javascript实现页面中需要效果。'
        },
        {
          dateFrom: '2017-12',
          dateTo: '2018-03',
          title: 'xx公司实习',
          desc: '负责公司现有项目和新项目的前端修改调试和开发工作。\n与设计团队、后端开发团队紧密配合，确保软件实施、优化网站前端性能。'
        },
        {
          dateFrom: '2018-06',
          dateTo: '2018-09',
          title: 'xx公司实习',
          desc: '负责符合W3C标准、多浏览器兼容、语义化的Web前端网页产品功能的开发，调试和维护，实现一流的用户交互界面。'
        }
      ],
      isProjectShowed: false,
      projectIndex: -1,
      bodyHeight: document.body.clientHeight,
      resizeTimer: false,
      touchY: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.state = true
      this.slideIn = true
      setTimeout(() => {
        this.slideIn = false
      }, 2000)
      // 监听视口变化
      window.onresize = () => {
        if (!this.resizeTimer) {
          this.bodyHeight = document.body.clientHeight

          console.log(this.bodyHeight)
          this.resizeTimer = true
          setTimeout(() => {
            this.resizeTimer = false
          }, 400)
        }
      }
    })
  },
  components: {
    'v-header': vheader,
    projects,
    introduction,
    experience,
    project,
    contact
  },
  watch: {
    bodyHeight (val) {
      console.log(val)
    }
  },
  methods: {
    /* 移动端触摸事件 */
    touchStart (evt) {
      const changedTouch = evt.changedTouches[0]
      this.touchY = changedTouch.pageY
    },
    touchEnd (evt) {
      const changedTouch = evt.changedTouches[0]
      const distanceY = changedTouch.pageY - this.touchY
      if (Math.abs(distanceY) < 50) return
      this.changeMenu({ wheelDelta: distanceY })
    },
    changeMenu (e) {
      // project页面出现时，禁止底层滚动
      // 滚动切换project中的图片
      if (this.isProjectShowed) return

      // 页面内容超过窗口高度，滚动页面内容
      if (this.isHeightOverflow) return

      // 1s内滚动只生效一次
      if (this.isScrolled) return
      // 禁止projects的入场动画
      this.slideIn = false
      //  切换menu
      this.isScrolled = true
      const len = this.menu.length
      this.selectedMenu = (this.selectedMenu + (e.wheelDelta > 0 ? -1 : 1) + len) % len
      this.menuSlide = e.wheelDelta > 0 ? 'slide-down' : 'slide-up'

      // 1s内滚动只生效一次
      setTimeout(() => {
        this.isScrolled = false
      }, 1000)
    },
    showProject (projectIndex) {
      this.isProjectShowed = true
      this.projectIndex = projectIndex
    },
    hideProject () {
      this.isProjectShowed = false
    },
    goToPage (index) {
      this.selectedMenu = index
      this.isHeightOverflow = false
    },
    overHeight (isOverHeight) {
      this.isHeightOverflow = isOverHeight
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html
  font-size: 14px
#app
  font-family: 'Microsoft YaHei UI Light', Roboto, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  font-size: 0
  color: #2c3e50
  .sidebar
    position: fixed
    left: calc(10vw - 100px)
    top: 50vh
    width: 200px
    transform: rotate(-90deg)
    text-align: center
    .text
      display: inline-block
      padding: 3px 0
      font-size: 13px
      color: #bbb
      letter-spacing: 3px
      cursor: default
      transition: all 0.6s
      &:after
        display: block
        position: absolute
        right: 0
        margin-top: 5px
        content: '.'
        width: 0
        height: 0
        overflow: hidden
        border-bottom: 1px solid #bbb
        transition: all 0.6s
      &:hover
        color: #999
        transform: /*rotate(-90deg) */scaleX(1.3)
        transition: all 0.6s
        &:after
          border-bottom-color: #999
          left: 0
          width: 100%
          transition: all 0.6s
  .main
    position: fixed
    /*top: 15vh*/
    top: 0
    bottom: 0
    left: 0
    right: 0
    .slide-up-enter
      top: 100vh
      opacity: 0
    .slide-up-enter-to, .slide-up-leave
      top: 0
      opacity: 1
    .slide-up-leave-to
      top: -100vh
      opacity: 0
    .slide-up-enter-active, .slide-up-leave-active
      transition: all 1s

    .slide-down-enter
      top: -100vh
      opacity: 0
    .slide-down-enter-to, .slide-down-leave
      top: 0
      opacity: 1
    .slide-down-leave-to
      top: 100vh
      opacity: 0
    .slide-down-enter-active, .slide-down-leave-active
      transition: all 1s
</style>
