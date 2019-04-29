<template>
    <div>
        <button class="m-3" v-if="!editionIndex && !addingItem"
                @click="toggleAddingItem">Add new one
        </button>
        <list v-if="!editionIndex && !addingItem" :items="elementsList"></list>
        <edit v-if="editionIndex" :item="elementsList[editionIndex]"></edit>
        <add-form v-if="addingItem" @close="toggleAddingItem"></add-form>
    </div>
</template>

<script>
    import List from './List.vue';
    import AddForm from './Add-Form.vue';
    import Edit from './Edit.vue';


    export default {
        data: function () {
            return {
                editionIndex: null,
                addingItem: false,
                page: 1,
                elementsList: [
                    {
                        id: 1,
                        title: 'Item Title 1',
                        body: 'Item Body 1'
                    },
                    {
                        id: 2,
                        title: 'Item Title 2',
                        body: 'Item Body 1'
                    }
                ]
            };
        },
        components: {
            List,
            AddForm,
            Edit
        },
        $watch: {
            page() {
                this.loadData();
            }
        },
        methods: {
            created() {
                this.loadData();
            },
            loadData() {
                this.$http.post('main/get-most-popular-articles')
                    .then(
                        (res) => {
                            console.log(res);
                        },
                        (err) => {
                            console.log(err);
                        });
            },
            changePage(page) {
                this.page = page;
            },
            openEdition(index) {
                this.editionIndex = index;
            },
            toggleAddingItem() {
                this.addingItem = !this.addingItem;
            }
        }
    }
</script>
