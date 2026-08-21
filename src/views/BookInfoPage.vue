<script setup>
import {useRoute} from "vue-router";
import {useGetBookStore} from "@/stores/book/getBook.js";
import FormButton from "@/components/UI/FormButton.vue";
import {useAddCommentStore} from "@/stores/book/addComment.js";
import {reactive, ref, watch} from "vue";
import {useGetUserStore} from "@/stores/user/getCurrentUser.js";
import {useClickLikeStore} from "@/stores/book/clickLike.js";
import { watchDebounced} from "@/stores/debouncedRef.js";

const bookStore = useGetBookStore();
const route = useRoute();
const addCommentStore = useAddCommentStore();
const getUserStore = useGetUserStore();
const clickLikeStore = useClickLikeStore();

getUserStore.fetchUser();

const commentData = reactive({
    author: 'api/users/' + getUserStore.getUser.id,
    book: 'api/books/' + route.params.bookId,
    text: ''
})

bookStore.fetchBook(route.params.bookId);

const addComment = async () => {
    await addCommentStore.add(commentData);
    commentData.text = '';
    await bookStore.fetchBook(route.params.bookId);
}

const like = async () => {
    await clickLikeStore.fetchLike({
        book: commentData.book,
    });
    await bookStore.fetchBook(route.params.bookId);
}

const isLiked = ref(bookStore.getBook.isLiked);

watch(
    () => bookStore.getBook.isLiked,
    (newVal) => {
        isLiked.value = newVal;
    }
);

watchDebounced(isLiked, () => {
    if (isLiked.value !== bookStore.getBook.isLiked) {
        like();
    }
})

</script>

<template>
    <div class="bg-my-gray grow gap-5 p-5 text-white">
        <h1 class="text-4xl font-semibold mb-10">{{ bookStore.getBook.name }}</h1>
        <p>{{ bookStore.getBook.text }}</p>
    </div>

    <div class="flex flex-col bg-my-gray grow gap-5 p-5 text-white">
        <div class="flex justify-between mb-10">
            <h2 class="text-2xl font-medium">Comments</h2>
            <button v-if="isLiked" class="flex items-end" @click="isLiked=!isLiked">
                <svg height="40px" viewBox="0 0 512 512" width="40px" xml:space="preserve"
                     xmlns="http://www.w3.org/2000/svg">
                    <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
                        <g><path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" style="fill:#FF7979;"/></g></g>
                    <g id="Layer_1"/>
                </svg>
            </button>
            <button v-else class="flex items-end" @click="isLiked=!isLiked">
                <svg height="40px" viewBox="0 0 512 512" width="40px" xml:space="preserve"
                     xmlns="http://www.w3.org/2000/svg">
                    <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
                        <g><path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" style="fill:#FFFFFF;"/></g>
                    </g>
                    <g id="Layer_1"/>
                </svg>
            </button>
        </div>

        <div v-for="comment of bookStore.getBook.comment">
            <div class="flex items-center gap-1">
                <svg height="18px" viewBox="0 0 24 24" width="18px" xmlns="http://www.w3.org/2000/svg"><title/>
                    <circle cx="12" cy="8" fill="#FFFFFF" r="4"/>
                    <path d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z"
                          fill="#FFFFFF"/>
                </svg>
                <h3 class="font-medium font-serif">{{ comment.author.username }}</h3>
            </div>
            <p class="pl-5">{{ comment.text }}</p>
        </div>
        <div class="flex flex-col mt-auto gap-5">
            <textarea v-model="commentData.text" class="rounded h-30 bg-white text-black "
                      placeholder="Comment..."></textarea>
            <FormButton @click.prevent="addComment">Add comment</FormButton>
        </div>
    </div>
</template>
