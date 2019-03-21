import VueSwitchToggle from './switch-toggle.vue'

export default {
    install(Vue, options = {}) {
        Vue.component(VueSwitchToggle.name, VueSwitchToggle)
    }
}