<template>
    <b-row>
        <b-col md="8" lg="9">
            <ListItems :items="lastArticles">
                <template v-slot:default="props">
                    <ArticleItem :item="props.item"></ArticleItem>
                </template>
                <template v-slot:empty>
                    Статьи еще пишутся :)
                </template>
            </ListItems>
        </b-col>
        <b-col md="4" lg="3">
            <ListItems :items="popularCategories" v-slot="props">
                <router-link :to="getCategoryRoute(props.item)">
                    {{ props.item.title }}
                </router-link>
            </ListItems>
            <CommentItem v-for="(item, index) in lastComments" :key="index" :item="item"></CommentItem>
        </b-col>
    </b-row>
</template>

<script>
import ListItems from '@/components/ListItems.vue'
import ArticleItem from '@/components/ArticleItem.vue'
import CommentItem from '@/components/CommentItem.vue'
import {
    mapGetters,
} from 'vuex'

export default {
    name: 'Index',
    components: {
        ListItems,
        ArticleItem,
        CommentItem,
    },
    data() {
        return {};
    },
    methods: {
        getCategoryRoute(item) {
            return {
                name: 'Category',
                params: {
                    category_id: item.id,
                },
            };
        },
    },
    computed: {
        ...mapGetters([
            'lastArticles',
            'lastComments',
            'popularCategories',
        ]),
    },
    created() {
        /**
         * Запросы делаем к действиям (а не мутациям)
         */
        this.$store.dispatch('loadArticles');
        this.$store.dispatch('loadComments');
        this.$store.dispatch('loadCategories');
    },
}
</script>