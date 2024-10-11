import React, { use } from "react";
import ContactForm from "@/components/forms/ContactForm";
import PageHeader from "@/components/common/PageHeaders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { House, Phone } from "lucide-react";

export default function Contact() {
    return (
        <main className="w-full">
            <PageHeader title="Contact Us" />
            <section className="m-10 flex max-w-[2000px] flex-col justify-center gap-8 overflow-hidden rounded-lg bg-zinc-100 dark:bg-gray-900 md:m-20 lg:flex-row lg:gap-0">
                <div className="order-first w-full p-10 lg:order-none lg:w-1/2">
                    <h2 className="mb-10 text-center text-xl font-medium leading-6 text-gray-900">
                        Get in Touch
                    </h2>
                    <ContactForm />
                </div>
                <div className="flex min-h-96 w-full flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 lg:w-1/2">
                    <h2 className="mb-10 text-center text-xl font-medium leading-6 text-gray-900">
                        Contact details
                    </h2>
                    <Tabs
                        defaultValue="address"
                        className="w-3/4 max-w-[600px]"
                    >
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="address">Address</TabsTrigger>
                            <TabsTrigger value="phone">Phone</TabsTrigger>
                        </TabsList>
                        <TabsContent value="address">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex flex-row gap-2">
                                        <House /> Address
                                    </CardTitle>
                                    <CardDescription>
                                        Come visit us at our office in Geneva,
                                        Switzerland.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <address>
                                        Chemin des Fauvettes 6, 1212
                                        Grand-Lancy, Suisse
                                    </address>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="phone">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex flex-row gap-2">
                                        <Phone /> Phone
                                    </CardTitle>
                                    <CardDescription>
                                        Need to talk to us? Give us a call.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p>+41 22 123 45 67</p>
                                    <p>+41 22 123 45 68</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </main>
    );
}
