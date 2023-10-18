"use client"
import Heart from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { setAsFavoriteAction } from "../app/gallery/actions";
import { ComponentProps, useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import FullHeart from "@/components/icons/full-heart";
import { ImageMenu } from './image-menu';

export function CloudinaryImage(props:{
    imagedata: SearchResult; 
     onUnheart?: (unheartedResource: SearchResult) => void;
    }
    & Omit<CldImageProps, "src">
    ){
    const [transition, startTransition] = useTransition();
    const {imagedata, onUnheart} = props;
    const [isFavorited, setisFavorited] = useState(imagedata.tags.includes("favorite"))
    return (
        <div className="relative">
            <CldImage {...props} src={imagedata.public_id} />
           {isFavorited ? 
             <FullHeart className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer" 
             onClick={()=>{
                onUnheart?.(imagedata)
                setisFavorited(false)
                 startTransition(()=>{
                     setAsFavoriteAction(imagedata.public_id, false)
                 });
             }} />
           : 
           <Heart className="absolute top-2 left-2 hover:text-red-500 cursor-pointer" 
           onClick={()=>{
            setisFavorited(true)

               startTransition(()=>{
                   setAsFavoriteAction(imagedata.public_id, true)
               });
           }}/>
           }
           <ImageMenu image={imagedata}/>
        </div>
    )
}