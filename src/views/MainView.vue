<template>
    <div>YAY!</div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'

@Component({
    components: {
    },
    data() {
        return {
            drawer: null
        }
    }
})
export default class MainView extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
