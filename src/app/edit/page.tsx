"use client"

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({searchParams: {publicId}}: {searchParams: {publicId:string}}){
    const [transformation, setTransformation] = useState<undefined | "generative-fill" | "blur" | "remove-background" | "grayscale" | "pixelate">()
    return (
        <section>

        <div className="flex flex-col gap-8">
        <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>

       <div className="flex gap-4">
       <Button variant="ghost" onClick={()=>setTransformation(undefined)}>Clear All </Button>
        <Button variant="default" onClick={()=>setTransformation("generative-fill")}>Generative Fill</Button>
        <Button variant="default" onClick={()=>setTransformation("blur")}>Blur</Button>
        <Button variant="default" onClick={()=>setTransformation("remove-background")}>Remove Background</Button>
        <Button variant="default" onClick={()=>setTransformation("grayscale")}>Grayscale</Button>
          <Button variant="default" onClick={()=>setTransformation("pixelate")}>Pixelate</Button>
       </div>

        <div className="grid grid-cols-2 gap-12">
        <CldImage src={publicId} alt="some image" width="300" height="200"/>

        {transformation === 'generative-fill' &&
        <CldImage src={publicId} alt="some image" width="1200" height="1400"
         crop="pad"
         fillBackground
         />
        }
         {transformation === 'blur' &&
        <CldImage src={publicId} alt="some image" width="1200" height="1400"
            blur="1200"
         />
        }
        {transformation === 'remove-background' &&
        <CldImage src={publicId} alt="some image" width="1200" height="1400"
        removeBackground
         />
        }
         {transformation === 'grayscale' &&
        <CldImage src={publicId} alt="some image" width="1200" height="1400"
        grayscale
         />
        }
         {transformation === 'pixelate' &&
        <CldImage src={publicId} alt="some image" width="1200" height="1400"
        pixelate
         />
        }
        </div>
        </div>
    </section>
    )
}