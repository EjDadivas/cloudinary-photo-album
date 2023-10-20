"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({searchParams: {publicId}}: {searchParams: {publicId:string}}){
    const [transformation, setTransformation] = useState<undefined | "generative-fill" | "blur" | "remove-background" | "grayscale" | "pixelate">()
    const [prompt, setPrompt] = useState("")
    const [pendingPrompt, setPendingPrompt] = useState("");
    return (
        <section>

        <div className="flex flex-col gap-8">
        <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>

       <div className="flex gap-4">
       <Button variant="ghost" onClick={()=>setTransformation(undefined)}>Clear All </Button>
       
       <div className="flex flex-col gap-4">
            <Button
              onClick={() => {
                setTransformation("generative-fill");
                setPrompt(pendingPrompt);
              }}
            >
              Apply Generative Fill
            </Button>
            <Label>Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}
            />
          </div>

        <Button variant="default" onClick={()=>setTransformation("blur")}>Blur</Button>
        <Button variant="default" onClick={()=>setTransformation("remove-background")}>Remove Background</Button>
        <Button variant="default" onClick={()=>setTransformation("grayscale")}>Grayscale</Button>
          <Button variant="default" onClick={()=>setTransformation("pixelate")}>Pixelate</Button>
       </div>

        <div className="grid grid-cols-2 gap-12">
        <CldImage src={publicId} alt="some image" width="300" height="200"/>

        {transformation === 'generative-fill' &&
        <CldImage src={publicId} alt="some image" width="1800" height="1400"
         crop="pad"
         fillBackground={
            {
                prompt: prompt
            }
         }
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