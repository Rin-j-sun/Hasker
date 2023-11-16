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
    prevArticle(state) {
        let prevItem = null;
        if (state.activeArticle) {
            state.articles.forEach((item, index) => {
                if (item.id == state.activeArticle.id) {
                    prevItem = state.articles[index-1] || null;
                }
            });
        }
        return prevItem;
    },
    nextArticle(state) {
        let nextItem = null;
        if (state.activeArticle) {
            state.articles.forEach((item, index) => {
                if (item.id == state.activeArticle.id) {
                    nextItem = state.articles[index+1] || null;
                }
            });
        }
        return nextItem;
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