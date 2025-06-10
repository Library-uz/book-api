<script setup>

</script>

<template>
    <header class="flex justify-between items-center bg-my-gray px-10 h-20 sticky top-0 text-white mb-5 shadow-md">
        <a href="#" class="text-3xl font-semibold">Lo<span class="text-my-blue-gray">go</span></a>
        <nav class="hidden lg:block">
            <ul class="flex gap-10">
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">Home</li>
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">Contact</li>
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">About</li>
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">Gallery</li>
                <li class="border-b-1 border-transparent cursor-pointer hover:border-white transition-all">Categories</li>
            </ul>
        </nav>

        <div>
            <button class="lg:hidden text-3xl hover:bg-white hover:text-my-gray p-2 rounded-lg transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/>
                </svg>
            </button>
            <button class="hidden lg:inline px-8 py-2 bg-my-blue-gray rounded-lg hover:bg-white hover:text-my-blue-gray cursor-pointer transition-all mr-5">Sign Up</button>
            <button class="hidden lg:inline px-8 py-2 bg-my-blue-gray rounded-lg hover:bg-white hover:text-my-blue-gray cursor-pointer transition-all ">Sign In</button>
        </div>
    </header>

    <section class="flex flex-col md:flex-row gap-5">
        <aside class="py-5 bg-my-gray  md:w-72 text-white flex-none h-fit md:sticky md:top-[100px]">
            <ul>
                <li class="py-2 px-5 cursor-pointer hover:bg-my-blue-gray-light hover:text-gray-800">Detiktiv</li>
                <li class="py-2 px-5 cursor-pointer hover:bg-my-blue-gray-light hover:text-gray-800">Dramma</li>
                <li class="py-2 px-5 cursor-pointer hover:bg-my-blue-gray-light hover:text-gray-800">Tragediya</li>
                <li class="py-2 px-5 cursor-pointer hover:bg-my-blue-gray-light hover:text-gray-800">Roman</li>
                <li class="py-2 px-5 cursor-pointer hover:bg-my-blue-gray-light hover:text-gray-800">Ilmiy</li>
            </ul>
        </aside>
        <div class="bg-my-gray grow gap-5 p-5 grid grid-cols-12">
            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>

            <div class="bg-my-beige p-5 col-span-6 lg:col-span-4 xl:col-span-3">
                <div class="h-60 overflow-hidden mb-2">
                    <img class="h-full w-full object-cover" src="/img1.png" alt="kitob rasmi">
                </div>
                <h4 class="text-lg font-semibold">O'tgan kunlar</h4>
                <p class="text-sm text-black/70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque?</p>

                <button class="w-full text-white hover:bg-white hover:text-my-blue-gray transition-all cursor-pointer  rounded-lg text-clip bg-my-blue-gray mt-5">
                    <a class="w-full block py-2" href="./book.html">O'qish</a>
                </button>
            </div>


            <div class="col-span-12">
                <div class="flex gap-4 w-fit">
                    <button class="p-2 rounded-md bg-my-beige size-10 cursor-pointer hover:text-my-beige hover:bg-transparent hover:ring-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18l-6-6l6-6"/>
                        </svg>
                    </button>
                    <button class="p-2 rounded-md bg-my-beige size-10 cursor-pointer hover:text-my-beige hover:bg-transparent hover:ring-1">1</button>
                    <button class="p-2 rounded-md bg-my-beige size-10 cursor-pointer hover:text-my-beige hover:bg-transparent hover:ring-1">2</button>
                    <button class="p-2 rounded-md bg-my-beige size-10 cursor-pointer hover:text-my-beige hover:bg-transparent hover:ring-1">3</button>
                    <button class="p-2 rounded-md bg-my-beige size-10 cursor-pointer hover:text-my-beige hover:bg-transparent hover:ring-1">4</button>
                    <button class="p-2 rounded-md bg-my-beige size-10 cursor-pointer hover:text-my-beige hover:bg-transparent hover:ring-1">5</button>
                    <button class="p-2 rounded-md bg-my-beige size-10 cursor-pointer hover:text-my-beige hover:bg-transparent hover:ring-1">6</button>
                    <button class="p-2 rounded-md bg-my-beige size-10 cursor-pointer hover:text-my-beige hover:bg-transparent hover:ring-1">
                        <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18l-6-6l6-6"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-my-gray px-10 h-40 flex justify-between items-center mt-5 text-white text-lg">
        <p>Barcha huquqlar himoyalangan &copy;</p>
        <p>2025 yil</p>
    </footer>
</template>

<style scoped>
</style>
