// А в самом модуле уже далее будем описывать все используемые мутации/геттеры/действия.

export default {
    state: {
        articles: [],
        comments: [],
        categories: [],
        //
        activeArticle: null,
        activeCategory: null,
    },
    getters: {
        lastArticles(state) {
            return [];
        },
        lastComments(state) {
            return [];
        },
        popularCategories(state) {
            return [];
        },
        activeCategoryArticles(state) {
            return [];
        },
    },
    mutations: {},
    actions: {
        async loadArticles({ commit, state }) {},
        async loadComments({ commit, state }) {},
        async loadCategories({ commit, state }) {},
        async loadActiveCategory(context, id) {},
        async loadActiveArticle(context, id) {},
        async addComment({ commit }, payload) {},
    },
}