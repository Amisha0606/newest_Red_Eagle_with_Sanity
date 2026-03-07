import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQ = () => {
    const categories = [
        {
            id: "admissions",
            label: "Admissions",
            icon: <MessageCircle className="w-4 h-4 mr-2" />,
            questions: [
                {
                    question: "How can I apply for admission at Red Eagle Public School?",
                    answer: "You can apply for admission by filling out our online admission form available on the website, or by visiting our school campus to collect the prospectus and application form."
                },
                {
                    question: "What are the age requirements for different grades?",
                    answer: "The age requirements follow CBSE guidelines. For Nursery, the child should be 3+ years as of March 31st of the academic year. For Grade 1, the child should be 6+ years."
                },
                {
                    question: "What documents are required for admission?",
                    answer: "Required documents include the child's Birth Certificate, Aadhaar Card, Transfer Certificate (for Grade 2 and above), previous year's Report Card, and recent passport-sized photographs."
                },
                {
                    question: "Is there an entrance test for new admissions?",
                    answer: "Yes, for Grade 1 and above, we conduct a basic aptitude assessment to understand the student's level and ensure proper placement."
                }
            ]
        },
        {
            id: "academics",
            label: "Academics",
            icon: <HelpCircle className="w-4 h-4 mr-2" />,
            questions: [
                {
                    question: "Which curriculum does the school follow?",
                    answer: "Red Eagle Public School follows the CBSE (Central Board of Secondary Education) curriculum, focusing on holistic development and academic excellence."
                },
                {
                    question: "What is the student-teacher ratio?",
                    answer: "We maintain a healthy student-teacher ratio of 25:1 to ensure personalized attention and effective learning for every student."
                },
                {
                    question: "Are there smart classrooms and digital learning facilities?",
                    answer: "Yes, our classrooms are equipped with modern teaching aids, including smart boards and digital resources to enhance the learning experience."
                },
                {
                    question: "Does the school provide remedial classes for students?",
                    answer: "Yes, we provide special remedial sessions after school hours for students who need extra support in specific subjects."
                }
            ]
        },
        {
            id: "campus",
            label: "Campus Life",
            icon: <MessageCircle className="w-4 h-4 mr-2" />,
            questions: [
                {
                    question: "What are the school timings?",
                    answer: "Summer Timings: 7:30 AM to 1:30 PM. Winter Timings: 8:30 AM to 2:30 PM. Specific timings for different grades are shared at the start of the session."
                },
                {
                    question: "Does the school provide transport facilities?",
                    answer: "Yes, we have a fleet of safe and GPS-tracked school buses covering various routes in and around the city."
                },
                {
                    question: "What extracurricular activities are offered?",
                    answer: "We offer a wide range of activities including Sports (Cricket, Basketball, Badminton), Music, Dance, Arts & Crafts, Debate, and various hobby clubs."
                },
                {
                    question: "Is there a focus on safety and security?",
                    answer: "Absolutely. The campus is monitored 24/7 with CCTV cameras, and we have trained security personnel. All visitors are strictly screened before entry."
                }
            ]
        }
    ];

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-red-600">Questions</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about Red Eagle Public School.
                    </p>
                </div>

                <Tabs defaultValue="admissions" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-xl">
                        {categories.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className="rounded-lg data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all duration-300 py-3"
                            >
                                {category.icon}
                                {category.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {categories.map((category) => (
                        <TabsContent key={category.id} value={category.id} className="mt-0">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {category.questions.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border border-gray-200 rounded-xl px-6 bg-gray-50/50 hover:bg-white transition-colors duration-200"
                                    >
                                        <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:no-underline py-5">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </TabsContent>
                    ))}
                </Tabs>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">Still have more questions?</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                    >
                        Contact support team
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
