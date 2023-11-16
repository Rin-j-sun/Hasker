<template>
    <ListItems :items="items">
        <template v-slot:default="props">
            <ArticleItem :item="props.item"></ArticleItem>
        </template>
        <template v-slot:empty>
            Статьи еще пишутся :)
        </template>
    </ListItems>
</template>

<script>
import ListItems from '@/components/ListItems.vue'
import ArticleItem from '@/components/ArticleItem.vue'

export default {
    name: 'ArticleItems',
    components: {
        ArticleItem,
        ListItems,
    },
    extends: ListItems,
}
</script>