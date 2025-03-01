'use client'

import { useRouter } from "next/navigation";

import { ArrowLeft, Button } from "@/shared/ui";

export const BackButton = () => {
    const router = useRouter();

    const handleBack = () => router.back()

    return <Button onClick={handleBack}><ArrowLeft /></Button>
}