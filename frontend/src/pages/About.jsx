function About() {
    return (
        <section className="bg-gray-300 px-4 py-10  ">
            <div className="text-center">
                <p className="text-xl text-gray-900 mb-2">About Us</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
                    Image based Detection and Classification of <br className="hidden lg:block" /> Pulmonary Abnormalities using Deep Learning Techniques
                </h2>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed max-w-3xl mx-auto">
                    This project is the outcome of our one-year academic work for CSE499A and CSE499B. In CSE499A, we focused primarily on background research by studying related papers and existing works. During CSE499B, we applied that knowledge to build and fine-tune deep learning models, achieving over 90% accuracy. The system uses architectures like VGG16, ResNet-152, and EfficientNet-B7 to classify chest X-ray images into four categories: COVID-19, Pneumonia, Lung Opacity, and Normal. By leveraging transfer learning, these models help provide fast and accurate detection of pulmonary diseases.
                    The dataset includes 4,219 labeled images, sourced from Mendeley Data (Talukder, 2023), supporting the project's aim to improve medical diagnostic precision and efficiency.
                </p>


                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
                    <div className="bg-gray-100 p-4 rounded-xl shadow text-center">
                        <p className="text-l font-bold text-indigo-600">CNN with VGG-16</p>
                        <p className="text-sm text-gray-600">90% Accuracy</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl shadow text-center">
                        <p className="text-l font-bold text-indigo-600">VGG-19</p>
                        <p className="text-sm text-gray-600">93% Accuracy</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl shadow text-center">
                        <p className="text-l font-bold text-indigo-600">RESNET-152</p>
                        <p className="text-sm text-gray-600">90% Accuracy</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl shadow text-center">
                        <p className="text-l font-bold text-indigo-600">EFFICIENTNET-B7</p>
                        <p className="text-sm text-gray-600">92% Accuracy</p>
                    </div>
                </div>
            </div>


            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-black">Our Team</h2>
                </div>



                <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    <div class="text-center">
                        <div class="mt-2 sm:mt-4">
                        </div>
                    </div>


                    <div class="text-center">
                        <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="sns1.jpg" />
                        <div class="mt-2 sm:mt-4">
                            <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg text-neutral-600">
                                Dr. Shahnewaz Siddique (Supervisor)
                            </h3>
                            <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-600">
                                Associate Professor, North South University
                            </p>
                        </div>
                    </div>


                    <div class="text-center">
                        <div class="mt-2 sm:mt-4">

                        </div>
                    </div>


                    <div class="text-center">
                        <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="mudachir.jpg" alt="Avatar" />
                        <div class="mt-2 sm:mt-4">
                            <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-900">
                                Md. Mudachir Uddin
                            </h3>
                            <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-600">
                                Computer Science Graduate, North South University
                            </p>
                        </div>
                    </div>


                    <div class="text-center">
                        <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="rasa.jpg" alt="Avatar" />
                        <div class="mt-2 sm:mt-4">
                            <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-900">
                                Rasa Jebin Hossain
                            </h3>
                            <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-600">
                                Computer Science Graduate, North South University
                            </p>
                            
                        </div>
                    </div>


                    <div class="text-center">
                        <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="" alt="Avatar" />
                        <div class="mt-2 sm:mt-4">
                            <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-900">
                                Maisha Shabnam Chowdhury
                            </h3>
                            <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-600">
                                Computer Science Graduate, Brac University
                            </p>
                             <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-500">
                                **Special thanks to her for valuable support in building the architecture of ResNet and EfficientNet-B7.**
                            </p>
                        </div>
                    </div>

                    <div class="text-center">
                        <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="" alt="Avatar" />
                        <div class="mt-2 sm:mt-4">
                            <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-900">
                                Naima Mohsin Raian
                            </h3>
                            <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-600">
                                Computer Science Graduate, North South University
                            </p>
                        </div>
                    </div>









                </div>

            </div>

            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-8">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800">Project Poster</h2>
            </div>

            <div className="mx-auto px-4 py-10 max-w-7xl rounded-2xl overflow-hidden shadow border border-gray-600 mb-10">
                <img
                    className="w-full h-auto object-cover"
                    src="/poster.jpg"
                    alt="Project visual"
                />

            </div>


            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-8">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800">Project Demonstration Video</h2>
            </div>

            <div className="mx-auto px-4 py-10 max-w-7xl rounded-2xl overflow-hidden shadow border border-gray-600 mb-10">
                <video
                    className="w-full h-auto object-cover"
                    src="/pl.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
            </div>



        </section>
    );
}

export default About;
