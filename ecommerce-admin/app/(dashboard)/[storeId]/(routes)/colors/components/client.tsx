"use client";

import React from "react";
import {useRouter, useParams} from "next/navigation";
import {Plus} from "lucide-react";

import {Heading} from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/components/ui/data-table";
import {ApiList} from "@/components/ui/api-list";

import {ColorColumn, columns} from "./columns";

interface ColorsClientProps {
    data: ColorColumn[];
}

export const ColorsClient: React.FC<ColorsClientProps> = ({data}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Colors (${data.length})`}
                    description="Manage colors for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add New
                </Button>
            </div>
            <Separator/>
            <DataTable columns={columns} data={data} searchKey="name" />
            <Heading title="API" description="API calls for Colors" />
            <Separator />
            <ApiList entityName="colors" entityIdName="colorId" />
        </>
    );
};
