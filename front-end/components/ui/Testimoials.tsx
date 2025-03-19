"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import image1 from "@/public/images/person-1.png";
import image2 from "@/public/images/person-2.png";
import image3 from "@/public/images/person-3.png";
const testimonials = [
    {
        id: 1,
        name: "م.عماد الصمادي",
        image: image1,
        rating: 5,
        text: "تطبيق رائع ساعدني أتواصل مع دكتور خصوصاً لما تكون عندي مشكلة صحية ضرورية",
    },
    {
        id: 2,
        name: "أ.ماريا هيثم",
        image: image2,
        rating: 5,
        text: "تواصلت مع طبيب عبر التطبيق وتفاجأت بسرعة الرد والاستجابة، وكان الطبيب متعاون جدًا.",
    },
    {
        id: 3,
        name: "جابر سمير",
        image: image3,
        rating: 4,
        text: "كنت مترددة من مشاركة بياناتي الشخصية، ولكن بعد تجربة الخدمة والتواصل مع الطبيب شعرت بالأمان والخصوصية.",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="flex flex-col items-center text-center my-12">
            <h2 className="text-3xl font-extrabold mb-2">آراء المستخدمين</h2>
            <p className="text-gray-500 mb-6 max-w-lg">
                تجارب وآراء مستخدمي التطبيق عن خدمات الرعاية الصحية عن بعد، تعرف على قصص نجاحهم ومدى رضاهم عن الخدمة.
            </p>

            <div className="relative w-full max-w-4xl overflow-hidden border-2 rounded-sm">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={testimonials[currentIndex].id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center space-y-4"
                    >
                        <Quote className="text-gray-300 w-8 h-8" />
                        <p className="text-lg text-gray-700">"{testimonials[currentIndex].text}"</p>
                        <div className="flex items-center space-x-2">
                            <Image src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-gray-300" />
                            <span className="font-semibold text-lg">{testimonials[currentIndex].name}</span>
                        </div>
                        <div className="flex">
                            {Array.from({ length: testimonials[currentIndex].rating }, (_, i) => (
                                <Star key={i} className="text-yellow-500 w-5 h-5" fill="currentColor" />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* أزرار التنقل */}
            <div className="flex space-x-2 mt-6">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => nextSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex ? "bg-blue-500 w-4 h-4" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;