import React from 'react';

const Blog = () => {
    return (
        <section class="bg-white mt-20 mb-20 dark:bg-gray-900">
            <div class="container px-6 py-12 mx-auto">
                <h1 class="text-2xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Frequently asked questions.</h1>

                <div class="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>

                        <div>
                            <h1 class="text-xl font-semibold text-gray-700 dark:text-white">What is cors?</h1>

                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                            Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>

                        <div>
                            <h1 class="text-xl font-semibold text-gray-700 dark:text-white">Why are you using firebase?</h1>

                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                            The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>

                        <div>
                            <h1 class="text-xl font-semibold text-gray-700 dark:text-white">What other options do you have to implement authentication?</h1>

                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>

                        <div>
                            <h1 class="text-xl font-semibold text-gray-700 dark:text-white">How does the private route work?</h1>

                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                            </p>
                        </div>
                    </div>

                    <div>
                        <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>

                        <div>
                            <h1 class="text-xl font-semibold text-gray-700 dark:text-white">What is Node? How does Node work?</h1>

                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;