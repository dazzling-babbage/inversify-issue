<template>
    <div>YAY!</div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'
import { inject } from 'inversify-props';
import CONTAINER_IDS from "@/container";
import { Service } from "@/service/service";

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
