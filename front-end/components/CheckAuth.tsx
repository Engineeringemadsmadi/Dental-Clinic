"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthChecker() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggin, setIsLoggin] = useState(false);
    const router = useRouter();     

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/check-login", {
                    method: "GET",
                    credentials: "include",
                });
                const response2 = await fetch("http://localhost:5000/api/check-admin", {
                    method: "GET",
                    credentials: "include",
                });

                const data = await response.json();
                const data2 = await response2.json();
                
                console.log("login :", data.isLoggedIn)
                console.log("login admin:", data2.isAdmin)
                setIsLoggin(data.isLoggedIn && data2.isAdmin);
                if (!data.isLoggedIn && !data2.isAdmin) {
                    router.push("/Login"); // توجيه المستخدم فقط إذا لم يكن مسجلاً
                }
            } catch (error) {
                console.log("خطأ في التحقق من الجلسة:", error);
            } finally {
                setIsLoading(false);
            }
        };
        checkAuth();
    }, []);

    if (isLoading) return null; // منع التحميل الزائد
    console.log("issssssssss logggggin", isLoggin)
    return null;
}