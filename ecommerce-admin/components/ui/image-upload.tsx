"use client";

import Image from "next/image";
import React, {useEffect, useState} from "react";
import {ImagePlus, Trash} from "lucide-react";
import {CldUploadWidget} from "next-cloudinary";

import {Button} from "@/components/ui/button";

interface ImageUploadProps {
    disable: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({disable, onChange, onRemove, value}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onUpload = (result: any) => {
        onChange(result.info.secure_url);
    };

    if (!isMounted) return null;

    return (
        <div>
            <div className="mb-4 flex items-center gap-4">
                {value.map((url, index) => (
                    <div key={index} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
                        <div className="z-10 absolute top-2 right-2">
                            <Button type="button" onClick={() => onRemove(url)} variant="destructive" size="icon">
                                <Trash className="h-4 w-4" />
                            </Button>
                        </div>
                        <Image
                            fill
                            className="object-cover"
                            src={url}
                            alt="Image"
                        />
                    </div>
                ))}
            </div>
            <CldUploadWidget onUpload={onUpload} uploadPreset="jxuxmloz">
                {({ open }) => {
                    const onClick = () => {
                        open();
                    }

                    return (
                        <Button
                            type="button"
                            disabled={disable}
                            onClick={onClick}
                            variant="secondary"
                        >
                            <ImagePlus className="h-4 w-4 mr-2" />
                            Upload an Image
                        </Button>
                    );
                }}
            </CldUploadWidget>
        </div>
    );
};

export default ImageUpload;
