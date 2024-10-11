import Image from "next/image";
import PageHeader from "@/components/common/PageHeaders";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center dark:bg-gray-800">
            <PageHeader title="About Us" />
            <div className="mx-auto max-w-3xl px-10 py-10">
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h2 className="text-xl font-medium leading-6 text-gray-900">
                            Who We Are
                        </h2>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Founded
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    2023
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Mission
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    To revolutionize the way people interact
                                    with technology
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Team
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    A diverse group of passionate individuals
                                    dedicated to innovation
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1661759404487-083b4a9703e4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Team photo"
                        width={400}
                        height={300}
                        className="mx-auto rounded-lg shadow-lg"
                        priority={false}
                    />
                    <p className="mt-4 text-sm text-gray-600">
                        Our amazing team at work
                    </p>
                </div>

                <div className="mt-8 bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Contact Us
                        </h3>
                        <div className="mt-2 max-w-xl text-sm text-gray-500">
                            <p>
                                Have questions or want to learn more? Get in
                                touch with us!
                            </p>
                        </div>
                        <div className="mt-5">
                            <a
                                href="mailto:info@example.com"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
